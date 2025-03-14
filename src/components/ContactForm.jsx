import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tieneAncestros: 'no-se',
    conoceComuna: 'no-se',
    tieneDocumentos: 'no-se',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just close the modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6">
              <h2 className="text-2xl font-bold text-white">Comienza tu Proceso de Ciudadanía</h2>
              <p className="text-teal-50 mt-2">Completa el formulario y nos pondremos en contacto contigo pronto.</p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
              </div>

              {/* Citizenship Questions */}
              <div className="space-y-4 border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800">Información sobre tu caso</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Tienes ancestros italianos?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneAncestros"
                        value="si"
                        checked={formData.tieneAncestros === 'si'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneAncestros"
                        value="no"
                        checked={formData.tieneAncestros === 'no'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">No</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneAncestros"
                        value="no-se"
                        checked={formData.tieneAncestros === 'no-se'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">No estoy seguro</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Conoces el comune (municipio) italiano de origen?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="conoceComuna"
                        value="si"
                        checked={formData.conoceComuna === 'si'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="conoceComuna"
                        value="no"
                        checked={formData.conoceComuna === 'no'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">No</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="conoceComuna"
                        value="no-se"
                        checked={formData.conoceComuna === 'no-se'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">No estoy seguro</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Tienes documentos familiares italianos?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneDocumentos"
                        value="si"
                        checked={formData.tieneDocumentos === 'si'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneDocumentos"
                        value="no"
                        checked={formData.tieneDocumentos === 'no'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">No</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneDocumentos"
                        value="no-se"
                        checked={formData.tieneDocumentos === 'no-se'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-600">No estoy seguro</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje Adicional (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Cuéntanos más sobre tu caso o cualquier pregunta que tengas..."
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-colors duration-200"
                >
                  Enviar Consulta
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm; 