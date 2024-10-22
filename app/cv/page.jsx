"use client";

import { useState } from "react";

import { experience } from "../data/cv/experience";
import { education } from "../data/cv/education";
import { skills } from "../data/cv/skills";
import { about } from "../data/cv/about";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { ScrollArea } from "../components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center mx-5 py-5 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <div className="flex flex-col w-2/5 mx-auto gap-5">
            <TabsList className="flex flex-col lg:mx-0 gap-6">
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              <TabsTrigger value="skills">Tecnologías</TabsTrigger>
              <TabsTrigger value="about">Sobre mi</TabsTrigger>
            </TabsList>
            <div className="flex flex-col w-full mx-auto max-lg:hidden pl-2">
              <TabsContent value="experience">
                {activeItem ? (
                  <div className="flex flex-col gap-5 text-center lg:text-left">
                    <h3 className="text-xl text-accent font-bold">
                      {activeItem.position}
                    </h3>
                    <p className="text-sm">{activeItem.desc}</p>
                    <ul className="list-disc">
                      {activeItem.roles &&
                        activeItem.roles.map((role, index) => (
                          <li
                            key={index}
                            className="text-white/60 text-sm whitespace-pre-line p-1"
                          >
                            {role}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-white/60 text-sm whitespace-pre-line">
                    Pasa el mouse sobre un elemento para más información.
                  </p>
                )}
              </TabsContent>
              <TabsContent value="education">
                {activeItem ? (
                  <div className="flex flex-col gap-5 text-center lg:text-left">
                    <h3 className="text-xl text-accent font-bold">
                      {activeItem.degree}
                    </h3>
                    <p className="text-sm">{activeItem.desc}</p>
                    <ul className="list-disc">
                      {activeItem.techs &&
                        activeItem.techs.map((tech, index) => {
                          return (
                            <li
                              key={index}
                              className="text-white/60 text-sm whitespace-pre-line p-1"
                            >
                              {tech}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                ) : (
                  <p className="text-white/60 text-sm whitespace-pre-line">
                    Pasa el mouse sobre un elemento para más información.
                  </p>
                )}
              </TabsContent>
              <TabsContent value="skills" className="flex flex-col">
                {Object.keys(skills.categories).map((category, index) => (
                  <li
                    key={index}
                    className={`text-4xl transition-all duration-300 list-none ${
                      activeItem === category
                        ? "text-accent"
                        : "text-transparent"
                    }`}
                  >
                    <p>{category}</p>
                  </li>
                ))}
              </TabsContent>
            </div>
          </div>

          <div className="w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] pr-5">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full py-5 bg-[#232329] rounded-lg flex flex-col justify-around items-center gap-1 border border-transparent hover:border-accent/40 min-h-[200px]"
                          onMouseEnter={() => handleMouseEnter(item)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] justify-center text-center">
                            {item.position}
                          </h3>
                          <div className="flex justify-center items-center gap-3 px-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent p-1"></span>
                            <p className="text-white/60 text-center text-sm">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] pr-5">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full p-5 bg-[#232329] rounded-lg flex flex-col justify-around items-center gap-2 border border-transparent hover:border-accent/40 min-h-[200px]"
                          onMouseEnter={() => handleMouseEnter(item)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] justify-center text-center">
                            {item.degree}
                          </h3>
                          <div className="flex justify-center items-center gap-3 px-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent p-1"></span>
                            <p className="text-white/60 text-center text-sm">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px] pr-5">
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(skills.categories).map(
                      ([category, skillList], index) =>
                        skillList.map((skill, skillIndex) => {
                          return (
                            <li key={`${index}-${skillIndex}`}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger
                                    className={`w-full h-[140px] bg-[#232329] rounded-lg flex justify-center items-center  
                                    ${
                                      activeItem === category
                                        ? "border-accent/40 border hover:text-accent"
                                        : ""
                                    }`}
                                    onMouseEnter={() => setActiveItem(category)}
                                    onMouseLeave={() => setActiveItem(null)}
                                  >
                                    <div className="text-7xl transition-all duration-500">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })
                    )}
                  </ul>
                </ScrollArea>
                <p className="text-2xl lg:hidden text-accent min-h-[35px]">
                  {activeItem}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 w-full mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-accent p-1"></span>
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="md:text-md xl:text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
