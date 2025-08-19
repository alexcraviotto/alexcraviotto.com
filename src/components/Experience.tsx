import { getDictionary } from "@/app/dictionaries";
import Section from "./Section";
import { motion } from "framer-motion";
import { BsCalendar } from "react-icons/bs";

export default function Experience({ params: { lang } }: any) {
  const dict = getDictionary(lang);
  
  return (
    <section className="space-y-6 lg:space-y-12 animate-fade-in">
      <Section title={dict.experience.title + " 🛠️"} description={dict.experience.subtitle} />
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-violet-600/20 dark:via-purple-600/20 dark:to-fuchsia-600/20"></div>

        <div className="space-y-0">
          {dict.experience.list.map((item: any, index: number) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="relative pl-16 pb-12 group"
            >
              <div className="absolute left-[14px] top-0 w-4 h-4 rounded-full 
                bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30 
                dark:from-violet-600/30 dark:via-purple-600/30 dark:to-fuchsia-600/30
                ring-4 ring-white dark:ring-gray-900 
                transition-all duration-300 
                group-hover:scale-125"></div>
              
              <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 
                           bg-white dark:bg-transparent 
                           dark:border-gray-800 dark:hover:border-gray-700 hover:animate-glow group-hover:scale-[1.02]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                        <BsCalendar className="inline animate-pulse-glow" />
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-700 dark:text-gray-200">
                  {item.description}
                </p>
                
                {item.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-transparent 
                                 text-gray-800 dark:text-gray-300 rounded-full border dark:border-gray-800
                                 hover:bg-gray-200 dark:hover:border-gray-700 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
