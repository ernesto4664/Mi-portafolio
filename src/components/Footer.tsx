import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center sm:space-x-2">
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()}</p>
        <img 
          src="/images/Evoriginal.png" 
          alt="Logo de ErnestoV" 
          className="h-auto" 
          style={{ width: '200px' }} // Ajuste de tamaño del logo para que se vea bien en móviles
        />
        <p className="mb-2 sm:mb-0">Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
