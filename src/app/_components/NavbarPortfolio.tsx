"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { ActiveBar } from "../sections/SectionPortfolio";

interface NavbarProjectsProps {
  activeBar: ActiveBar;
  setActiveBar: React.Dispatch<React.SetStateAction<ActiveBar>>;
}

export default function NavbarProjects({
  activeBar,
  setActiveBar,
}: NavbarProjectsProps) {
  const baseStyle = "rounded-md transition-all";
  const activeStyle =
    "h-[4px] w-[14px] bg-gradient-to-r from-red-700 to-[#a03030] text-transparent mt-2 mb-5 text-white";
  const inactiveStyle = "hover:bg-gray-700 mt-2";

  const activeStyleText =
    "font-bold text-[18px] bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent";

  const inactiveStyleText = "font-bold text-[18px]";

  const activeStyleIcon = "mb-1 text-[1.4em]";

  const inactiveStyleIcon = "mb-1 text-[1.5em]";

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
    <section className="flex flex-col items-center justify-center w-full">
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
        className="text-center h-[130px] px-[10rem] py-[1.8rem] bg-white/2 backdrop-blur-2xl rounded-2xl shadow-lg border-white/80 border-[1px] mt-[3rem] w-[80%]"
      >
        <div className="flex flex-row h-[80px] items-center justify-around">
          <div onClick={() => setActiveBar("projects")}>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className={`${baseStyle} ${
                  activeBar === "projects" ? activeStyleIcon : inactiveStyleIcon
                }`}
              />

              <h3
                className={`${baseStyle} ${
                  activeBar === "projects" ? activeStyleText : inactiveStyleText
                }`}
              >
                Projects
              </h3>

              <div
                className={`${baseStyle} ${
                  activeBar === "projects" ? activeStyle : inactiveStyle
                }`}
              ></div>
            </div>
          </div>

          <div onClick={() => setActiveBar("education")}>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className={`${baseStyle} ${
                  activeBar === "education"
                    ? activeStyleIcon
                    : inactiveStyleIcon
                }`}
              />

              <h3
                className={`${baseStyle} ${
                  activeBar === "education"
                    ? activeStyleText
                    : inactiveStyleText
                }`}
              >
                Education
              </h3>

              <div
                className={`${baseStyle} ${
                  activeBar === "education" ? activeStyle : inactiveStyle
                }`}
              ></div>
            </div>
          </div>

          <div onClick={() => setActiveBar("tech")}>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className={`${baseStyle} ${
                  activeBar === "tech" ? activeStyleIcon : inactiveStyleIcon
                }`}
              />

              <h3
                className={`${baseStyle} ${
                  activeBar === "tech" ? activeStyleText : inactiveStyleText
                }`}
              >
                Tech Stacks
              </h3>

              <div
                className={`${baseStyle} ${
                  activeBar === "tech" ? activeStyle : inactiveStyle
                }`}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
