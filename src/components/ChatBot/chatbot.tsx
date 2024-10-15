"use client";

import { useState, useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import Image from "next/image";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    {
      from: string;
      text: string | JSX.Element;
    }[]
  >([]);
  const [bounce, setBounce] = useState(false);
  const [language, setLanguage] = useState("es");

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      const welcomeMessage = {
        from: "bot",
        text:
          language === "es"
            ? "¡Hola! Soy Emiliano Cararo, desarrollador Front End. ¿En qué puedo ayudarte hoy?"
            : "Hello! I'm Emiliano Cararo, Front End Developer. How can I help you today?",
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleUserSelection = (selection: string) => {
    const newMessage = { from: "user", text: selection };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const botResponse = handleBotResponse(selection);
    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  const handleBotResponse = (selection: string) => {
    let botText: string | JSX.Element;

    switch (selection) {
      case language === "es"
        ? "¿Cuáles son tus tecnologías?"
        : "What technologies do you use?":
        botText =
          language === "es"
            ? "Trabajo con HTML, CSS, JavaScript, React, Next.js, TypeScript y Tailwind CSS."
            : "I work with HTML, CSS, JavaScript, React, Next.js, TypeScript, and Tailwind CSS.";
        break;
      case language === "es"
        ? "¿Tienes algún proyecto interesante?"
        : "Do you have any interesting projects?":
        botText = (
          <>
            {language === "es"
              ? "¡Sí! Tengo varios proyectos. Puedes verlos en mi sección de proyectos."
              : "Yes! I have several projects. You can see them in my projects section."}
            <button
              onClick={() => (window.location.href = "/Proyectos")}
              className="text-blue-500 underline"
            >
              {language === "es" ? "Ver Proyectos" : "View Projects"}
            </button>
          </>
        );
        break;
      case language === "es"
        ? "¿Cómo puedo contactarte?"
        : "How can I contact you?":
        botText = (
          <>
            {language === "es"
              ? "Te envío mis enlaces: "
              : "Here are my links: "}
            <a
              href="https://github.com/emicararo92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/emiliano-cararo-b06862233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="mailto:tu-email@example.com" // Reemplaza con tu correo real
              className="text-blue-500"
            >
              {language === "es" ? "Correo" : "Email"}
            </a>
          </>
        );
        break;
      case language === "es"
        ? "Gracias, eso es todo."
        : "Thank you, that’s all.":
        botText =
          language === "es"
            ? "¡De nada! Si necesitas algo más, no dudes en preguntar. ¡Que tengas un buen día!"
            : "You're welcome! If you need anything else, feel free to ask. Have a nice day!";
        break;
      default:
        botText =
          language === "es"
            ? "Lo siento, no entendí tu pregunta. Por favor elige una opción."
            : "I'm sorry, I didn't understand your question. Please choose an option.";
    }

    return { from: "bot", text: botText };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isOpen ? "w-80" : "w-16"}`}>
      <button
        onClick={toggleChat}
        className={`bg-gradient-to-r from-gray-800 via-gray-700 to-yellow-100 text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
          bounce ? "animate-bounce" : ""
        }`}
      >
        <AiOutlineMessage size={24} color="white" />
      </button>
      {isOpen && (
        <div className="mt-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 p-4 shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center mb-2">
            <Image
              src="/eeuu.png"
              alt="English"
              width={24}
              height={24}
              className="cursor-pointer m-1"
              onClick={() => {
                setLanguage("en");
                // Cambiar el saludo inicial al cambiar a inglés
                const welcomeMessage = {
                  from: "bot",
                  text: "Hello! I'm Emiliano Cararo, Front End Developer. How can I help you today?",
                };
                setMessages([welcomeMessage]); // Solo se muestra el saludo
              }}
            />
            <Image
              src="/españa.png"
              alt="Español"
              width={24}
              height={24}
              className="cursor-pointer m-1"
              onClick={() => {
                setLanguage("es");
                // Cambiar el saludo inicial al cambiar a español
                const welcomeMessage = {
                  from: "bot",
                  text: "¡Hola! Soy Emiliano Cararo, desarrollador Front End. ¿En qué puedo ayudarte hoy?",
                };
                setMessages([welcomeMessage]); // Solo se muestra el saludo
              }}
            />
          </div>
          <div className="h-64 overflow-y-auto border border-gray-300 p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.from === "user" ? "text-right" : "text-left"}
              >
                <span
                  className={`block p-2 rounded ${
                    msg.from === "user" ? "bg-teal-200" : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-2 justify-center">
            <button
              onClick={() =>
                handleUserSelection(
                  language === "es"
                    ? "¿Cuáles son tus tecnologías?"
                    : "What technologies do you use?"
                )
              }
              className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
            >
              {language === "es"
                ? "¿Cuáles son tus tecnologías?"
                : "What technologies do you use?"}
            </button>
            <button
              onClick={() =>
                handleUserSelection(
                  language === "es"
                    ? "¿Tienes algún proyecto interesante?"
                    : "Do you have any interesting projects?"
                )
              }
              className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
            >
              {language === "es"
                ? "¿Tienes algún proyecto interesante?"
                : "Do you have any interesting projects?"}
            </button>
            <button
              onClick={() =>
                handleUserSelection(
                  language === "es"
                    ? "¿Cómo puedo contactarte?"
                    : "How can I contact you?"
                )
              }
              className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
            >
              {language === "es"
                ? "¿Cómo puedo contactarte?"
                : "How can I contact you?"}
            </button>
            <button
              onClick={() =>
                handleUserSelection(
                  language === "es"
                    ? "Gracias, eso es todo."
                    : "Thank you, that’s all."
                )
              }
              className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
            >
              {language === "es"
                ? "Gracias, eso es todo."
                : "Thank you, that’s all."}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
