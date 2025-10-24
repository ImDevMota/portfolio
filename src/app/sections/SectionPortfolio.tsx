import BarEducation from "../_components/BarEducation";
import BarProjects from "../_components/BarProjects";
import NavbarProjects from "../_components/NavbarPortfolio";

export default function SectionPortfolio() {
  return (
    <section className="flex flex-col items-center font-montserrat justify-center mt-[25rem] mb-[10rem]">
      <NavbarProjects />

      <BarEducation />
    </section>
  );
}
