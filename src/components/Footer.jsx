import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 w-full">
      <div className="container mx-auto px-8 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-400 mb-4 inline-block relative">
              Tu Sangre Italiana
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></div>
            </h2>
            <p className="text-gray-300 max-w-xs">
              Tu socio de confianza para navegar por el proceso de ciudadanía italiana con facilidad y confianza.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="instagram" />
            </div>
          </div>
          
          {/* Services Links */}
          <div className="space-y-4">
            <FooterSection 
              title="Servicios"
              links={[
                "Evaluación de Elegibilidad",
                "Recopilación de Documentos",
                "Servicios de Traducción",
                "Apoyo con la Solicitud"
              ]}
            />
          </div>
          
          {/* Company Links */}
          <div className="space-y-4">
            <FooterSection 
              title="Compañía"
              links={[
                "Sobre Nosotros",
                "Contacto",
                "Política de Privacidad",
                "Términos de Servicio"
              ]}
            />
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 inline-block relative">
              Contáctanos
              <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-teal-400"></div>
            </h3>
            <ContactInfo 
              icon="location"
              text="Via Roma 123, 00187 Roma, Italia"
            />
            <ContactInfo 
              icon="email"
              text="info@cittadinoitaliano.com"
            />
            <ContactInfo 
              icon="phone"
              text="+39 06 1234 5678"
            />
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2023 CittadinoItaliano. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Preguntas Frecuentes</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Soporte</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  const icons = {
    facebook: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
    twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  };

  return (
    <a href={href} className="text-gray-400 hover:text-teal-300 transition-colors duration-300">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={icons[icon]} />
      </svg>
    </a>
  );
};

const FooterSection = ({ title, links }) => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4 inline-block relative">
        {title}
        <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-teal-400"></div>
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">→</span> {link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const ContactInfo = ({ icon, text }) => {
  const icons = {
    location: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    email: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  };

  return (
    <div className="flex items-start space-x-3 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[icon]} />
      </svg>
      <p>{text}</p>
    </div>
  );
};

export default Footer; 