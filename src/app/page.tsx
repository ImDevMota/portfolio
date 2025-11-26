import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import TextAbout from "./_components/TextAbout";
import TitleAbout from "./_components/TitleAbout";
import SectionAbout from "./sections/SectionAbout";
import SectionContact from "./sections/SectionContact";
import SectionPortfolio from "./sections/SectionPortfolio";

export default function Home() {
  return (
    <main className="">
      <Header />

      <Hero />

      <SectionAbout />

      <SectionPortfolio />

      <SectionContact />

      <Footer />
    </main>
  );
}
