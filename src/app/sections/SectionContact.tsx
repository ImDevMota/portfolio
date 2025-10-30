import CardForm from "../_components/CardForm";
import SubtitleContact from "../_components/SubtitleContact";
import TitleContact from "../_components/TitleContact";

export default function SectionContact() {
  return (
    <section className="flex items-center justify-center mt-[15rem]">
      <div className="w-[70%]">
        <TitleContact />
        <SubtitleContact />

        <CardForm />
      </div>
    </section>
  );
}
