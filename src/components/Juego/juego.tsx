"use client";

import { useEffect, useState } from "react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

interface Card {
  id: number;
  icon: JSX.Element;
}

const icons: Card[] = [
  { id: 1, icon: <FaReact /> },
  { id: 2, icon: <FaNode /> },
  { id: 3, icon: <FaPython /> },
  { id: 4, icon: <FaJava /> },
  { id: 5, icon: <FaHtml5 /> },
  { id: 6, icon: <FaCss3Alt /> },
  { id: 7, icon: <FaGit /> },
  { id: 8, icon: <FaDocker /> },
  { id: 9, icon: <FaReact /> },
  { id: 10, icon: <FaNode /> },
  { id: 11, icon: <FaPython /> },
  { id: 12, icon: <FaJava /> },
  { id: 13, icon: <FaHtml5 /> },
  { id: 14, icon: <FaCss3Alt /> },
  { id: 15, icon: <FaGit /> },
  { id: 16, icon: <FaDocker /> },
];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  useEffect(() => {
    const shuffledCards = [...icons].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (id: number) => {
    if (disabled || flippedCards.includes(id) || matchedCards.includes(id))
      return;

    setFlippedCards((prev) => [...prev, id]);

    if (flippedCards.length === 1) {
      setDisabled(true);
      const firstCard = flippedCards[0];
      const secondCard = id;

      const firstCardIndex = cards.findIndex((card) => card.id === firstCard);
      const secondCardIndex = cards.findIndex((card) => card.id === secondCard);

      if (
        cards[firstCardIndex].icon.type === cards[secondCardIndex].icon.type
      ) {
        setMatchedCards((prev) => [...prev, firstCard, secondCard]);
        setTimeout(() => {
          resetFlippedCards();
          if (matchedCards.length + 2 === cards.length) {
            Swal.fire({
              title: "Congratulations!",
              text: "You have won! 🎊",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        }, 1500);
      } else {
        setTimeout(() => resetFlippedCards(), 1000);
      }
    }
  };

  const resetFlippedCards = () => {
    setFlippedCards([]);
    setDisabled(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 juegoMemoria">Memory Game</h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        In programming, memory is crucial for recalling patterns, syntax, <br />
        and solutions to common problems. A good developer can store <br />
        and organize a lot of information in their mind while working, <br />
        which enhances efficiency and problem-solving capabilities.
      </p>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            initial={{ scale: 1 }}
            animate={{
              scale:
                flippedCards.includes(card.id) || matchedCards.includes(card.id)
                  ? 1
                  : 0.95,
              rotateY:
                flippedCards.includes(card.id) || matchedCards.includes(card.id)
                  ? 0
                  : 180,
            }}
            transition={{ duration: 0.5 }}
            className={`w-16 h-16 flex items-center justify-center border rounded-lg cursor-pointer ${
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                ? "bg-blue-600 text-white"
                : "bg-gray-300"
            }`}
          >
            {(flippedCards.includes(card.id) ||
              matchedCards.includes(card.id)) && (
              <div className="text-4xl">{card.icon}</div>
            )}
          </motion.div>
        ))}
      </div>
      {feedbackMessage && (
        <div className="absolute text-4xl font-bold text-green-500">
          {feedbackMessage}
        </div>
      )}
      <div className="mb-4">
        <button
          onClick={() => {
            const shuffledCards = [...icons].sort(() => Math.random() - 0.5);
            setCards(shuffledCards);
            setMatchedCards([]);
            setFlippedCards([]);
          }}
          className="mt-4 bg-red-600 text-white rounded-full hover:bg-red-700 px-4 py-2"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default MemoryGame;
