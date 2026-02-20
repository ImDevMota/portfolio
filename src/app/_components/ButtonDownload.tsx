"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function ButtonDownload() {
  const visible = useScrollReveal(850, 950, 650, 890);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 130 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }
            : {
                opacity: 0,
                y: 130,
                transition: { duration: 0.6, ease: "easeIn" },
              }
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
