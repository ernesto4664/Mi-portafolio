import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" passHref>
        <img 
          src="/images/Evoriginal.png" 
          alt="Logo de ErnestoV" 
          className="h-auto" 
          style={{ width: '200px' }} // Establece el ancho del logo a 200px
        />
      </Link>
      <nav>
        <a href="/" className="mr-4 hover:underline">
          Inicio
        </a>
        <a href="/about" className="mr-4 hover:underline">
          Sobre mí
        </a>
        <a href="/projects" className="hover:underline">
          Proyectos
        </a>
      </nav>
    </header>
  );
};

export default Header;
