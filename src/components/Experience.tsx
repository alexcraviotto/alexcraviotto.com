import { getDictionary } from "@/app/dictionaries";
import Section from "./Section";

export default function Experience({ params: { lang } }: any) {
  const dict = getDictionary(lang);
  
  return (
    <section className="space-y-6 lg:space-y-12 animate-fade-in">
      <Section title={dict.experience.title + " 🛠️"} description={dict.experience.subtitle} />
      <div className="space-y-6">
        {dict.experience.list.map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg shadow-md dark:border-white/30">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.company} - {item.location}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
