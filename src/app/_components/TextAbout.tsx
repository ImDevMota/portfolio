"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export default function TextAbout() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Define o ponto de ativação (ajuste conforme seu layout)
  const triggerStart = 230; // px do topo da página

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              }
            : {
                opacity: 0,
                x: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="p-8 bg-white rounded-2xl shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold">
          Fade in/out controlado pelo scroll 🎯
        </h1>
        <p className="text-gray-600 mt-2">
          Aparece quando o scroll está entre {triggerStart}px
        </p>
      </motion.div>

      <div>
        <button>Download CV</button>
        <a href="">Projects</a>
      </div>
    </section>
  );
}
