"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function BarProjects() {
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
    <section className="flex flex-col mt-[2.5rem] items-center justify-center w-[80%]">
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
        className="text-center w-[100%]"
      >
        <div className="flex flex-row items-center justify-around">
          <div className="p-10 backdrop-blur-2xl rounded-2xl shadow-lg border-1 w-[30%]">
            <div className="">
              <p className="font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text text-[18px]">
                MyCourts
              </p>

              <img src="#" alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <div className="mt-[1.4rem] flex flex-col gap-y-[0.8rem]">
                <a
                  href="#"
                  className="py-3 w-full rounded-md bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                >
                  Ir ao Projeto
                </a>

                <a
                  href="#"
                  className="py-3 w-full rounded-md bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text border-2 border-red-950 flex items-center justify-center"
                >
                  Detalhes
                </a>
              </div>

              <a href="#"></a>
            </div>
          </div>

          <div className="p-10 backdrop-blur-2xl rounded-2xl shadow-lg border-1 w-[30%]">
            <div className="">
              <p className="font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text text-[18px]">
                MyCourts
              </p>

              <img src="#" alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <div className="mt-[1.4rem] flex flex-col gap-y-[0.8rem]">
                <a
                  href="#"
                  className="py-3 w-full rounded-md bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                >
                  Ir ao Projeto
                </a>

                <a
                  href="#"
                  className="py-3 w-full rounded-md bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text border-2 border-red-950 flex items-center justify-center"
                >
                  Detalhes
                </a>
              </div>

              <a href="#"></a>
            </div>
          </div>
          <div className="p-10 backdrop-blur-2xl rounded-2xl shadow-lg border-1 w-[30%]">
            <div className="">
              <p className="font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text text-[18px]">
                MyCourts
              </p>

              <img src="#" alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <div className="mt-[1.4rem] flex flex-col gap-y-[0.8rem]">
                <a
                  href="#"
                  className="py-3 w-full rounded-md bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                >
                  Ir ao Projeto
                </a>

                <a
                  href="#"
                  className="py-3 w-full rounded-md bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text border-2 border-red-950 flex items-center justify-center"
                >
                  Detalhes
                </a>
              </div>

              <a href="#"></a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
