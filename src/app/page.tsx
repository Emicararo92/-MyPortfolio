"use client";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import rat from "../../public/emi.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8">
      
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Emiliano Cararo</h1>
        <h2 className="text-3xl font-semibold text-gray-300 mb-6">
          Frontend Developer
        </h2>
        <p className="text-xl text-gray-400">
          ¡Construyendo experiencias web con creatividad y pasión!
        </p>
      </header>

     
      <section className="flex justify-center mb-12">
        <div className="w-64 h-64">
          <Image
            src={rat}
            alt="logo"
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>

     
      <section className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-8">Mis Tecnologías</h3>
        <div className="flex justify-center space-x-10">
          <FaJs className="text-yellow-300 text-7xl hover:scale-110 transition-transform duration-200" />
          <SiTypescript className="text-blue-400 text-7xl hover:scale-110 transition-transform duration-200" />
          <FaReact className="text-cyan-400 text-7xl hover:scale-110 transition-transform duration-200" />
          <SiNextdotjs className="text-gray-300 text-7xl hover:scale-110 transition-transform duration-200" />
          <SiTailwindcss className="text-teal-400 text-7xl hover:scale-110 transition-transform duration-200" />
          <FaNodeJs className="text-green-400 text-7xl hover:scale-110 transition-transform duration-200" />
        </div>
      </section>

     
      <footer className="text-center text-white mt-16">
        <p>&copy; 2024 Emiliano Cararo - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
