import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h3 className="font-bold text-xl mb-1">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 