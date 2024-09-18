// src/app/about/page.tsx
import UserLayout from '../../components/UserLayout';
import Image from 'next/image';
import Timeline from '../../components/Timeline';
import Skills from '../../components/Skills';
import Testimonials from '../../components/Testimonials';

export default function AboutPage() {
  return (
    <UserLayout>
      {/* Sección de Introducción */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white bg-custom-image">
        <Image 
          src="/images/ernestov.jpg" 
          alt="Mi Foto" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold">Hola, Soy Ernesto Viloria</h1>
        <p className="mt-4 max-w-2xl">
          Soy un desarrollador apasionado por la creación de experiencias web impresionantes. Puedo crear desarrollos para el frontend y backend de sitios a medida y me encanta trabajar con tecnologías como Php, Javascript, Next.js, CSS y algunos Frameworks de desarrollo como Laravel, Angular e Ionics.
        </p>
      </section>

      {/* Sección de Timeline */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Mi Trayectoria</h2>
        <Timeline />
      </section>

      {/* Sección de Habilidades */}
      <section className="p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades</h2>
        <Skills />
      </section>

      {/* Sección de Testimonios */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
        <Testimonials />
      </section>

      {/* Sección de Fun Facts */}
      <section className="p-10 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-center background-container">
        <h2 className="text-3xl font-bold mb-8">Más Sobre Mí</h2>
        <p className="max-w-2xl mx-auto">
          Además de programar, me encanta explorar nuevas tecnologías, viajar, y hacer deporte. ¡Siempre estoy buscando nuevas aventuras y oportunidades para aprender!
        </p>
      </section>
    </UserLayout>
  );
}
