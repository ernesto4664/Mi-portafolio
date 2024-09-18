// src/components/Testimonials.tsx
import React from 'react';

const testimonials = [
  { name: 'Pedro Gamez', text: 'Trabajar con Ernesto fue una experiencia increíble. Su atención al detalle y compromiso con la calidad es excepcional.' },
  { name: 'Francisco Guedez', text: 'Ernesto es un desarrollador muy talentoso y un gran compa&#241;ero de equipo. Altamente recomendado!'}
  // Añade más testimonios aquí
];

const Testimonials = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg m-4 max-w-sm">
          <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
          <h4 className="text-right mt-4 text-blue-600 dark:text-blue-400">- {testimonial.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
