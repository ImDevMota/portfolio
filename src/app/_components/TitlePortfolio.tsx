"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function TitlePortfolio() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 1250; // onde começa o fade in

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className="flex flex-col items-center justify-cente">
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
    </div>
  );
}
