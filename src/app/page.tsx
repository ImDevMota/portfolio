import Header from "./_components/Header";
import Hero from "./_components/Hero";
import TextAbout from "./_components/TextAbout";
import TitleAbout from "./_components/TitleAbout";
import SectionAbout from "./sections/SectionAbout";
import SectionProjects from "./sections/SectionProjects";

export default function Home() {
  return (
    <main className="h-[350vh]">
      <Header />

      <Hero />

      <SectionAbout />

      <SectionProjects />
    </main>
  );
}
