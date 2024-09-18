// src/app/projects/page.tsx
import UserLayout from '../../components/UserLayout';
import ProjectCard from '../../components/ProjectCard';
import Image from 'next/image';

const projects = [
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

export default function ProjectsPage() {
  return (
    <UserLayout>
      <h1 className="text-4xl font-bold text-center my-10">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </UserLayout>
  );
}
