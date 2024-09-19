import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center sm:space-x-2">
        <Image 
          src="/images/Evoriginal.png" 
          alt="Logo de ErnestoV" 
          width={200} 
          height={200} 
          className="h-auto"
        />
        <p className="mb-2 sm:mb-0">Todos los derechos reservados.</p>
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
