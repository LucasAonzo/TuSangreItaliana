import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 w-full bg-gradient-to-b from-blue-50 to-teal-50 relative overflow-hidden">
      {/* Decorative circles with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-teal-100/40 -z-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-blue-100/40 -z-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-40 right-10 w-20 h-20 rounded-full bg-teal-200/30 -z-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-40 left-10 w-16 h-16 rounded-full bg-blue-200/30 -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4"
          >
            ¿POR QUÉ ELEGIRNOS?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Expertos en Ciudadanía Italiana
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
            className="text-gray-600 mb-12 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Disfruta de un servicio personalizado en cada paso de tu viaje hacia la ciudadanía italiana con nuestro experimentado equipo de expertos legales.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12"
          >
            <div className="relative">
              {/* Italian flag accent top */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-4 left-0 right-0 h-4 z-10"
                style={{ transformOrigin: 'center' }}
              >
                <div className="flex h-full mx-8">
                  <div className="w-1/3 h-full bg-green-500 rounded-l-lg"></div>
                  <div className="w-1/3 h-full bg-white"></div>
                  <div className="w-1/3 h-full bg-red-500 rounded-r-lg"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-xl border-8 border-white"
              >
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661962723801-1015e61ec340?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Ayuntamiento italiano y bandera nacional" 
                  className="w-full h-[400px] object-cover transform transition duration-500 hover:scale-105"
                />
              </motion.div>
              
              {/* Bottom corner accent */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-teal-100 border-8 border-white flex items-center justify-center shadow-lg"
              >
                <motion.img 
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" 
                  alt="Bandera de Italia" 
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Features Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Orientación Experta",
    description: "Nuestro equipo ha gestionado cientos de solicitudes de ciudadanía exitosas.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Ahorro de Tiempo",
    description: "Navegamos por la compleja burocracia para que no tengas que perder tiempo valioso.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Paquetes Todo Incluido",
    description: "Transparencia total para tu tranquilidad. Sin costos ocultos ni sorpresas.",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Soporte Continuo",
    description: "Estamos contigo en cada paso del proceso, respondiendo a todas tus preguntas y dudas.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  }
];

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-teal-100 h-full flex flex-col"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center shadow-md mb-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </motion.div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default WhyChooseUsSection; 