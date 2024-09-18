import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" passHref>
        <Image 
            src="/images/Evoriginal.png" 
            alt="Logo de ErnestoV" 
            width={200} 
            height={200} 
            className="h-auto"
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
