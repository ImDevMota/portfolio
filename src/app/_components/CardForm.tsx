"use client";

import { motion } from "framer-motion";
import { useInViewReveal } from "../../utils/useInViewReveal";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function CardForm() {
  const { ref, visible } = useInViewReveal(0.3);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // começa invisível e 100px abaixo
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
        className="text-center w-full"
      >
        <div className="flex flex-col lg:flex-row items-stretch justify-between mt-[2rem] md:mt-[3rem] gap-6">
          <div className="backdrop-blur-2xl rounded-lg shadow-lg w-full lg:w-[48%] border-[0.1rem] flex flex-col items-center justify-center border-white/80">
            <div className="bg-white/2 w-full rounded-b-lg backdrop-blur-xl shadow-lg px-4 md:px-7 py-[1.5rem] md:py-[1.7rem]">
              <h3 className="font-bold text-white text-[18px] md:text-[22px] text-start">
                Contact:
              </h3>

              <form
                id="contactForm"
                className="flex flex-col w-full gap-y-[1rem]"
              >
                <div className="flex flex-col sm:flex-row justify-between mt-[1rem] gap-4">
                  <div className="form-group flex flex-col items-start w-full sm:w-[36.5%]">
                    <label
                      className="font-bold text-sm md:text-base"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300 text-sm md:text-base
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-400/50
                    transition duration-300"
                      required
                    />
                  </div>

                  <div className="form-group flex flex-col items-start w-full sm:w-[60%]">
                    <label
                      className="font-bold text-sm md:text-base"
                      htmlFor="email"
                    >
                      E-mail:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="youremail@mail.com"
                      className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300 text-sm md:text-base
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
                  <label
                    className="font-bold text-sm md:text-base"
                    htmlFor="subject"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="border mt-[0.4rem] w-full border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300 text-sm md:text-base
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
                  <label
                    className="font-bold text-sm md:text-base"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message..."
                    className="border mt-[0.4rem] w-full h-[6rem] md:h-[8rem] border-white/50 px-[0.8rem] py-[0.5rem] rounded-lg
                    text-gray-300 text-sm md:text-base
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
                  className="submit-btn text-[14px] md:text-[16px] mb-[0.5rem] mt-[0.2rem] py-[0.7rem] w-full font-bold rounded-lg bg-gradient-to-r from-red-950 to-red-600 hover:to-red-800 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center"
                  id="submitBtn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex backdrop-blur-2xl rounded-lg shadow-lg w-full lg:w-[48%] border-[0.1rem] border-white/80">
            <div className="bg-white/1 flex flex-col items-center justify-center rounded-b-lg backdrop-blur-xl shadow-lg px-4 md:px-[2rem] py-6 lg:py-0 w-full">
              <div className="w-full">
                <h3 className="font-bold text-white text-[18px] md:text-[22px] text-start">
                  Connect with Me:
                </h3>

                <div className="flex items-center w-full mt-[1rem]">
                  <div className="flex text-start">
                    <h2 className="text-sm md:text-base">
                      Is there something you'd like to discuss? Send me a
                      private message and let's talk.
                    </h2>
                  </div>
                </div>

                <div className="flex items-center w-full justify-between mt-[1.5rem] md:mt-[2rem]">
                  <div className="flex flex-col w-full items-start rounded-xl gap-y-[1rem] md:gap-y-[1.3rem]">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaEnvelope
                        color="#fb2c36"
                        size={18}
                        className="mb-[0.2rem] flex-shrink-0"
                      />
                      <p className="text-[14px] md:text-[16px] break-all">
                        thiago.you23@gmail.com
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-2">
                      <FaMapMarkerAlt
                        color="#fb2c36"
                        size={18}
                        className="mb-[0.2rem] flex-shrink-0"
                      />
                      <p className="text-[14px] md:text-[16px]">
                        Fortaleza, Ceará - Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-[1.5rem] md:mt-[1.7rem] w-full">
                <h3 className="font-bold text-white text-[16px] md:text-[18px] text-start">
                  Social Media:
                </h3>

                <div className="flex flex-col sm:flex-row items-center w-full justify-between mt-[1rem] gap-3">
                  <div className="flex border-[0.1rem] border-white/80 w-full sm:w-[48.5%] rounded-xl px-[0.8rem] md:px-[1rem] py-[0.8rem] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                    <a
                      href="https://github.com/ImDevMota"
                      className="flex flex-row gap-x-[0.7rem] justify-start items-center"
                    >
                      <FaGithub
                        size={36}
                        color="#ffffff"
                        className="bg-white/6 py-[0.4rem] rounded-md flex-shrink-0"
                      />

                      <div className="flex flex-col items-start">
                        <p className="text-sm md:text-base">Github</p>
                        <p className="text-gray-400/90 text-xs md:text-sm">
                          @ImDevMota
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="flex border-[0.1rem] border-white/80 w-full sm:w-[48.5%] rounded-xl px-[0.8rem] md:px-[1rem] py-[0.8rem] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                    <a
                      className="flex flex-row gap-x-[0.7rem] justify-start items-center"
                      href="https://www.linkedin.com/in/thiago-mota-32332a268/"
                    >
                      <FaLinkedin
                        size={36}
                        color="#0A66C2"
                        className="bg-white/6 py-[0.4rem] rounded-md flex-shrink-0"
                      />

                      <div className="flex flex-col items-start">
                        <p className="text-sm md:text-base">Linkedin</p>
                        <p className="text-gray-400/90 text-xs md:text-sm">
                          Thiago Mota
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex items-center w-full justify-between mt-[0.8rem] md:mt-[1rem]">
                  <div className="flex flex-row border-[0.1rem] w-full border-white/80 rounded-xl px-[0.8rem] md:px-[1rem] py-[0.8rem] gap-x-[0.7rem] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                    <a
                      href="https://www.instagram.com/thiagou.mota?igsh=MW9ydG9kemg0cjFmeA%3D%3D&utm_source=qr"
                      className="flex flex-row gap-x-[0.7rem] justify-start items-center"
                    >
                      <FaInstagram
                        size={36}
                        color="#E1306C"
                        className="bg-white/6 py-[0.4rem] rounded-md flex-shrink-0"
                      />

                      <div className="flex flex-col items-start">
                        <p className="text-sm md:text-base">Instagram</p>
                        <p className="text-gray-400/90 text-xs md:text-sm">
                          @thiagou.mota
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
