"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ButtonDownload() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 1020; // onde começa o fade in

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
                transition: { duration: 0.6, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 130,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center rounded-2xl shadow-lg mt-[3.5rem] flex flex-row gap-x-2 justify-center items-center lg:justify-start"
      >
        <a
          href="#"
          className="py-3 px-6 md:px-9 rounded-md bg-gradient-to-r font-semibold flex flex-row gap-x-2 items-center from-red-600 to-red-950 text-sm md:text-base"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
}
