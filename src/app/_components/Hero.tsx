import TextWriter from "./TextWriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-row w-[60%]  items-center justify-between mt-[10rem]">
        <div>
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold mb-4">
              I'm <span className="text-red-600">Mota</span>
              <br /> Developer
            </h1>

            <TextWriter />

            <p className="text-xl font-inter font-[100] mt-[1.3rem]">
              Transforming ideas into websites, automations and intelligent{" "}
              <br />
              digital solutions.
            </p>
          </div>

          <div className="flex flex-row gap-x-2 mt-[1.8rem]">
            <a
              href="#"
              className="py-2 px-11 rounded-md bg-gradient-to-r flex flex-row gap-x-2 items-center from-red-600 to-red-950"
            >
              Projects
              <FaCode />
            </a>
            <a
              href="#"
              className="py-2 px-11 rounded-md border-1 border-red-950 flex flex-row gap-x-2 items-center"
            >
              Contact
              <FaEnvelope />
            </a>
          </div>

          <div className="flex flex-row gap-4 bg-[#0a0a0a] mt-[1.7rem] rounded-2xl w-fit">
            {/* GitHub */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
              <button className="relative flex items-center gap-2 px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                <a href="#">
                  <FaGithub />
                </a>
                GitHub
              </button>
            </div>

            {/* Instagram */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
              <button className="relative flex items-center gap-2 px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                <a href="#">
                  <FaInstagram />
                </a>
                Instagram
              </button>
            </div>

            {/* WhatsApp */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
              <button className="relative flex items-center gap-2 px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                <a href="#">
                  <FaLinkedin />
                </a>
                Linkedin
              </button>
            </div>
          </div>
        </div>

        <img
          src="./perfil.jpg"
          alt=""
          className="w-[400px] h-[400px] rounded-full"
        />
      </div>
    </section>
  );
}
