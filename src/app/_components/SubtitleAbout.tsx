"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function SubtitleAbout() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 300; // onde começa o fade in

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 130 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 130,
                transition: { duration: 0.7, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center rounded-2xl shadow-lg"
      >
        <p className="text-[17px] font-light text-white/85">
          Turning technology into meaningful solutions
        </p>
      </motion.div>
    </div>
  );
}
