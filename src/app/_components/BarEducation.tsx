"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function BarEducation() {
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
    <section className="flex flex-col mt-[2.5rem] gap-y-[2.5rem] items-center justify-center w-[80%]">
      <div className="flex flex-row w-full justify-between">
        <div className="backdrop-blur-2xl rounded-md shadow-lg w-[49%] border border-red-600/10">
          <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
            <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[22px] text-start">
              Technologist Diploma
            </p>

            <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
              <p className="w-full text-sm font-medium text-[16px] rounded-md flex ">
                UNOPAR - Software Analysis and Development
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                <span className="bg-red-800 text-indigo-100 text-[14px] font-medium px-2.5 py-0.5 rounded-full">
                  2023 – 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-2xl rounded-md shadow-lg w-[49%] border border-red-600/10">
          <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
            <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[22px] text-start">
              Full-Stack
            </p>

            <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
              <p className="w-full text-sm font-medium text-[16px] rounded-md flex ">
                Digital College - Aldeota
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                <span className="bg-red-800 text-indigo-100 text-[14px] font-medium px-2.5 py-0.5 rounded-full">
                  2025 – So Far
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between">
        <div className="backdrop-blur-2xl rounded-md shadow-lg w-[49%] border border-red-600/10">
          <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-7 py-5">
            <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[22px] text-start">
              Back-end Java
            </p>

            <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
              <p className="w-full text-sm font-medium text-[16px] rounded-md flex ">
                Bootcamp DIO - Santander
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                <span className="bg-red-800 text-indigo-100 text-[14px] font-medium px-2.5 py-0.5 rounded-full">
                  2023 – 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
