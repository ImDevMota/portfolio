"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export default function BarEducation() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visibleCol1, setVisibleCol1] = useState(false);
  const [visibleCol2, setVisibleCol2] = useState(false);

  // Define o ponto de ativação (ajuste conforme seu layout)
  const triggerStartCol1 = 1500; // px do topo da página
  const triggerStartCol2 = 1725; // px do topo da página

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
    <section className="flex flex-col mt-[2.5rem] gap-y-[2.5rem] items-center justify-center w-[80%]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={
          visibleCol1
            ? {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
              } // fade in
            : {
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" },
              } // fade out
        }
        className="flex flex-row w-full justify-between"
      >
        <div className="backdrop-blur-2xl rounded-md shadow-lg w-[49%] border border-red-400/10">
          <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
            <div className="flex flex-row items-center gap-x-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className=" mb-1 text-[27px] text-red-500"
              />{" "}
              <p className="font-bold text-white text-[22px] text-start">
                Technologist Diplom
              </p>
            </div>

            <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
              <p className="w-full text-sm font-medium text-[16px] rounded-md flex ">
                UNOPAR - Software Analysis and Development
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                <span className="bg-red-800 text-indigo-100 text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                  2023 – 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-2xl rounded-md shadow-lg w-[49%] border border-red-400/10">
          <div className="bg-white/2 flex flex-col rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
            <div className="flex flex-row items-center gap-x-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className=" mb-1 text-[27px] text-red-500"
              />{" "}
              <p className="font-bold text-white text-[22px] text-start">
                Full-Stack
              </p>
            </div>

            <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
              <p className="w-full text-sm font-medium text-[16px] rounded-md flex ">
                Digital College - Aldeota
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                <span className="bg-red-800 text-indigo-100 text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                  2025 – So Far
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={
          visibleCol2
            ? {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
              } // fade in
            : {
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" },
              } // fade out
        }
        className="flex flex-row w-full justify-between"
      >
        <div className="backdrop-blur-2xl rounded-md shadow-lg w-[49%] border border-red-400/10">
          <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
            <div className="flex flex-row items-center gap-x-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className=" mb-1 text-[27px] text-red-500"
              />{" "}
              <p className="font-bold text-white text-[22px] text-start">
                Back-end Java
              </p>
            </div>

            <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
              <p className="w-full text-sm font-medium text-[16px] rounded-md flex ">
                Bootcamp DIO - Santander
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                <span className="bg-red-800 text-indigo-100 text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                  2023 – 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
