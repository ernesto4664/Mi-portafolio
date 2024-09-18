// src/components/Timeline.tsx
import React from 'react';

const timelineData = [
  { year: '2024', title: 'Desarrollador Web Full Stack en Metasoft soluciones', description: 'Actualmente me especializo en la creación de interfaces web interactivas, participando tanto en el desarrollo del front-end como del back-end. Tengo experiencia en la construcción de APIs RESTful y en la integración de APIs de terceros, utilizando el stack tecnológico detallado en mi portafolio' },
  { year: '2021', title: 'Desarrollador Web Full Stack Free lance', description: 'Realice desarrollos y mantenimientos webs a interfaces interactivas con las tecnologias Php, CCS, Javascript y optimicé la experiencia del usuario.' },
  { year: '2020', title: 'Data Proccesor', description: 'Encargado de manejar los datos personales de los usuarios y empresas, ayudando a facilitar transacciones, organizar la información y garantizar la seguridad de los datos de las plataformas Marketplaces.' },
  { year: '2017', title: 'Graduado en Ingeniería en Informatica', description: 'Me gradué de la Universidad Nacional Experimental Romulo Gallegos UNERG Guarico-Venezuela.' },
  // Añade más eventos aquí
];

const Timeline = () => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700">
      {timelineData.map((item, index) => (
        <div key={index} className="mb-10 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v3a1 1 0 01-2 0V7zM9 12a1 1 0 102 0v1a1 1 0 11-2 0v-1z" clipRule="evenodd"></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
