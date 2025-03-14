"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MainLayout from "../layouts/MainLayout"
import { ChevronRight } from "lucide-react"
import { services } from "../data/services-data.jsx"
import { FaWhatsapp } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ServicesPage = () => {
  // Refs for scroll navigation
  const sectionRefs = useRef({})

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const navigate = useNavigate()

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1824&q=80')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium mb-6">
              NUESTROS SERVICIOS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Servicios de Ciudadanía Italiana
            </h1>
            <p className="text-xl text-gray-300 mx-auto max-w-2xl mb-10 leading-relaxed">
              Soluciones personalizadas para cada etapa de tu proceso de ciudadanía italiana, con expertos dedicados a
              tu caso.
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content - Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div variants={staggerContainerVariants} initial="hidden" animate="visible" className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                ref={(el) => (sectionRefs.current[service.id] = el)}
                variants={fadeInUpVariants}
                className="scroll-mt-24"
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Inicia tu camino hacia la ciudadanía italiana hoy mismo
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Nuestro equipo de expertos está listo para guiarte en cada paso del proceso, con una atención
              personalizada adaptada a tu situación específica.
            </p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto"
            >
              <FaWhatsapp className="w-5 h-5" />
              Contactanos
            </motion.button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}

// Service Card Component - Redesigned
const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="md:flex">
        {/* Service Icon/Image Section */}
        <div className="md:w-1/4 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-center">{service.title}</h3>
          <div className="mt-4 w-12 h-1 bg-white/50 rounded-full"></div>
        </div>

        {/* Service Content Section */}
        <div className="md:w-3/4 p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">{service.fullDescription}</p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Características principales</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <h5 className="font-medium text-teal-700 mb-2 text-left">{feature.title}</h5>
                        <p className="text-sm text-gray-600 text-left">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {isExpanded ? "Ver menos" : "Ver más detalles"}
                <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? "-rotate-90" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

