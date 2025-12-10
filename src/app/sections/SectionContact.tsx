"use client";

import CardContact from "../_components/CardComment";
import CardForm from "../_components/CardForm";
import ContactSwitcher from "../_components/ContactSwitcher";
import SubtitleContact from "../_components/SubtitleContact";
import TitleContact from "../_components/TitleContact";
import { useState } from "react";

export type ActiveCard = "contact" | "comment";

export default function SectionContact() {
  const [activeCard, setActiveCard] = useState<ActiveCard>("contact");

  return (
    <section className="flex items-center justify-center mt-[8rem] md:mt-[12rem] lg:mt-[15rem] px-4">
      <div className="w-[95%] md:w-[85%] lg:w-[70%]">
        <TitleContact />
        <SubtitleContact />

        <ContactSwitcher
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        {activeCard === "contact" && <CardForm />}
        {activeCard === "comment" && <CardContact />}
      </div>
    </section>
  );
}
