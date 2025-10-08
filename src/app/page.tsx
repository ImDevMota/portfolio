import Header from "./_components/Header";
import Hero from "./_components/Hero";
import TitleAbout from "./_components/TitleAbout";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <Header />

      <Hero />

      <TitleAbout />
    </main>
  );
}
