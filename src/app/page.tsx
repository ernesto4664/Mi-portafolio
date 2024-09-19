"use client";  

import { useEffect } from 'react';
import Image from 'next/image';
import UserLayout from '../components/UserLayout';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge'; // Asegúrate de importar SkillBadge

const featuredProjects = [
  {
    title: 'Tradenews Chile',
    description: 'Una aplicación web interactiva desarrollada con el CMS Wordpress, Php y Javascript',
    imageUrl: '/images/TRADENEWS.png',
    repoLink: '',
    demoLink: '',
    technologies: ['Wordpress', 'Php', 'Javascript', 'MySQL'],
  },
  {
    title: 'App EcoCarga',
    description: 'Una aplicación móvil para iOS y Android construida con Ionic y Angular.',
    imageUrl: '/images/app.png',
    repoLink: '',
    demoLink: '',
    technologies: ['Ionic', 'Angular', 'Typescript'],
  },
  {
    title: 'API en Laravel 11',
    description: 'Una API que integra y consume datos de...',
    imageUrl: '/images/chilecrece.png',
    repoLink: '',
    demoLink: '',
    technologies: ['Php', 'Laravel', 'Javascript', 'MySQL'],
  },
  {
    title: 'Municipalidad de Porvenir',
    description: 'Un sistema web interactivo autoadministrable para funcionarios de la Municipalidad de Porvenir, desarrollado con el CMS Wordpress y Php',
    imageUrl: '/images/porvenir.png',
    repoLink: '',
    demoLink: '',
    technologies: ['Php', 'Wordpress', 'Javascript', 'MySQL'],
  },
  {
    title: 'Cementerio General de Recoleta',
    description: 'Un sistema web interactivo autoadministrable para funcionarios del Cementerio General, desarrollado con el CMS Wordpress y Php, con integración de WooCommerce para realizar transacciones',
    imageUrl: '/images/cementerio.png',
    repoLink: '',
    demoLink: '',
    technologies: ['Php', 'Wordpress', 'Javascript', 'MySQL'],
  },
  {
    title: 'PLADECO. Plan de Desarrollo Comunal de Puerto Montt',
    description: 'Sistema de votaciones para la recopilación de datos sobre proyectos o iniciativas factibles para las Comunas de la Región, desarrollado con el CMS Wordpress, Php y Javascript',
    imageUrl: '/images/pladeco.png',
    repoLink: '',
    demoLink: '',
    technologies: ['Php', 'Wordpress', 'Javascript', 'MySQL'],
  },
  // Añade más proyectos aquí
];

export default function HomePage() {
  
  // useEffect para ejecutar la animación de zoom en el fondo cada 15 segundos
  useEffect(() => {
    const background = document.querySelector('.background-container') as HTMLElement;
  
    if (background) {
      const runAnimation = () => {
        background.style.animation = 'none'; // Elimina la animación actual
        void background.offsetWidth; // Forzar un reflow
        background.style.animation = 'zoomOut 8s ease forwards'; // Reinicia la animación
      };
  
      // Inicia la animación al cargar la página
      runAnimation();
  
      // Repite la animación cada 15 segundos
      const interval = setInterval(() => {
        runAnimation();
      }, 23000); // 8s de animación + 15s de pausa
  
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, []);

  return (
    <UserLayout>
      {/* Hero Section con fondo animado */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white background-container">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">¡Hola! Soy Ernesto Viloria</h1>
        <p className="text-lg mb-6 max-w-2xl animate__animated animate__fadeInUp">
          Desarrollador Full Stack apasionado por crear experiencias web increíbles.
        </p>
      </section>

      {/* Proyectos Destacados */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section className="p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades</h2>
        <div className="flex flex-wrap justify-center">
          <SkillBadge skill="React" />
          <SkillBadge skill="Next.js" />
          <SkillBadge skill="Tailwind CSS" />
          <SkillBadge skill="Node.js" />
          <SkillBadge skill="Php" />
          <SkillBadge skill="JavaScript" />
          <SkillBadge skill="TypeScript" />
          <SkillBadge skill="Html" />
          <SkillBadge skill="MySQL" />
          <SkillBadge skill="PostgreSQL" />
          <SkillBadge skill="MongoDB" />
          <SkillBadge skill="Ionic Framework" />
          <SkillBadge skill="Angular Framework" />
          <SkillBadge skill="Laravel Framework" />
          <SkillBadge skill="WordPress CMS" />
          {/* Añade más habilidades */} 
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-10 text-center bg-gradient-to-r from-purple-500 to-blue-600 text-white bg-custom-image">
        <h2 className="text-4xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
        <p className="text-lg mb-6">¡No dudes en ponerte en contacto para hablar sobre oportunidades y proyectos!</p>
        <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          Contáctame
        </Link>
      </section>
    </UserLayout>
  );
}
