"use client";

import { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaWordpress,
  FaGulp,
  FaNpm,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPug,
  SiTypescript,
  SiSqlite,
  SiBootstrap,
  SiJquery,
  SiVite,
  SiLighthouse,
  SiKotlin,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiSass,
  SiMarkdown,
  SiVisualstudiocode,
} from "react-icons/si";

const about = {
  title: "Sobre mi",
  description:
    "Hola! Soy Manuel, un desarrollador especializado en aplicaciones web y Android con habilidades en tecnologías como MERN Stack, Kotlin o WordPress entre otras. Mi enfoque apasionado hacia la resolución de problemas y mi compromiso constante con el aprendizaje me han permitido desarrollar habilidades valiosas en diversos campos.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Manuel Prieto",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+34) 629 14 80 27",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ years",
    },
    {
      fieldName: "Github",
      fieldValue: "@manurubik",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Spanish",
    },
    {
      fieldName: "Email",
      fieldValue: "manuelprietodeanton@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi experiencia",
  description:
    "A pesar de no contar con experiencia como programador, he desarrollado habilidades en comunicación, trabajo en equipo y atención al cliente. Estas experiencias me han enseñado la importancia de entender las necesidades del cliente, lo que es esencial en el desarrollo de software.",
  items: [
    {
      company: "CEIP La Senda",
      position: "Instructor de talleres",
      duration: "Junio 2024",
    },
    {
      company: "WCA, AES y AMS",
      position: "Co-Organizador de evento deportivo",
      duration: "Mayo 2024",
    },
    {
      company: "Japan Weekend 2024 & AMS",
      position: 'Colaborador en "stand" informativo',
      duration: "Feb & Sept 2024",
    },
    {
      company: "Bar El Chiringuito",
      position: "Camarero de bar",
      duration: "Verano 2023",
    },
    {
      company: "Bar Modus Vivendi",
      position: "Camarero de bar",
      duration: "Verano 2021",
    },
    {
      company: "Asociación El Despertar",
      position: "Auxiliar de ventas",
      duration: "Nov & Dic 2014 - 2017",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi educación",
  description:
    "Estoy abierto a nuevas oportunidades donde pueda colaborar con equipos dinámicos, aplicar mis habilidades y continuar desarrollándome profesionalmente. Si buscas a alguien con pasión por la tecnología y conocimientos en el ámbito financiero, me encantaría conectar. ¡Espero con entusiasmo la posibilidad de aportar valor a tu organización!",
  items: [
    {
      institution: "Universidad Politécnica de Madrid & MiriadaX",
      degree: "Desarrollo de aplicaciones con React y React Native",
      duration: "Sept 2023 - Feb 2024",
    },
    {
      institution: "Universidad Politécnica de Madrid & MiriadaX",
      degree:
        "Bases de Datos Relacionales y No Relacionales; conceptos, diseño y aplicacion a entornos web",
      duration: "Sept 2023 - Feb 2024",
    },
    {
      institution: "Universidad Politécnica de Madrid & MiriadaX",
      degree: "Itinerario Desarrollo Web Fullstack con JavaScript y Node.js",
      duration: "Sept 2022 - Sept 2023",
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Administrativo",
      duration: "Ene - Jun 2023",
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Ofimática",
      duration: "Ene - Jun 2023",
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Desarrollo de alpicaciones Android",
      duration: "Feb - Ago 2022",
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Java",
      duration: "Feb - Ago 2022",
    },
    {
      institution: "Universidad Antonio de Nebrija & INESEM",
      degree: "Bolsa y mercados financieros",
      duration: "Ene 2020 - Jun 2021",
    },
    {
      institution: "Universidad Complutense de Madrid",
      degree: "Grado en Ingeniería de Software (1º Curso)",
      duration: "2019 - 2020",
    },
    {
      institution: "Gamo Diana",
      degree: "Bachillerato (Ciencias tecnológicas)",
      duration: "2017 - 2019",
    },
  ],
};

const skills = {
  title: "Mis tecnologías",
  description:
    "Soy un apasionado desarrollador con un sólido conocimiento en diversas tecnologías y herramientas. Siempre busco optimizar mis procesos de trabajo y aprender nuevas técnicas que me permitan mejorar la calidad de mis proyectos. Estoy listo para aplicar mis habilidades técnicas y contribuir a soluciones innovadoras en entornos colaborativos.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      category: "Lenguajes de Marcado",
    },
    {
      icon: <SiPug />,
      name: "Pug",
      category: "Lenguajes de Marcado",
    },
    {
      icon: <SiMarkdown />,
      name: "MarkDown",
      category: "Lenguajes de Marcado",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      category: "Estilos",
    },
    {
      icon: <SiSass />,
      name: "SASS",
      category: "Estilos",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
      category: "Estilos",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      category: "Estilos",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      category: "Scripts",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      category: "Scripts",
    },
    {
      icon: <FaReact />,
      name: "React.js & React Native",
      category: "Scripts",
    },
    {
      icon: <SiJquery />,
      name: "jQuery",
      category: "Scripts",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      category: "Scripts",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      category: "Scripts",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      category: "Scripts",
    },
    {
      icon: <FaJava />,
      name: "Java",
      category: "GUIs & Android",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
      category: "GUIs & Android",
    },

    {
      icon: <SiMysql />,
      name: "MySQL",
      category: "Bases de Datos",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite",
      category: "Bases de Datos",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
      category: "Bases de Datos",
    },
    {
      icon: <FaGulp />,
      name: "Gulp",
      category: "Desarrollo",
    },
    {
      icon: <SiVite />,
      name: "Vite",
      category: "Desarrollo",
    },
    {
      icon: <FaNpm />,
      name: "npm",
      category: "Desarrollo",
    },
    {
      icon: <FaGit />,
      name: "Git",
      category: "Desarrollo",
    },
    {
      icon: <SiLighthouse />,
      name: "Google Lighthouse",
      category: "Desarrollo",
    },
    {
      icon: <FaGithub />,
      name: "Github",
      category: "Herramientas",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      category: "Herramientas",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
      category: "Herramientas",
    },
    {
      icon: <SiVisualstudiocode />,
      name: "VS Code",
      category: "Herramientas",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
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
          <div className="flex flex-col gap-10">
            <TabsList className="flex flex-col w-full lg:min-w-[300px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              <TabsTrigger value="skills">Tecnologías</TabsTrigger>
              <TabsTrigger value="about">Sobre mi</TabsTrigger>
            </TabsList>
            <TabsContent
              value="skills"
              className="flex flex-col w-full mx-auto max-lg:hidden"
            >
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "Lenguajes de Marcado"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                Lenguajes de marcado
              </p>
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "Estilos"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                Estilos
              </p>
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "Scripts"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                Scripts
              </p>
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "GUIs & Android"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                GUIs & Android
              </p>
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "Bases de Datos"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                Bases de Datos
              </p>
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "Desarrollo"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                Desarrollo
              </p>
              <p
                className={`text-4xl transition-all duration-300 ${
                  activeCategory === "Herramientas"
                    ? "text-accent"
                    : "text-transparent"
                }`}
              >
                Herramientas
              </p>
            </TabsContent>
          </div>

          <div className="w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] pr-5">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-5 rounded-lg flex flex-col justify-between items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] justify-center text-center">
                            {item.position}
                          </h3>
                          <div className="flex justify-center items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
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
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-5 rounded-lg flex flex-col justify-between items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] justify-center text-center">
                            {item.degree}
                          </h3>
                          <div className="flex justify-center items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent p-1"></span>
                            <p className="text-white/60 text-sm">
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
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className={`w-full h-[150px] bg-[#232329] rounded-lg flex justify-center items-center group 
                        ${
                          activeCategory === skill.category
                            ? "border-accent/40 border hover:text-accent"
                            : "hover:border hover:border-accent group-hover:text-accent"
                        }
                        `}
                                onMouseEnter={() =>
                                  handleMouseEnter(skill.category)
                                }
                                onMouseLeave={handleMouseLeave}
                              >
                                <div className="text-7xl transition-all duration-500">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                <p className="text-2xl lg:hidden text-accent min-h-[35px]">
                  {activeCategory}
                </p>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 w-full mx-auto xl:mx-0 ">
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
