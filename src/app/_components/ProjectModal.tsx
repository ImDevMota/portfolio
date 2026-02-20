"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl border border-red-400/15 bg-[#111111] shadow-2xl shadow-red-900/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 transition-all duration-200 hover:bg-red-600/30 hover:text-white hover:border-red-500/40 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Project image */}
            <div className="relative w-full overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="px-6 md:px-8 pb-7 pt-2">
              {/* Title */}
              <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-white/75 text-justify">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="text-[13px] md:text-[14px] font-semibold text-white/50 uppercase tracking-wider mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-[12px] md:text-[13px] font-medium rounded-full border border-red-500/25 bg-red-500/8 text-red-300/90 backdrop-blur-sm transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/15 hover:text-red-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
