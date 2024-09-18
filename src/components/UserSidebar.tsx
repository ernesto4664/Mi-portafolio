// src/components/UserSidebar.tsx
import React from 'react';
import Link from 'next/link';

const UserSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Navegación</h2>
      <nav className="flex flex-col">
        <Link href="/" className="mb-2 hover:underline">
          Inicio
        </Link>
        <Link href="/about" className="mb-2 hover:underline">
          Sobre mí
        </Link>
        <Link href="/projects" className="mb-2 hover:underline">
          Proyectos
        </Link>
        <Link href="/contact" className="hover:underline">
          Contacto
        </Link>
      </nav>
    </aside>
  );
};

export default UserSidebar;