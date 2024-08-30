import React from 'react';
import Image from 'next/image';
import { getDictionary } from "@/app/dictionaries";
import Section from './Section';
import { Button } from './ui/button';
import { SiGithub } from 'react-icons/si';

export default function Projects({ params: { lang } } : any) {
  const dict = getDictionary(lang);

  return (
    <section className="w-full animate-fade-in ">
      <Section title={dict.projects.title} description={dict.projects.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {dict.projects.list.map((project: any, index: number) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover !opacity-100"
            />
            <div className="p-4" >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="opacity-80 mb-4 tracking-tight">{project.description}</p>
             
            </div>

          </div>
        ))}
      </div>
      <Button variant={"outline"} className="w-full mt-12 space-x-2 dark:bg-[#2e2d2b] transition hover:-translate-y-1 dark:text-white bg-white text-black" >
        <SiGithub /> 
        <a className="font-bold tracking-tight " href="https://github.com/alexcraviotto" target="_noblank">
        {dict.projects.viewAllProjects}
        </a>
     </Button>


    </section>
  );
};

