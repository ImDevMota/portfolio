"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export default function ImageAbout() {
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
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={
          visible
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              }
            : {
                opacity: 0,
                x: -100,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="rounded-2xl shadow-lg flex flex-col"
      >
        <img
          src="./about.jpg"
          alt=""
          className="w-[170rem] h-[26rem] rounded-xl"
        />
      </motion.div>
    </div>
  );
}
