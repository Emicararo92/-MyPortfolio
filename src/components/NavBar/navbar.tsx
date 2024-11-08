"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaFolderOpen,
  FaEnvelope,
  FaGamepad,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/logo1.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-80 backdrop-blur-md border-b-4 border-amber-100 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <Image
            src={logo}
            alt="Home Logo"
            width={50}
            height={50}
            className="rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </Link>

        <div className="flex space-x-6">
          <Link href="../Proyectos" aria-label="Proyectos">
            <FaFolderOpen className="text-white text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110" />
          </Link>

          <Link href="/Games" aria-label="Juego Memoria">
            <FaGamepad className="text-white text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110" />
          </Link>

          <Link
            href="https://github.com/emicararo92"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-white text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110" />
          </Link>

          <Link href="mailto:tuemail@example.com" aria-label="Email">
            <FaEnvelope className="text-white text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
