"use client";

import { motion } from "framer-motion";
import { useInViewReveal } from "../../utils/useInViewReveal";

export default function SubtitleContact() {
  const { ref, visible } = useInViewReveal(0.1, "-110px");

  return (
    <div ref={ref} className="flex flex-col items-center justify-center mt-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 50,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center mt-[-0.5rem] text-[15px]"
      >
        <p>Let&apos;s connect! Drop me a message about anything.</p>
      </motion.div>
    </div>
  );
}
