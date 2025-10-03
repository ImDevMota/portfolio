"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 30; // onde começa o fade in

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <section className="flex flex-col items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 150 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 150,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center p-6 bg-white rounded-2xl shadow-lg"
      >
        <form>
          <h2></h2>

          <div>
            <div>
              <input type="text" />
              <label htmlFor=""></label>
            </div>
          </div>

          <div>
            <div>
              <input type="image" />
              <label htmlFor=""></label>
              <p></p>
            </div>
          </div>

          <div>
            <div>
              <input type="text" />
              <label htmlFor=""></label>
            </div>
          </div>

          <button></button>
        </form>
      </motion.div>
    </section>
  );
}
