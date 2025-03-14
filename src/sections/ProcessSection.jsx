import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Consulta Gratuita",
    description: "Programa una llamada con nuestros expertos para discutir tu historia familiar y opciones de ciudadanía."
  },
  {
    title: "Evaluación de Elegibilidad",
    description: "Investigaremos a fondo tu historia familiar para establecer tu camino de elegibilidad."
  },
  {
    title: "Recopilación de Documentos",
    description: "Te guiamos a través de la recopilación de registros vitales tanto de tu país de origen como de Italia."
  },
  {
    title: "Presentación de la Solicitud",
    description: "Completamos y presentamos tu solicitud, ya sea a través de un consulado o directamente en Italia."
  },
  {
    title: "Pasaporte y Beneficios",
    description: "Una vez reconocido, te ayudamos a solicitar tu pasaporte italiano y a entender tus nuevos beneficios."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4"
          >
            PROCESO SIMPLIFICADO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Planifica Tu Viaje Hacia la Ciudadanía
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mt-2 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-center mb-4 max-w-3xl mx-auto text-lg"
          >
            Para muchas personas, solicitar la ciudadanía italiana puede ser abrumador. Lo hacemos simple con nuestro proceso probado.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-teal-400 via-teal-500 to-blue-500 rounded-full"
            style={{ transformOrigin: 'top' }}
          ></motion.div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <TimelineStep 
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLeft={index % 2 === 0}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineStep = ({ number, title, description, isLeft, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col md:flex-row items-center"
    >
      <div className={`flex-1 md:pr-16 mb-8 md:mb-0 ${isLeft ? 'md:text-right order-2 md:order-1' : 'order-2 md:order-1'}`}>
        {isLeft && (
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold mb-3 text-teal-700">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg relative order-1 md:order-2"
        style={{ left: '0.25%', transform: 'translateX(-50%)' }}
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-full h-full rounded-full border-4 border-teal-200 opacity-20"
        ></motion.span>
        {number}
      </motion.div>
      <div className={`flex-1 md:pl-16 ${!isLeft ? 'mb-8 md:mb-0' : ''} order-3`}>
        {!isLeft && (
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-teal-400 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold mb-3 text-teal-700">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProcessSection; 