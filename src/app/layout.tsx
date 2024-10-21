import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import { Analytics } from "@vercel/analytics/react"; // Importa Analytics de Vercel

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ErnestoV | Desarrollador Full Stack",
  description: "Portafolio profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <CustomCursor /> {/* Usar el componente de cliente */}
        {children}
        <Analytics /> {/* Añadir el componente de analítica aquí */}
      </body>
    </html>
  );
}
