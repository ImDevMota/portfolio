"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";

import { ActiveCard } from "../sections/SectionContact";

interface ContactSwitcherProps {
  activeCard: ActiveCard;
  setActiveCard: React.Dispatch<React.SetStateAction<ActiveCard>>;
}

export default function ContactSwitcher({
  activeCard,
  setActiveCard,
}: ContactSwitcherProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // pontos de ativação — ajuste conforme o layout
  const triggerStart = 2700; // onde começa o fade in

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 180 }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
            } // entra (de baixo pra cima)
          : {
              opacity: 0,
              y: 100,
              transition: { duration: 0.6, ease: "easeIn" },
            } // sai (pra baixo)
      }
      className="flex flex-col items-center justify-center text-white"
    >
      <div
        onClick={
          activeCard == "contact"
            ? () => setActiveCard("comment")
            : () => setActiveCard("contact")
        }
        className="relative py-2 w-[5.5rem] mt-[2rem] bg-black/50 border border-white/80 rounded-full flex items-center justify-between px-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-1 text-sm font-medium transition-colors">
          <FiMail
            className={`transition-colors ${
              activeCard == "contact" ? "text-white" : "text-gray-500"
            }`}
            size={20}
          />
        </div>

        <div className="flex items-center gap-1 text-sm font-medium transition-colors">
          <FaRegCommentDots
            className={`transition-colors ${
              activeCard == "comment" ? "text-white" : "text-gray-500"
            }`}
            size={20}
          />
        </div>

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`absolute top-0 left-0 w-[50%] h-full bg-red-600 rounded-full ${
            activeCard == "comment" ? "translate-x-full" : ""
          }`}
        />
      </div>
    </motion.div>
  );
}
