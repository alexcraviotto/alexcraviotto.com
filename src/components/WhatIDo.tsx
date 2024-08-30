import { getDictionary } from "@/app/dictionaries";
import Section from "./Section";

export default function WhatIDo({ params: { lang } } : any) {
    const dict = getDictionary(lang);
    return (
        <section className="space-y-12 lg:space-y-24 animate-fade-in">
          <Section title={dict.whatido.title} description={dict.whatido.subtitle}  />
        </section>
    );
  }
