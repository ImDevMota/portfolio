"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
// corrigir o recarregar a página para manter o blur quando tiver scrollado
export default function TitleAbout() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 250; // aparece depois disso

  useMotionValueEvent(scrollY, "change", (latest) => {
    // visível apenas entre triggerStart e triggerEnd
    if (latest >= triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 120 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 120,
                transition: { duration: 0.7, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center rounded-2xl shadow-lg"
      >
        <h1 className="text-[48px] font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text">
          About Me
        </h1>
      </motion.div>
    </section>
  );
}
