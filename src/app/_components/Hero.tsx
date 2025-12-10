"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TextWriter from "./TextWriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  // Só ativa a animação após o carregamento da página
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="flex items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row w-[95%] md:w-[85%] lg:w-[70%] items-center justify-between mt-[8rem] md:mt-[12rem] lg:mt-[11rem] gap-8 lg:gap-4">
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  }
                : {}
            }
            className="rounded-2xl shadow-lg"
          >
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center lg:text-left">
                I'm <span className="text-red-700">Mota</span>
                <br />
                Developer
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
                  }
                : {}
            }
            className="rounded-2xl shadow-lg"
          >
            <TextWriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
                  }
                : {}
            }
            className="rounded-2xl shadow-lg"
          >
            <p className="text-base md:text-lg lg:text-xl font-inter font-[100] mt-[1.3rem] text-center lg:text-left">
              Transforming ideas into websites, automations and intelligent{" "}
              digital solutions.
            </p>
          </motion.div>

          {/* Botões principais */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.6, ease: "easeOut" },
                  }
                : {}
            }
            className="text-center rounded-2xl shadow-lg w-full sm:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2 mt-[1.8rem] w-full sm:w-auto">
              <a
                href="#"
                className="py-3 px-8 sm:px-11 font-semibold rounded-md bg-gradient-to-r flex flex-row gap-x-2 items-center justify-center from-red-600 to-red-950"
              >
                Projects
                <FaCode />
              </a>
              <a
                href="#"
                className="py-3 px-8 sm:px-11 font-semibold rounded-md border-1 border-red-950 flex flex-row gap-x-2 items-center justify-center"
              >
                Contact
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
                  }
                : {}
            }
            className="text-center rounded-2xl shadow-lg"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-[1.7rem] rounded-2xl w-fit">
              {/* GitHub */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex px-4 sm:px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a
                    className="flex flex-row items-center gap-x-2 text-sm sm:text-base"
                    href="https://github.com/ImDevMota"
                  >
                    <FaGithub />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </button>
              </div>

              {/* Instagram */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex px-4 sm:px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a
                    href="https://www.instagram.com/thiagou.mota?igsh=MW9ydG9kemg0cjFmeA%3D%3D&utm_source=qr"
                    className="flex flex-row items-center gap-x-2 text-sm sm:text-base"
                  >
                    <FaInstagram />
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                </button>
              </div>

              {/* Linkedin */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex px-4 sm:px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a
                    href="https://www.linkedin.com/in/thiago-mota-32332a268/"
                    className="flex flex-row items-center gap-x-2 text-sm sm:text-base"
                  >
                    <FaLinkedin />
                    <span className="hidden sm:inline">Linkedin</span>
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <img
          src="./perfil.jpg"
          alt=""
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
        />
      </div>
    </section>
  );
}
