"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function CardContact() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Define o ponto de ativação (ajuste conforme seu layout)
  const triggerStart = 2600; // px do topo da página

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > triggerStart) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
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
      className="text-center w-full"
    >
      <div className="flex flex-row items-center justify-between mt-[3rem]">
        <div className="backdrop-blur-2xl rounded-lg shadow-lg w-[48%] border-[0.1rem] flex flex-col items-center justify-center border-white/80">
          <div className="bg-white/2 w-full rounded-b-lg backdrop-blur-xl shadow-lg px-7 py-[1.7rem]">
            <h3 className="font-bold text-white text-[22px] text-start">
              Comment:
            </h3>

            <form
              id="commentForm"
              className="flex flex-col w-full gap-y-[1rem]"
            >
              <div className="flex flex-row justify-between mt-[1rem]">
                <div className="form-group flex flex-col items-start w-[48%]">
                  <label className="font-bold" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                    required
                  />
                </div>

                <div className="form-group flex flex-col items-start w-[48%]">
                  <label className="font-bold" htmlFor="name">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ex: youremail@mail.com"
                    className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                    required
                  />
                </div>
              </div>

              <div className="form-group flex flex-col w-full items-start">
                <label className="font-bold" htmlFor="name">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                  required
                />
              </div>

              <div className="form-group flex flex-col w-full items-start">
                <label className="font-bold" htmlFor="name">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  className="border mt-[0.4rem] w-full h-[8rem] border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn text-[16px] mb-[0.5rem] mt-[0.2rem] py-[0.7rem] w-full text-sm font-bold rounded-lg bg-gradient-to-r from-red-950 to-red-600 hover:to-red-800 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center"
                id="submitBtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex backdrop-blur-2xl rounded-lg shadow-lg w-[48%] border-[0.1rem] border-white/80">
          <div className="bg-white/1 flex flex-col items-center justify-center rounded-b-lg backdrop-blur-xl shadow-lg px-[2rem] h-[510.95px]">
            <div className="">
              <h3 className="font-bold text-white text-[22px] text-start">
                Connect with Me:
              </h3>

              <div className="flex items-center w-full mt-[1rem]">
                <div className="flex text-start">
                  <h2 className="">
                    Is there something you'd like to discuss? Send me a private
                    message and let's talk.
                  </h2>
                </div>
              </div>

              <div className="flex items-center w-full justify-between mt-[2rem]">
                <div className="flex flex-col w-full items-start rounded-xl gap-y-[1.3rem]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FaEnvelope
                      color="#fb2c36"
                      size={20}
                      className="mb-[0.2rem]"
                    />
                    <p className="text-[16px]">thiago.you23@gmail.com</p>
                  </div>

                  <div className="flex flex-row items-center gap-x-2">
                    <FaMapMarkerAlt
                      color="#fb2c36"
                      size={20}
                      className="mb-[0.2rem]"
                    />
                    <p className="text-[16px]">Fortaleza, Ceará - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-[1.7rem] w-full">
              <h3 className="font-bold text-white text-[18px] text-start">
                Social Media:
              </h3>

              <div className="flex flex-row items-center w-full justify-between mt-[1rem]">
                <div className="flex flex-row border-[0.1rem] border-white/80 w-[48.5%] justify-start items-center rounded-xl px-[1rem] py-[0.8rem] gap-x-[0.7rem] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                  <FaGithub
                    size={42}
                    color="#ffffff"
                    className="bg-white/6 py-[0.4rem] rounded-md"
                  />

                  <div className="flex flex-col items-start">
                    <p>Github</p>
                    <p className="text-gray-400/90">@ImDevMota</p>
                  </div>
                </div>

                <div className="flex flex-row border-[0.1rem] border-white/80 w-[48.5%] justify-start items-center rounded-xl px-[1rem] py-[0.8rem] gap-x-[0.7rem] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                  <FaLinkedin
                    size={42}
                    color="#0A66C2"
                    className="bg-white/6 py-[0.4rem] rounded-md"
                  />

                  <div className="flex flex-col items-start">
                    <p>Linkedin</p>
                    <p className="text-gray-400/90">Thiago Mota</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center w-full justify-between mt-[1rem]">
                <div className="flex flex-row border-[0.1rem] w-full border-white/80 justify-start items-center rounded-xl px-[1rem] py-[0.8rem] gap-x-[0.7rem] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                  <FaInstagram
                    size={42}
                    color="#E1306C"
                    className="bg-white/6 py-[0.4rem] rounded-md"
                  />

                  <div className="flex flex-col items-start">
                    <p>Instagram</p>
                    <p className="text-gray-400/90">@thiagou.mota</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
