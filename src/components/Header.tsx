"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('.menu-container') && !(event.target as HTMLElement).closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" passHref>
        <Image 
          src="/images/Evoriginal.png" 
          alt="Logo de ErnestoV" 
          width={200} 
          height={200} 
          className="cursor-pointer"
        />
      </Link>

      {/* Menú de navegación para dispositivos grandes */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/" passHref>
          <span className="hover:underline cursor-pointer">Inicio</span>
        </Link>
        <Link href="/about" passHref>
          <span className="hover:underline cursor-pointer">Sobre mí</span>
        </Link>
        <Link href="/projects" passHref>
          <span className="hover:underline cursor-pointer">Proyectos</span>
        </Link>
      </nav>

      {/* Botón del Menú Hamburguesa (visible solo en dispositivos móviles y tablets) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none menu-button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Overlay para cerrar el menú al hacer clic fuera de él */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100 z-10' : 'opacity-0 z-[-1]'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Menú desplegable para dispositivos móviles */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 p-6 transition-transform transform menu-container ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Botón de Cerrar del Menú */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Logo del Menú */}
        <div className="flex justify-center mb-6">
          <Image 
            src="/images/Evoriginal.png" 
            alt="Logo de ErnestoV" 
            width={200} 
            height={200} 
            className="rounded-full"
          />
        </div>
        {/* Elementos del Menú */}
        <nav className="space-y-6 mt-6">
          <Link href="/" passHref>
            <span className="block text-white text-lg font-medium hover:underline cursor-pointer mb-3">Inicio</span>
          </Link>
          <Link href="/about" passHref>
            <span className="block text-white text-lg font-medium hover:underline cursor-pointer mb-3">Sobre mí</span>
          </Link>
          <Link href="/projects" passHref>
            <span className="block text-white text-lg font-medium hover:underline cursor-pointer mb-3">Proyectos</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="block text-white text-lg font-medium hover:underline cursor-pointer">Contactame</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
