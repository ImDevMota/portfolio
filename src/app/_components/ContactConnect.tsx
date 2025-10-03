"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ContactConncect() {
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
        <div>
          <h2>Connect with Me</h2>

          {/* Redes Sociais */}
          <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
          </div>

          <div>
            <div>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </div>

            <div>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </div>
          </div>

          <div>
            <div>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </div>

            <div>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div>
          <h2>Contact</h2>

          <h3></h3>

          {/* Dados */}
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>

          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>

          <a href="#"></a>
        </div>
      </motion.div>
    </section>
  );
}
