// src/components/AdminLayout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';  // Importa correctamente el Header
import Footer from './Footer';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <Header />  {/* Utiliza el Header importado */}
        <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;