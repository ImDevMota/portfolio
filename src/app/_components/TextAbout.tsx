"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export default function TextAbout() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Define o ponto de ativação (ajuste conforme seu layout)
  const triggerStart = 775; // px do topo da página

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className="flex flex-col">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }
            : {
                opacity: 0,
                x: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="rounded-2xl shadow-lg flex flex-col"
      >
        <p className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-center lg:text-left">
          <span className="text-red-500">Hello, I'm</span> Thiago Mota.
        </p>
        <p className="text-[15px] md:text-[17px] lg:text-[18px] mt-1 text-white/85 text-justify leading-[1.6rem] md:leading-[1.8rem] lg:leading-[2rem]">
          Currently, I am a Full-stack Developer and Systems Analysis and
          Development Technologist. I also work as a Manager and Developer in
          the technology community{" "}
          <a href="#" className="text-amber-300 font-bold">
            CODA.CE
          </a>
          . I am fascinated by technology and am always seeking to learn more in
          various areas. I am very interested in becoming a Computer Scientist
          in the near future and being part of teams that bring innovations and
          discoveries.
        </p>

        <div className="backdrop-blur-md bg-[#0a0a0a]/90 border-2 mt-[1.7rem] border-white/50 rounded-xl px-4 md:px-6 py-3 text-center">
          <p className="text-white font-bold text-xs md:text-sm">
            "As long as we remain conscious, technology will always be our
            ally."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
