"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    image: "./saas.png",
    title: "SaaS - Sports Court Scheduling",
    shortDescription:
      "A complete SaaS platform for scheduling and managing sports courts with real-time availability.",
    description:
      "A complete SaaS platform designed for scheduling and managing sports courts. The system features real-time court availability, online booking with payment integration, user management with different access levels, automated notifications, and a comprehensive admin dashboard for court owners. Built with scalability in mind, supporting multiple venues and sport types.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
  },
  {
    image: "./e-commerce.png",
    title: "E-commerce - Variedades do Coco",
    shortDescription:
      "A full-featured e-commerce store for coconut-based products with payment processing.",
    description:
      "A full-featured e-commerce platform built for Variedades do Coco, a store specializing in coconut-based products. Includes product catalog with categories and filters, shopping cart with persistent state, secure checkout with Stripe payment integration, order tracking, inventory management, and a responsive design optimized for mobile-first shopping experiences.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  },
  {
    image: "./lp-tipminer.png",
    title: "Landing Page - Tip Miner",
    shortDescription:
      "A modern, high-conversion landing page for the Tip Miner platform.",
    description:
      "A modern, high-conversion landing page developed for the Tip Miner platform. Features smooth scroll animations, responsive design across all devices, optimized performance with lazy loading, engaging call-to-action sections, testimonial carousels, and SEO-optimized structure. Focused on delivering an impactful first impression and maximizing user engagement.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

export default function BarProjects() {
  const visible = useScrollReveal(1612, 1986, 1150, 1500);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="flex flex-col mt-[2.5rem] items-center justify-center w-[95%] md:w-[90%] lg:w-[80%]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          visible
            ? {
                opacity: 1,
                transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
              }
            : {
                opacity: 0,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="text-center w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-2xl rounded-lg shadow-lg border border-red-400/10 h-full flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg w-full"
              />

              <div className="bg-white/2 rounded-b-lg backdrop-blur-xl shadow-lg px-5 md:px-7 py-5 flex-1 flex flex-col">
                <p className="font-bold bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent text-[18px] md:text-[20px] lg:text-[22px] text-start">
                  {project.title}
                </p>

                <p className="text-justify mt-[0.8rem] text-[15px] md:text-[16px] lg:text-[17px] flex-1">
                  {project.shortDescription}
                </p>

                <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                  <a
                    href="#"
                    className="py-[0.5rem] w-full text-sm font-semibold rounded-lg bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-center"
                  >
                    View Project
                  </a>

                  <button
                    onClick={() => setSelectedProject(index)}
                    className="relative inline-flex items-center font-semibold justify-center w-full py-[0.5rem] rounded-lg text-sm
                    text-red-400 border border-red-600/70 transition-all duration-300
                    hover:text-red-300 hover:border-red-500/80
                    bg-transparent overflow-visible cursor-pointer
                    after:absolute after:inset-0 after:rounded-lg after:content-[''] after:pointer-events-none
                    hover:after:shadow-[0_0_8px_4px_rgba(239,68,68,0.2)]"
                  >
                    <span className="bg-gradient-to-r from-red-700 to-[#a03030] bg-clip-text text-transparent">
                      Detail
                    </span>
                  </button>
                </div>

                <a href="#"></a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject !== null ? projects[selectedProject] : null}
      />
    </section>
  );
}
