import BarProjects from "../_components/BarProjects";
import NavbarProjects from "../_components/NavbarProjects";

export default function SectionProjects() {
  return (
    <section className="flex flex-col items-center justify-center mt-[25rem] mb-[10rem]">
      <NavbarProjects />

      <BarProjects />
    </section>
  );
}
