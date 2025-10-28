"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { SiSpringboot, SiSupabase } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export default function BarTechStacks() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visibleCol1, setVisibleCol1] = useState(false);
  const [visibleCol2, setVisibleCol2] = useState(false);

  // Define o ponto de ativação (ajuste conforme seu layout)
  const triggerStartCol1 = 1515; // px do topo da página
  const triggerStartCol2 = 1665; // px do topo da página

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStartCol1) {
      setVisibleCol1(true);
    } else {
      setVisibleCol1(false);
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStartCol2) {
      setVisibleCol2(true);
    } else {
      setVisibleCol2(false);
    }
  });

  return (
    <section className="flex flex-col mt-[2.5rem] gap-y-[1rem] items-center justify-center w-[80%]">
      <div className="flex flex-row w-full justify-between">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <FontAwesomeIcon
              icon={faSquareJs}
              className=" mb-2 text-[42px] text-[#F0DB4F]"
            />{" "}
            <p className="text-[16px] text-center">JavaScript</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <FontAwesomeIcon
              icon={faReact}
              className=" mb-2 text-[42px] text-[#61DBFB]"
            />{" "}
            <p className="text-[16px] text-center">React.js</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <SiNextdotjs className=" mb-2 text-[42px] text-[#FFFFFF]" />
            <p className="text-[16px] text-center">Next.js</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <FontAwesomeIcon
              icon={faNodeJs}
              className=" mb-2 text-[42px] text-[#68A063]"
            />{" "}
            <p className="text-[16px] text-center">Node.js</p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-row w-full justify-between">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <FontAwesomeIcon
              icon={faWind}
              className=" mb-2 text-[42px] text-cyan-600"
            />{" "}
            <p className="text-[16px] text-center">Tailwind CSS</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <FontAwesomeIcon
              icon={faJava}
              className=" mb-2 text-[42px] text-red-600"
            />{" "}
            <p className="text-[16px] text-center">Java</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <img src="/n8n-color.svg" alt="n8n" className=" mb-2 w-[42px]" />
            <p className="text-[16px] text-center">n8n</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1], // curva suave
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex flex-row w-full justify-between"
        >
          <div className="backdrop-blur-2xl py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-[96%] border-2 border-white/50">
            <SiSupabase className=" mb-2 text-[42px] text-[#3ECF8E]" />
            <p className="text-[16px] text-center">Supabase</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
