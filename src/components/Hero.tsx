import { getDictionary } from "@/app/dictionaries";
import GradualSpacing from "./magicui/gradual-spacing";
import BlurIn from "./magicui/blur-in";
import "../app/globals.css";
import SpotifyListeningCard from "./SpotifyListeningCard";

export default function Hero({ params: { lang } } : any) {
    const dict = getDictionary(lang);
    return (
        <section className="space-y-2 lg:space-y-14 flex flex-col mt-4 lg:mt-12">

          <GradualSpacing text={dict.hero.title} className="text-left text-3xl font-bold tracking-[-0.2em] md:tracking-[-0.1em] text-black dark:text-white md:text-7xl leading-[5rem]" />
          <span className="text-left text-md md:text-xl tracking-tighter font-medium text-black dark:text-white opacity-0 animate-fade-in"> 
            {dict.hero.subtitle} 
          </span>   
        </section>
    );
}
