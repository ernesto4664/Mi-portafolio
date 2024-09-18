// src/app/projects/page.tsx
import UserLayout from '../../components/UserLayout';
import ProjectCard from '../../components/ProjectCard';

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
    technologies: ['Php', 'Laravel', 'Javascript'],
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
