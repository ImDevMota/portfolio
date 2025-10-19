"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // ativa o efeito após 50px de rolagem
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex fixed top-0 left-0 py-5  flex-row justify-center items-center w-full transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="flex justify-between w-[70%] ">
        <a
          href="#"
          className="font-bold text-2xl text-red-700 drop-shadow-[0_0_5px_#b91c1c] animate-[pulse_3.5s_infinite]"
        >
          Mota Dev
        </a>

        <nav className="flex flex-row gap-x-[2rem]">
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            Home
          </a>
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            About
          </a>
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            Portfolio
          </a>
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
