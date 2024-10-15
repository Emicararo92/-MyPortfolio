"use client";

import { useState } from "react";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import rat from "../../public/emi.png";
import usaFlag from "../../public/eeuu.png";
import spainFlag from "../../public/españa.png";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const descriptions: Record<"es" | "en", string> = {
    es: "Soy Emiliano Cararo, un desarrollador Frontend apasionado por crear experiencias web efectivas y atractivas. Tengo experiencia en tecnologías como JavaScript, Next.js, React, TypeScript, Tailwind CSS y Node.js. Además, tengo conocimientos en PostgreSQL para bases de datos, así como en GitHub, Bootstrap y otras librerías.",
    en: "I am Emiliano Cararo, a passionate Frontend Developer focused on creating effective and engaging web experiences. I have experience with technologies such as JavaScript, Next.js, React, TypeScript, Tailwind CSS, and Node.js. Additionally, I have knowledge of PostgreSQL for databases, as well as GitHub, Bootstrap, and other libraries.",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col justify-center items-center">
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
        <h2 className="text-3xl font-semibold text-gray-200 mb-6">
          {subtitle}
        </h2>
        <p className="text-xl text-gray-300">{introduction}</p>
      </section>

      <section className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-8">
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

      <section className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-8">
          {titles[language]}
        </h3>
        <p className="text-xl text-gray-300 mb-4">{descriptions[language]}</p>
      </section>

      {/* Iconos de cambio de idioma */}
      <div className="fixed right-4 flex flex-col space-y-4">
        <button
          onClick={() => {
            setLanguage("en");
          }}
          className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
        >
          <Image src={usaFlag} alt="USA Flag" width={30} height={30} />
        </button>
        <button
          onClick={() => {
            setLanguage("es");
          }}
          className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200"
        >
          <Image src={spainFlag} alt="Spain Flag" width={30} height={30} />
        </button>
      </div>

      <footer className="text-center text-white mt-16">
        <p>&copy; 2024 Emiliano Cararo - All rights reserved</p>
      </footer>
    </div>
  );
}
