'use client'

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Separator } from "@/components/ui/separator";
import WhatIDo from "@/components/WhatIDo";

export default function Home({ params: { lang } } : any) {
  
    return (
        <section className="space-y-12 lg:space-y-15 items-center  flex flex-col p-4 md:p-0">
          <Hero params={{ lang }} />
          <WhatIDo params={{ lang }} />
          <Experience params={{ lang }} />
          <Projects params={{ lang }} />
          <Separator />
          <p className="font-bold opacity-75 items-center justify-center flex">craviotto.</p>
          </section>
    );
  }