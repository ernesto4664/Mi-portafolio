// src/components/AdminSidebar.tsx
import React from 'react';
import Link from 'next/link';

const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      <nav className="flex flex-col">
        <Link href="/admin/dashboard" className="mb-2 hover:underline">
          Dashboard
        </Link>
        <Link href="/admin/projects" className="mb-2 hover:underline">
          Gestionar Proyectos
        </Link>
        <Link href="/admin/blog" className="mb-2 hover:underline">
          Gestionar Blog
        </Link>
        <Link href="/admin/settings" className="hover:underline">
          Configuración
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;