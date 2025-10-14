import ImageAbout from "../_components/ImageAbout";
import TextAbout from "../_components/TextAbout";
import TitleAbout from "../_components/TitleAbout";

export default function SectionAbout() {
  return (
    <section className="flex items-center justify-center mt-[25rem]">
      <div className="flex flex-col items-center justify-center w-[60%]">
        <TitleAbout />

        <div className="flex flex-row gap-x-[3rem]">
          <ImageAbout />
          <TextAbout />
        </div>
      </div>
    </section>
  );
}
