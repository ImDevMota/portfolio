"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function NavbarPortfolio() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 1350; // onde começa o fade in

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <section className="flex flex-col items-center justify-center w-[80%]">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // começa invisível e 100px abaixo
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
              } // entra (de baixo pra cima)
            : {
                opacity: 0,
                y: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              } // sai (pra baixo)
        }
        className="text-center px-[10rem] py-[1.8rem] bg-white/2 backdrop-blur-2xl rounded-2xl shadow-lg border-[1px] mt-[3rem] w-[100%]"
      >
        <div className="flex flex-row items-center justify-around">
          <div>
            <div className="">
              <FontAwesomeIcon icon={faLaptopCode} className=" mb-1 text-2xl" />
              <h3 className="font-bold text-[18px]">Projects</h3>
              <a href=""></a>
            </div>
          </div>

          <div>
            <div>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className=" mb-1 text-2xl"
              />
              <h3 className="font-bold text-[18px]">Education</h3>
              <p></p>
              <a href=""></a>
            </div>
          </div>

          <div>
            <div>
              <FontAwesomeIcon icon={faLayerGroup} className=" mb-1 text-2xl" />
              <h3 className="font-bold text-[18px]">Tech Stacks</h3>
              <p></p>
              <a href=""></a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
