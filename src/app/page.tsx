"use client";

import { useState } from "react";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import rat from "../../public/yoPerfil.webp";
import usaFlag from "../../public/eeuu.png";
import spainFlag from "../../public/españa.png";
import backgroundImg from "../../public/fondo.jpg";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const descriptions: Record<"es" | "en", string> = {
    es: "Soy Emiliano Cararo, un desarrollador Frontend especializado en crear interfaces web funcionales y atractivas. Mi enfoque principal está en tecnologías como JavaScript, Next.js, React, TypeScript, Tailwind CSS y Node.js. A lo largo de mi carrera, he trabajado en proyectos con integración de bases de datos como PostgreSQL y en el uso de plataformas de control de versiones como GitHub para gestionar el código y colaborar en equipo. Además, tengo experiencia en Figma para el diseño de interfaces y conocimientos en UX/UI para optimizar la experiencia del usuario en los productos que desarrollo. Utilizo herramientas como Vercel para realizar despliegues rápidos y eficientes de aplicaciones web. Mi objetivo es crear soluciones que sean no solo funcionales, sino también fáciles de usar y visualmente atractivas, aplicando las mejores prácticas en desarrollo web y diseño.",

    en: "I'm Emiliano Cararo, a Frontend developer specialized in creating functional and attractive web interfaces. My main focus is on technologies such as JavaScript, Next.js, React, TypeScript, Tailwind CSS, and Node.js. Throughout my career, I have worked on projects that involve database integration with PostgreSQL and using version control platforms like GitHub to manage code and collaborate in teams. Additionally, I have experience with Figma for interface design and knowledge in UX/UI to optimize user experience in the products I develop. I use tools like Vercel for fast and efficient web application deployments. My goal is to create solutions that are not only functional but also easy to use and visually appealing, applying best practices in web development and design.",
  };

  const titles: Record<"es" | "en", string> = {
    es: "Descripción",
    en: "Description",
  };

  const techTitles: Record<"es" | "en", string> = {
    es: "Mis Tecnologías",
    en: "My Technologies",
  };

  const subtitle =
    language === "es" ? "Frontend Developer" : "Frontend Developer";
  const introduction =
    language === "es"
      ? "Construyendo experiencias web con creatividad y pasión!"
      : "Building web experiences with creativity and passion!";

  return (
    <div className="min-h-screen bg-primary p-8 flex flex-col items-center">
      <div className="fixed top-28 left-4 flex flex-col space-y-2">
        <button
          onClick={() => setLanguage("en")}
          className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
        >
          <Image src={usaFlag} alt="USA Flag" width={25} height={25} />
        </button>
        <button
          onClick={() => setLanguage("es")}
          className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200"
        >
          <Image src={spainFlag} alt="Spain Flag" width={25} height={25} />
        </button>
      </div>

      {/* Fondo a pantalla completa */}
      <div
        className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <header className="text-center flex items-center flex-col gap-10 mb-12">
          <h1 className="text-5xl font-bold text-white">Emiliano Cararo</h1>
          <div>
            <Image
              src={rat}
              alt="logo"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </header>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">{subtitle}</h2>
          <p className="text-xl bg-amber-100 p-1 rounded-lg text-secondary">
            {introduction}
          </p>
        </section>
      </div>

      {/* Sección de Descripción */}
      <section className="text-center mb-12 mt-8 w-full max-w-2xl">
        <h3 className="text-4xl font-bold hover:text-amber-100 transition-all text-secondary mb-8">
          {titles[language]}
        </h3>
        <p className="text-xl hover:text-white  text-gray-500 mb-4">
          {descriptions[language]}
        </p>
      </section>

      {/* Sección de Tecnologías */}
      <section className="text-center mb-12 w-full max-w-2xl">
        <h3 className="text-4xl font-bold hover:text-amber-100 transition-all text-secondary mb-8">
          {techTitles[language]}
        </h3>
        <div className="flex justify-center space-x-10 mb-12">
          <FaJs className="text-yellow-300 text-7xl hover:scale-110 transition-transform duration-200" />
          <SiTypescript className="text-blue-400 text-7xl hover:scale-110 transition-transform duration-200" />
          <FaReact className="text-cyan-400 text-7xl hover:scale-110 transition-transform duration-200" />
          <SiNextdotjs className="text-gray-200 text-7xl hover:scale-110 transition-transform duration-200" />
          <SiTailwindcss className="text-teal-400 text-7xl hover:scale-110 transition-transform duration-200" />
          <FaNodeJs className="text-green-400 text-7xl hover:scale-110 transition-transform duration-200" />
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-auto">
        <p>&copy; 2024 Emiliano Cararo - All rights reserved</p>
      </footer>
    </div>
  );
}
