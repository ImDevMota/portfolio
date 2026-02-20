"use client";

import { motion } from "framer-motion";
import { useInViewReveal } from "../../utils/useInViewReveal";

export default function TitleContact() {
  const { ref, visible } = useInViewReveal(0.1, "-120px");

  return (
    <div ref={ref} className="flex flex-col items-center justify-cente">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center"
      >
        <p className="text-[42px] font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text">
          Contact Me
        </p>
      </motion.div>
    </div>
  );
}
