"use client";
import { useState } from "react";
import BarEducation from "../_components/BarEducation";
import BarProjects from "../_components/BarProjects";
import BarTechStacks from "../_components/BarTechStacks";
import NavbarProjects from "../_components/NavbarPortfolio";
import SubtitlePortfolio from "../_components/SubtitlePortfolio";
import TitlePortfolio from "../_components/TitlePortfolio";

export type ActiveBar = "projects" | "education" | "tech";

export default function SectionPortfolio() {
  const [activeBar, setActiveBar] = useState<ActiveBar>("projects");

  return (
    <section className="flex flex-col items-center font-montserrat justify-center mt-[25rem] mb-[10rem]">
      <TitlePortfolio />
      <SubtitlePortfolio />

      {/* Passa a função e o estado atual para o Navbar */}
      <NavbarProjects activeBar={activeBar} setActiveBar={setActiveBar} />

      {/* Renderiza a bar conforme o estado */}
      {activeBar === "projects" && <BarProjects />}
      {activeBar === "education" && <BarEducation />}
      {activeBar === "tech" && <BarTechStacks />}
    </section>
  );
}
