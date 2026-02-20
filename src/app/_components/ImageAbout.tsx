"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function ImageAbout() {
  const visible = useScrollReveal(450, 670, 400, 520);

  return (
    <div className="w-full lg:w-auto flex-shrink-0">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={
          visible
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
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
          className="w-full h-[18rem] md:h-[22rem] lg:w-[500px] lg:h-[27rem] rounded-xl object-cover"
        />
      </motion.div>
    </div>
  );
}
