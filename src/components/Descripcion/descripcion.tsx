import { useState } from "react";
import Image from "next/image";
import usaFlag from "../../../public/eeuu.png";
import spainFlag from "../../../public/españa.png";

const Description = () => {
  const [language, setLanguage] = useState<"es" | "en">("es"); // Especifica el tipo

  const descriptions: Record<"es" | "en", JSX.Element> = {
    es: (
      <>
        <p className="text-xl text-gray-400 mb-4">
          Soy Emiliano Cararo, un desarrollador Frontend apasionado por crear
          experiencias web efectivas y atractivas. Tengo experiencia en
          tecnologías como JavaScript, Next.js, React, TypeScript, Tailwind CSS
          y Node.js. Además, tengo conocimientos en PostgreSQL para bases de
          datos, así como en GitHub, Bootstrap y otras librerías.
        </p>
      </>
    ),
    en: (
      <>
        <p className="text-xl text-gray-400 mb-4">
          I am Emiliano Cararo, a passionate Frontend Developer focused on
          creating effective and engaging web experiences. I have experience
          with technologies such as JavaScript, Next.js, React, TypeScript,
          Tailwind CSS, and Node.js. Additionally, I have knowledge of
          PostgreSQL for databases, as well as GitHub, Bootstrap, and other
          libraries.
        </p>
      </>
    ),
  };

  return (
    <section className="text-center mb-12">
      <h3 className="text-4xl font-bold text-white mb-8">Descripción</h3>
      {descriptions[language]}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setLanguage("en")}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          <Image
            src={usaFlag}
            alt="USA Flag"
            width={20}
            height={20}
            className="mr-2"
          />
          English
        </button>
        <button
          onClick={() => setLanguage("es")}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
        >
          <Image
            src={spainFlag}
            alt="Spain Flag"
            width={20}
            height={20}
            className="mr-2"
          />
          Español
        </button>
      </div>
    </section>
  );
};

export default Description;
