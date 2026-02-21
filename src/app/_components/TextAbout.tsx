"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function TextAbout() {
  const visible = useScrollReveal(350, 670, 400, 750);

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
              }
            : {
                opacity: 0,
                x: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="rounded-2xl shadow-lg flex flex-col"
      >
        <p className="text-[32px] md:text-[36px] lg:text-[40px] font-bold lg:text-left">
          <span className="text-red-500">Hello, I&apos;m</span> Thiago Mota.
        </p>
        <p className="text-[15px] md:text-[17px] lg:text-[22px] mt-1 text-white/85 text-justify leading-[1.6rem] md:leading-[1.8rem] lg:leading-[1.9rem]">
          Currently, I&apos;m a Full-Stack Developer with a primary focus on
          Backend development and a Technologist in Systems Analysis and
          Development. I&apos;m expanding my expertise through a postgraduate
          degree in Software Engineering, DevOps, and Cloud Computing. I also
          serve as a Volunteer Project Manager and Developer in the technology
          community{" "}
          <a href="#" className="text-amber-300 font-bold">
            CODA.CE
          </a>
          . I&apos;m fascinated by technology and am always seeking to learn
          more in various areas.
        </p>

        <div className="backdrop-blur-md bg-[#0a0a0a]/90 border-2 mt-[1.7rem] border-white/50 rounded-xl px-4 md:px-6 py-3 text-center">
          <p className="text-white font-bold text-xs md:text-sm">
            &quot;Build it. Test it. Break it. Fix it.&quot;
          </p>
        </div>
      </motion.div>
    </div>
  );
}
