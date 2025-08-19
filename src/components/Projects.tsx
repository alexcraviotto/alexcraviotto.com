"use client";

import React from 'react';
import Image from 'next/image';
import { getDictionary } from "@/app/dictionaries";
import Section from './Section';
import { Button } from './ui/button';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Projects({ params: { lang } } : any) {
  const dict = getDictionary(lang);

  return (
    <section className="w-full animate-fade-in ">
      <Section title={dict.projects.title} description={dict.projects.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {dict.projects.list.map((project: any, index: number) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu perspective-1000 group bg-white dark:bg-gray-900/50 backdrop-blur-sm"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={500} 
                  height={300} 
                  className="w-full h-48 object-cover !opacity-100 group-hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 relative">
              <motion.h3 
                className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>
              <p className="opacity-80 mb-4 tracking-tight group-hover:opacity-100 transition-opacity duration-300">
                {project.description}
              </p>
              {project.link && (
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dict.projects.viewProject}
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.a>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button variant={"outline"} className="w-full mt-12 space-x-2 dark:bg-[#2e2d2b] transition hover:-translate-y-1 dark:text-white bg-white text-black hover:shadow-lg" >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <SiGithub /> 
          </motion.div>
          <a className="font-bold tracking-tight " href="https://github.com/alexcraviotto" target="_noblank">
          {dict.projects.viewAllProjects}
          </a>
        </Button>
      </motion.div>


    </section>
  );
};

