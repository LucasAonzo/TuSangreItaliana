import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 w-full bg-blue-50">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight text-center md:text-left"
            >
              Comienza tu viaje hacia la ciudadanía italiana con un solo click
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-8 text-lg leading-relaxed text-center md:text-left"
            >
              Planifica e inicia tu camino hacia la ciudadanía italiana con orientación experta. Desde la evaluación de elegibilidad hasta la preparación de documentos, estamos aquí para ayudarte a reclamar tu herencia.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="bg-teal-500 hover:bg-teal-600 text-white hover:text-white px-8 py-3.5 rounded-full flex items-center font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span>Comenzar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="bg-white hover:bg-teal-50 border-2 border-teal-200 text-teal-700 hover:text-teal-800 px-8 py-3.5 rounded-full flex items-center font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Más Información</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1824&q=80" 
                  alt="Coliseo Romano - Símbolo de Italia" 
                  className="w-full h-[400px] md:h-[450px] object-cover"
                />
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                      <motion.span 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-teal-500 w-1 h-5 mr-3 rounded-full"
                      ></motion.span>
                      Descubre tu Herencia Italiana
                    </h3>
                    <div className="flex items-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="w-3 h-3 rounded-full bg-teal-500 mr-3 flex-shrink-0"
                      ></motion.div>
                      <span className="text-gray-700">Jure Sanguinis & Jure Matrimonii</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <motion.a 
                        whileHover={{ x: 10 }}
                        href="#" 
                        className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center transition-colors"
                      >
                        Explorar opciones
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 