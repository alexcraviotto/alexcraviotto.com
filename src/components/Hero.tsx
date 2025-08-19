"use client";

import { getDictionary } from "@/app/dictionaries";
import GradualSpacing from "./magicui/gradual-spacing";
import BlurIn from "./magicui/blur-in";
import "../app/globals.css";
import SpotifyListeningCard from "./SpotifyListeningCard";
import FloatingElement from "./FloatingElement";
import { motion } from "framer-motion";

export default function Hero({ params: { lang } } : any) {
    const dict = getDictionary(lang);
    return (
        <section className="space-y-2 lg:space-y-14 flex flex-col mt-4 lg:mt-12 relative">
          {/* Floating decorative elements */}
          <FloatingElement duration={4} delay={0} className="absolute -top-10 -right-10 text-6xl opacity-20">
            🚀
          </FloatingElement>
          <FloatingElement duration={3.5} delay={1} className="absolute top-20 -left-10 text-4xl opacity-20">
            ⚡
          </FloatingElement>
          <FloatingElement duration={5} delay={2} className="absolute bottom-10 right-20 text-3xl opacity-20">
            💻
          </FloatingElement>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <GradualSpacing text={dict.hero.title} className="text-left text-3xl font-bold tracking-[-0.2em] md:tracking-[-0.1em] text-black dark:text-white md:text-7xl leading-[5rem]" />
          </motion.div>
          
          <motion.span 
            className="text-left text-md md:text-xl tracking-tighter font-medium text-black dark:text-white opacity-0 animate-fade-in relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          > 
            {dict.hero.subtitle} 
          </motion.span>   
        </section>
    );
}
