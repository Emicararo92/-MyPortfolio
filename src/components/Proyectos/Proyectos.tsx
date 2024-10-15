"use client";

import { useState } from "react";
import Image from "next/image";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import Description from "../Descripcion/descripcion";

export default function Proyectos() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const storeClubImages = ["/cab1.png", "/cab2.png", "/cab3.png", "/cab4.png"];
  const ecommerceImages = [
    "/p1.png",
    "/p2.png", 
    "/p3.png",
    "/p4.png",
    "/p5.png",
    "/p6.png",
  ];
  const vetImages = ["/v1.png", "/v2.png", "/v3.png", "/v4.png", "/v5.png"];

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const renderImages = (images: string[]) =>
    images.map((src, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
        <Image
          src={src}
          alt={`Project image ${index + 1}`}
          width={500}
          height={300}
          className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => openModal(src)}
        />
      </div>
    ));

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 min-h-screen p-10">
      <h1 className="text-5xl text-center text-white font-bold mb-8">
        Mis Proyectos
      </h1>

      {/* Store Club */}
      <section className="mb-10">
        <h2 className="text-4xl text-white font-bold mb-4">Store Club</h2>
        <div className="flex flex-wrap justify-center">
          {renderImages(storeClubImages)}
        </div>
      </section>

      {/* Ecommerce */}
      <section className="mb-10">
        <h2 className="text-4xl text-white font-bold mb-4">Ecommerce</h2>
        <div className="flex flex-wrap justify-center">
          {renderImages(ecommerceImages)}
        </div>
      </section>

     
      <section>
        <h2 className="text-4xl text-white font-bold mb-4">Schedule for Vet</h2>
        <div className="flex flex-wrap justify-center">
          {renderImages(vetImages)}
        </div>
      </section>

    
      {isOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected project image"
              width={
                selectedImage === "/p2.png" ||
                selectedImage === "/v4.png" ||
                selectedImage === "/v3.png" ||
                selectedImage === "/p6.png"
                  ? 600
                  : 1200
              } 
              height={
                selectedImage === "/p2.png" ||
                selectedImage === "/v4.png" ||
                selectedImage === "/v3.png" ||
                selectedImage === "/p6.png"
                  ? 600
                  : 1000
              } 
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-black text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    
      <section className="mt-12">
        <h3 className="text-3xl text-white text-center mb-6">
          Mis Tecnologías
        </h3>
        <div className="flex justify-center space-x-8">
          <FaJs className="text-white text-6xl hover:text-yellow-300" />
          <SiTypescript className="text-white text-6xl hover:text-blue-300" />
          <FaReact className="text-white text-6xl hover:text-blue-400" />
          <SiNextdotjs className="text-white text-6xl hover:text-gray-300" />
          <SiTailwindcss className="text-white text-6xl hover:text-teal-400" />
          <FaNodeJs className="text-white text-6xl hover:text-green-400" />
        </div>
      </section>
      <Description/>
    </div>
  );
}
