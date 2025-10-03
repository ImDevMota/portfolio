"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function NavBarPortfolio() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 80; // onde começa o fade in

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
        initial={{ opacity: 0, y: 100 }} // começa invisível e 100px abaixo
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
        className="text-center p-6 bg-white rounded-2xl shadow-lg border-2"
      >
        <div>
          <div>
            <img src="" alt="" />
            <h3>Projects</h3>
            <h3></h3>
          </div>

          {/* Cards */}
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img src="" alt="" />
            <h3>Certificates</h3>
            <h3></h3>
          </div>

          {/* Cards */}
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img src="" alt="" />
            <h3>Stacks</h3>
            <h3></h3>
          </div>

          {/* Cards */}
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
