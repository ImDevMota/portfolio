"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function NavbarProjects() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 80; // onde começa o fade in

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <section className="flex flex-col items-center justify-center w-[80%]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center"
      >
        <p className="text-[48px] font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text">
          Portfolio Showcase
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center mt-[-0.5rem] text-[15px]"
      >
        <p>This is the digital footprint of my journey.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center p-10 backdrop-blur-2xl rounded-2xl shadow-lg border-1 mt-[3rem] w-[100%]"
      >
        <div className="flex flex-row items-center justify-around">
          <div>
            <div className="">
              {/* <img src="" alt="" /> */}
              <h3 className="font-bold text-[20px]">Projetos</h3>
              <p>-</p>
              <a href=""></a>
            </div>
          </div>

          <div>
            <div>
              {/* <img src="" alt="" /> */}
              <h3 className="font-bold text-[20px]">Formação</h3>
              <p></p>
              <a href=""></a>
            </div>
          </div>

          <div>
            <div>
              {/* <img src="" alt="" /> */}
              <h3 className="font-bold text-[20px]">Tech Stacks</h3>
              <p></p>
              <a href=""></a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
