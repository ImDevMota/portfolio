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
        <div className="flex flex-row items-center justify-between">
          <div className="backdrop-blur-2xl rounded-md shadow-lg w-[32%] border border-red-600/10">
            <img src="./saas.png" alt="" className="rounded-t-md" />

            <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
              <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[22px] text-start">
                SaaS - agendamento de quadras
              </p>

              <p className="text-justify mt-[0.8rem] text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <a
                  href="#"
                  className="py-[0.5rem] w-full text-sm font-semibold rounded-md bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                >
                  View Project
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center font-semibold justify-center w-full py-[0.5rem] rounded-md text-sm
                text-red-400 border border-red-600/70 transition-all duration-300
                hover:text-red-300 hover:border-red-500/80
                  bg-transparent overflow-visible
                  after:absolute after:inset-0 after:rounded-md after:content-[''] after:pointer-events-none
                  hover:after:shadow-[0_0_8px_4px_rgba(239,68,68,0.2)]"
                >
                  <span className="bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent">
                    Detail
                  </span>
                </a>
              </div>

              <a href="#"></a>
            </div>
          </div>

          <div className="backdrop-blur-2xl rounded-2xl shadow-lg w-[32%] border border-red-600/10">
            <img src="./e-commerce.png" alt="" className="rounded-t-md" />

            <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
              <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[22px] text-start">
                E-commerce - Loja Variedades do Côco
              </p>

              <p className="text-justify mt-[0.8rem] text-[17px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <a
                  href="#"
                  className="py-[0.5rem] w-full text-sm font-semibold rounded-md bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                >
                  View Project
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center font-semibold justify-center w-full py-[0.5rem] rounded-md text-sm
                text-red-400 border border-red-600/70 transition-all duration-300
                hover:text-red-300 hover:border-red-500/80
                  bg-transparent overflow-visible
                  after:absolute after:inset-0 after:rounded-md after:content-[''] after:pointer-events-none
                  hover:after:shadow-[0_0_8px_4px_rgba(239,68,68,0.2)]"
                >
                  <span className="bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent">
                    Detail
                  </span>
                </a>
              </div>

              <a href="#"></a>
            </div>
          </div>

          <div className=" backdrop-blur-2xl rounded-2xl shadow-lg w-[32%] border border-red-600/10">
            <img src="./lp-tipminer.png" alt="" className="rounded-t-md" />

            <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
              <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[22px] text-start">
                Landing Page - Tip Miner
              </p>

              <p className="text-justify mt-[0.8rem] text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <a
                  href="#"
                  className="py-[0.5rem] w-full text-sm font-semibold rounded-md bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                >
                  View Project
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center font-semibold justify-center w-full py-[0.5rem] rounded-md text-sm
                text-red-400 border border-red-600/70 transition-all duration-300
                hover:text-red-300 hover:border-red-500/80
                  bg-transparent overflow-visible
                  after:absolute after:inset-0 after:rounded-md after:content-[''] after:pointer-events-none
                  hover:after:shadow-[0_0_8px_4px_rgba(239,68,68,0.2)]"
                >
                  <span className="bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent">
                    Detail
                  </span>
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
