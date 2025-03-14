import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: "Evaluación de Elegibilidad",
    description: "Análisis completo de tu línea ancestral para determinar tu elegibilidad para la ciudadanía italiana.",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
  },
  {
    title: "Recopilación de Documentos",
    description: "Te ayudamos a reunir y verificar todos los registros vitales y certificados necesarios.",
    image: "https://images.unsplash.com/photo-1602582703401-4b37c2840322?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Traducción y Apostilla",
    description: "Traducción profesional y certificación legal de todos tus documentos.",
    image: "https://images.unsplash.com/photo-1692650679395-4e2cb1cdeb2d?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Presentación de Solicitud",
    description: "Asistencia completa con tu proceso de solicitud en consulados o en Italia.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white w-full relative">
      {/* Background decorative elements with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-10 right-0 w-72 h-72 rounded-full bg-teal-50/50 -z-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-40 left-10 w-40 h-40 rounded-full bg-blue-50/50 -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-8 md:px-12 max-w-6xl relative z-10">
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
            NUESTROS SERVICIOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Servicios de Ciudadanía Italiana
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
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Soluciones integrales para hacer tu viaje hacia la ciudadanía lo más sencillo posible, sin importar la vía para la que califiques.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 