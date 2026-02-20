"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { SiPostgresql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function BarTechStacks() {
  const visibleCol1 = useScrollReveal(1012, 1830, 1350, 1460);
  const visibleCol2 = useScrollReveal(1620, 1975, 1440, 1655);

  return (
    <section className="flex flex-col mt-[2.5rem] gap-y-4 md:gap-y-5 items-center justify-center w-[95%] md:w-[90%] lg:w-[80%]">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 md:gap-5">
        <motion.div
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faSquareJs}
              className=" mb-2 text-[32px] md:text-[42px] text-[#F0DB4F]"
            />{" "}
            <p className="text-[14px] md:text-[16px] text-center">JavaScript</p>
          </div>
        </motion.div>

        <motion.div
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faReact}
              className=" mb-2 text-[32px] md:text-[42px] text-[#61DBFB]"
            />{" "}
            <p className="text-[14px] md:text-[16px] text-center">React.js</p>
          </div>
        </motion.div>

        <motion.div
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiNextdotjs className=" mb-2 text-[32px] md:text-[42px] text-[#FFFFFF]" />
            <p className="text-[14px] md:text-[16px] text-center">Next.js</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.7,
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faNodeJs}
              className=" mb-2 text-[32px] md:text-[42px] text-[#68A063]"
            />{" "}
            <p className="text-[14px] md:text-[16px] text-center">Node.js</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 md:gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.7,
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faWind}
              className=" mb-2 text-[32px] md:text-[42px] text-cyan-600"
            />{" "}
            <p className="text-[14px] md:text-[16px] text-center">Tailwind</p>
          </div>
        </motion.div>

        <motion.div
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faJava}
              className=" mb-2 text-[32px] md:text-[42px] text-red-600"
            />{" "}
            <p className="text-[14px] md:text-[16px] text-center">Java</p>
          </div>
        </motion.div>

        <motion.div
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <img
              src="/n8n-color.svg"
              alt="n8n"
              className=" mb-2 w-[32px] md:w-[42px]"
            />
            <p className="text-[14px] md:text-[16px] text-center">n8n</p>
          </div>
        </motion.div>

        <motion.div
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
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiPostgresql className=" mb-2 text-[32px] md:text-[42px] text-[#336791]" />
            <p className="text-[14px] md:text-[16px] text-center">PostgreSQL</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
