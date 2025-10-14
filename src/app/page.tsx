import Header from "./_components/Header";
import Hero from "./_components/Hero";
import TextAbout from "./_components/TextAbout";
import TitleAbout from "./_components/TitleAbout";
import SectionAbout from "./sections/SectionAbout";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <Header />

      <Hero />

      <SectionAbout />
    </main>
  );
}
