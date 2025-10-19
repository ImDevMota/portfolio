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
    <section className="flex items-center justify-center">
      <div className="flex flex-row w-[70%] items-center justify-between mt-[16rem]">
        <div>
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
              <h1 className="text-7xl font-bold mb-4">
                I'm <span className="text-red-700">Mota</span>
                <br /> Developer
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
            <p className="text-xl font-inter font-[100] mt-[1.3rem]">
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
            className="text-center rounded-2xl shadow-lg"
          >
            <div className="flex flex-row gap-x-2 mt-[1.8rem]">
              <a
                href="#"
                className="py-3 px-11 rounded-md bg-gradient-to-r flex flex-row gap-x-2 items-center from-red-600 to-red-950"
              >
                Projects
                <FaCode />
              </a>
              <a
                href="#"
                className="py-3 px-11 rounded-md border-1 border-red-950 flex flex-row gap-x-2 items-center"
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
            <div className="flex flex-row gap-4 mt-[1.7rem] rounded-2xl w-fit">
              {/* GitHub */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex items-center gap-2 px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a href="#">
                    <FaGithub />
                  </a>
                  GitHub
                </button>
              </div>

              {/* Instagram */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex items-center gap-2 px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a href="#">
                    <FaInstagram />
                  </a>
                  Instagram
                </button>
              </div>

              {/* Linkedin */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex items-center gap-2 px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  Linkedin
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <img
          src="./perfil.jpg"
          alt=""
          className="w-[400px] h-[400px] rounded-full"
        />
      </div>
    </section>
  );
}
