import BarEducation from "../_components/BarEducation";
import BarProjects from "../_components/BarProjects";
import BarTechStacks from "../_components/BarTechStacks";
import NavbarProjects from "../_components/NavbarPortfolio";
import SubtitlePortfolio from "../_components/SubtitlePortfolio";
import TitlePortfolio from "../_components/TitlePortfolio";

export default function SectionPortfolio() {
  return (
    <section className="flex flex-col items-center font-montserrat justify-center mt-[25rem] mb-[10rem]">
      <TitlePortfolio />
      <SubtitlePortfolio />

      <NavbarProjects />

      {/* <BarProjects /> */}
      {/* <BarEducation /> */}
      <BarTechStacks />
    </section>
  );
}
