"use client";

import { useState, useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    {
      from: string;
      text: string | JSX.Element;
    }[]
  >([]);
  const [bounce, setBounce] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      const welcomeMessage = {
        from: "bot",
        text: "¡Hola! Soy Emiliano Cararo, desarrollador Front End. ¿En qué puedo ayudarte hoy?",
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
      case "¿Cuáles son tus tecnologías?":
        botText = (
          <>
            Trabajo con HTML, CSS, JavaScript, React, Next.js, TypeScript y
            Tailwind CSS.
          </>
        );
        break;
      case "¿Tienes algún proyecto interesante?":
        botText = (
          <>
            ¡Sí! Tengo varios proyectos. Puedes verlos en mi sección de
            proyectos.
            <button
              onClick={() => (window.location.href = "/Proyectos")}
              className="text-blue-500 underline"
            >
              Ver Proyectos
            </button>
          </>
        );
        break;
      case "¿Cómo puedo contactarte?":
        botText = (
          <>
            Te envío mis enlaces:{" "}
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
              Correo
            </a>
          </>
        );
        break;
      case "Gracias, eso es todo.":
        botText =
          "¡De nada! Si necesitas algo más, no dudes en preguntar. ¡Que tengas un buen día!";
        break;
      default:
        botText =
          "Lo siento, no entendí tu pregunta. Por favor elige una opción.";
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
          <div className="flex flex-wrap mt-2">
            {isOpen && (
              <>
                <button
                  onClick={() =>
                    handleUserSelection("¿Cuáles son tus tecnologías?")
                  }
                  className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
                >
                  ¿Cuáles son tus tecnologías?
                </button>
                <button
                  onClick={() =>
                    handleUserSelection("¿Tienes algún proyecto interesante?")
                  }
                  className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
                >
                  ¿Tienes algún proyecto interesante?
                </button>
                <button
                  onClick={() =>
                    handleUserSelection("¿Cómo puedo contactarte?")
                  }
                  className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
                >
                  ¿Cómo puedo contactarte?
                </button>
                <button
                  onClick={() => handleUserSelection("Gracias, eso es todo.")}
                  className="bg-gray-800 text-white rounded text-xs px-2 py-1 m-1"
                >
                  Gracias, eso es todo.
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
