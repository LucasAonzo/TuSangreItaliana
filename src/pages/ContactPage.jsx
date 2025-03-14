import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tieneAncestros: 'no-se',
    conoceComuna: 'no-se',
    tieneDocumentos: 'no-se',
    mensaje: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  // Referencia al contenedor del formulario para hacer scroll
  const formRef = React.useRef(null);

  // Función para hacer scroll al principio del formulario
  const scrollToFormTop = () => {
    if (formRef.current) {
      // Para asegurar que funcione en móvil, usamos scrollIntoView con behavior smooth
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Algunas veces scrollIntoView no funciona bien en ciertos navegadores móviles
      // así que añadimos esta alternativa
      window.scrollTo({
        top: formRef.current.offsetTop - 100, // Restamos 100px para dejar algo de espacio arriba
        behavior: 'smooth'
      });
    }
  };

  // Modificamos setCurrentStep para hacer scroll al cambiar de paso
  const handleStepChange = (stepNumber) => {
    setCurrentStep(stepNumber);
    // Pequeño timeout para asegurar que el DOM se actualice antes de hacer scroll
    setTimeout(scrollToFormTop, 50);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Solo proceder con la redirección a WhatsApp si estamos en el paso final
    if (currentStep === totalSteps) {
      // Construir el mensaje para WhatsApp
      const getTieneAncestrosText = () => {
        if (formData.tieneAncestros === 'si') return 'Sí';
        if (formData.tieneAncestros === 'no') return 'No';
        return 'No estoy seguro';
      };
      
      const getConoceComunaText = () => {
        if (formData.conoceComuna === 'si') return 'Sí';
        if (formData.conoceComuna === 'no') return 'No';
        return 'No estoy seguro';
      };
      
      const getTieneDocumentosText = () => {
        if (formData.tieneDocumentos === 'si') return 'Sí';
        if (formData.tieneDocumentos === 'no') return 'No';
        return 'No estoy seguro';
      };
      
      const mensaje = `
*Consulta de Ciudadanía Italiana*

*Información Personal:*
- Nombre: ${formData.nombre}
- Email: ${formData.email}
${formData.telefono ? `- Teléfono: ${formData.telefono}` : ''}

*Detalles de Elegibilidad:*
- ¿Tiene ancestros italianos?: ${getTieneAncestrosText()}
- ¿Conoce el comune italiano de origen?: ${getConoceComunaText()}
- ¿Tiene documentos familiares italianos?: ${getTieneDocumentosText()}

${formData.mensaje ? `*Mensaje Adicional:*\n${formData.mensaje}` : ''}

Enviado desde el formulario web
`;

      // Construir la URL de WhatsApp
      const whatsappNumber = '5493512025251';
      const encodedMessage = encodeURIComponent(mensaje);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Abrir WhatsApp en una nueva pestaña
      window.open(whatsappURL, '_blank');
    } else {
      // Si no estamos en el último paso, avanzar al siguiente paso
      handleStepChange(currentStep + 1);
    }
  };

  // Progress steps for rendering
  const steps = [
    { number: 1, label: 'Información Personal' },
    { number: 2, label: 'Detalles de Elegibilidad' },
    { number: 3, label: 'Mensaje Final' }
  ];

  // Completely redesigned progress bar with mobile-first approach
  const renderProgressBar = () => (
    <div className="w-full max-w-3xl mx-auto mb-8 md:mb-14 px-4">
      <div className="relative">
        {/* Container for circles and labels */}
        <div className="flex justify-between relative">
          {/* Horizontal line background positioned exactly at the center of circles */}
          <div className="absolute top-[20px] md:top-[28px] left-0 right-0 z-0">
            <div className="h-[1px] w-full bg-gray-200"></div>
          </div>
          
          {/* Progress line (colored) positioned exactly at the center of circles */}
          <div className="absolute top-[20px] md:top-[28px] left-0 z-0">
            <div 
              className="h-[1px] bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-500"
              style={{ 
                width: currentStep === 1 ? '0%' : 
                       currentStep === 2 ? '50%' : 
                       '100%' 
              }}
            ></div>
          </div>
          
          {/* Steps with circles and labels */}
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="flex flex-col items-center relative z-10"
            >
              {/* Circle with number */}
              <div 
                className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full transition-all duration-300 
                  ${step.number <= currentStep
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md'
                    : 'bg-white border-2 border-gray-200 text-gray-400'
                  }`}
              >
                <span className="text-base md:text-xl font-medium">{step.number}</span>
              </div>
              
              {/* Label - now directly under its circle */}
              <span 
                className={`mt-2 text-xs md:text-sm font-medium text-center max-w-[90px] md:max-w-[120px] 
                  ${step.number <= currentStep ? 'text-teal-600' : 'text-gray-400'}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-5 md:space-y-6"
    >
      <div>
        <label htmlFor="nombre" className="block text-base md:text-lg font-medium text-gray-700 mb-2">
          Nombre Completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base md:text-lg border border-gray-300 bg-white text-gray-800 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          placeholder="¿Cómo te llamas?"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-base md:text-lg font-medium text-gray-700 mb-2">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base md:text-lg border border-gray-300 bg-white text-gray-800 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-base md:text-lg font-medium text-gray-700 mb-2">
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base md:text-lg border border-gray-300 bg-white text-gray-800 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          placeholder="+1 234 567 8900"
        />
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 md:space-y-8"
    >
      <div className="space-y-5 md:space-y-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Información sobre tu Elegibilidad</h3>
        
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <label className="block text-base md:text-lg font-medium text-gray-700 mb-3 md:mb-4">
            ¿Tienes ancestros italianos?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {['si', 'no', 'no-se'].map((value) => (
              <label
                key={value}
                className={`flex items-center justify-center p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  formData.tieneAncestros === value
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-gray-200 hover:border-teal-200'
                }`}
              >
                <input
                  type="radio"
                  name="tieneAncestros"
                  value={value}
                  checked={formData.tieneAncestros === value}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className={`text-base md:text-lg ${formData.tieneAncestros === value ? 'text-teal-700' : 'text-gray-600'}`}>
                  {value === 'si' ? 'Sí' : value === 'no' ? 'No' : 'No estoy seguro'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <label className="block text-base md:text-lg font-medium text-gray-700 mb-3 md:mb-4">
            ¿Conoces el comune (municipio) italiano de origen?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {['si', 'no', 'no-se'].map((value) => (
              <label
                key={value}
                className={`flex items-center justify-center p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  formData.conoceComuna === value
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-gray-200 hover:border-teal-200'
                }`}
              >
                <input
                  type="radio"
                  name="conoceComuna"
                  value={value}
                  checked={formData.conoceComuna === value}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className={`text-base md:text-lg ${formData.conoceComuna === value ? 'text-teal-700' : 'text-gray-600'}`}>
                  {value === 'si' ? 'Sí' : value === 'no' ? 'No' : 'No estoy seguro'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <label className="block text-base md:text-lg font-medium text-gray-700 mb-3 md:mb-4">
            ¿Tienes documentos familiares italianos?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {['si', 'no', 'no-se'].map((value) => (
              <label
                key={value}
                className={`flex items-center justify-center p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  formData.tieneDocumentos === value
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-gray-200 hover:border-teal-200'
                }`}
              >
                <input
                  type="radio"
                  name="tieneDocumentos"
                  value={value}
                  checked={formData.tieneDocumentos === value}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className={`text-base md:text-lg ${formData.tieneDocumentos === value ? 'text-teal-700' : 'text-gray-600'}`}>
                  {value === 'si' ? 'Sí' : value === 'no' ? 'No' : 'No estoy seguro'}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-5 md:space-y-6"
    >
      <div>
        <label htmlFor="mensaje" className="block text-base md:text-lg font-medium text-gray-700 mb-2">
          ¿Hay algo más que quieras contarnos sobre tu caso?
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 text-base md:text-lg border border-gray-300 rounded-xl bg-white text-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          placeholder="Cuéntanos más sobre tu situación o cualquier pregunta específica que tengas..."
        />
      </div>

      <div className="bg-teal-50 rounded-xl p-5 md:p-6 border border-teal-100">
        <h4 className="text-base md:text-lg font-medium text-teal-800 mb-2">¿Qué sigue después?</h4>
        <p className="text-sm md:text-base text-teal-600">
          Después de enviar tu consulta, nuestro equipo revisará tu caso y te contactará dentro de las próximas 24-48 horas
          hábiles para programar una llamada de evaluación gratuita.
        </p>
      </div>
    </motion.div>
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-16 md:pt-20 pb-10 md:pb-14 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-50/50 rounded-full -translate-y-1/2 translate-x-1/2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-blue-50/50 rounded-full translate-y-1/2 -translate-x-1/2"
          />
          
          <div className="container mx-auto px-5 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                COMIENZA TU PROCESO
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 leading-tight">
                Inicia tu Camino hacia la Ciudadanía Italiana
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
                Completa el siguiente formulario y nuestro equipo de expertos te ayudará a evaluar tu caso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              {renderProgressBar()}
              
              <form onSubmit={handleSubmit} className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 mb-8" ref={formRef}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}

                <div className="flex flex-row justify-between items-center gap-3 md:gap-4 mt-6 md:mt-8 pt-5 md:pt-6 border-t">
                  {/* Espacio para el botón "Anterior" o espacio vacío si estamos en el primer paso */}
                  <div className={`${currentStep > 1 ? 'w-1/2' : 'w-0'}`}>
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={() => handleStepChange(currentStep - 1)}
                        className="w-full px-4 md:px-6 py-3 bg-white border-2 border-teal-500 text-teal-600 rounded-xl font-medium hover:bg-teal-50 transition-all duration-200 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Anterior
                      </button>
                    )}
                  </div>
                  
                  {/* Botón "Siguiente" o "Enviar Consulta" */}
                  <div className={`${currentStep > 1 ? 'w-1/2' : 'w-full'}`}>
                    {currentStep < totalSteps ? (
                      <button
                        type="submit"
                        className="w-full px-4 md:px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
                      >
                        Siguiente
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full px-4 md:px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
                      >
                        Enviar Consulta
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContactPage; 