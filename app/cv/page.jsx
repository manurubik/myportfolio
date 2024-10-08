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
  SiOracle,
  SiFirebase,
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
  SiFontawesome,
} from "react-icons/si";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi experiencia",
  description:
    "A pesar de no contar con experiencia como programador, he desarrollado habilidades en comunicación, trabajo en equipo y atención al cliente. Estas experiencias me han enseñado la importancia de entender las necesidades del cliente, lo que es esencial en el desarrollo de software.",
  items: [
    {
      company: "CEIP La Senda & AES",
      position: "Instructor de talleres",
      duration: "Junio 2024",
      desc: "Taller sobre el Cubo de Rubik hecho a niños/as de entre 6 y 13 años en colaboración con la Asociación Española de Speedcubing (AES).",
      roles: [
        "Encargado de enseñanza de habilidades.",
        "Desarrollo de planes de estudio para diferentes grupos.",
      ],
    },
    {
      company: "WCA, AES & AMS",
      position: "Co-Organizador de eventos",
      duration: "Mayo 2024",
      desc: "Co-organización del campeonato de speedcubing 'Móstoles Open 2024', evento deportivo del 'Cubo de Rubik' con más de 100 participantes y varios competidores internacionales de élite",
      roles: [
        "Coordinación de actividades y gestión de inscripciones.",
        "Supervisión del evento y asistencia a los participantes.",
      ],
    },
    {
      company: "Japan Weekend 2024 & AMS",
      position: 'Colaborador en "stand" informativo',
      duration: "Feb & Sept 2024",
      desc: "Exhibición y atención al cliente en puesto informativo de la AMS (Asociación Madrileña de Speedcubing) durante los eventos de 'Japan Weekend 2024' en febrero y septiembre",
      roles: [
        "Atención al cliente y distribución de materiales informativos.",
        "Proporcionar información sobre actividades y eventos.",
      ],
    },
    {
      company: "Bar El Chiringuito",
      position: "Camarero de bar",
      duration: "Verano 2023",
      desc: "Bar & Restaurante",
      roles: [
        "Mantenimiento, limpieza y organización del área del bar.",
        "Preparación y servicio de bebidas de manera eficiente.",
        "Habilidades de trabajo en equipo para mantener un servicio de calidad en un entorno dinámico y cambiante.",
        "Servicio de alimentos y bebidas.",
        "Colaboración en la organización de eventos dentro del bar.",
      ],
    },
    {
      company: "Bar Modus Vivendi",
      position: "Camarero de bar",
      duration: "Verano 2021",
      desc: "Barra & Terraza",
      roles: [
        "Toma de pedidos, preparación y servicio de bebidas.",
        "Mantenimiento y limpieza del área del bar garantizando un ambiente acogedor.",
        "Gestión de pedidos, interacción con los clientes para asegurar su satisfacción y colaboración con el equipo para mantener un servicio eficiente y de alta calidad.",
        "Atención al cliente y manejo de caja.",
      ],
    },
    {
      company: "Asociación El Despertar",
      position: "Auxiliar de ventas",
      duration: "Nov & Dic 2014 - 2017",
      desc: "Voluntariado realizado en el 'Mercadillo Benéfico Navideño' durante los meses de noviembre y diciembre entre los años 2014 y 2017.",
      roles: [
        "Facilitar transacciones comerciales.",
        "Gestión del proceso de pago, manejo de efectivo y transacciones electrónicas. ",
        "Servicio al cliente amable y eficaz. Aportación a la experiencia positiva para los clientes.",
        "Asistencia en ventas y gestión de inventario.",
      ],
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
      desc: "ft. 'BBDDs' (==>)",
      techs: [
        "Construcción de interfaces de usuario (UI) reactivas en aplicaciones web mediante React, componentes reutilizables, gestión de estado y aplicación e integración de APIs externas. ",
        "Principios fundamentales de React Native, creación de aplicaciones móviles multiplataforma aprovechando un código base",
      ],
    },
    {
      institution: "Universidad Politécnica de Madrid & MiriadaX",
      degree:
        "Bases de Datos Relacionales y No Relacionales; conceptos, diseño y aplicacion a entornos web",
      duration: "Sept 2023 - Feb 2024",
      desc: "ft. 'Desarrollo React' (<==)",
      techs: [
        "Diseño y aplicación de bases de datos en entornos web. ",
        "RDBMS, modelación de datos, diseño de esquemas y lenguaje SQL.",
        "BBDD NoSQL y JSON SCHEMA. MongoDB, MongoShell y Mongoose.",
      ],
    },
    {
      institution: "Universidad Politécnica de Madrid & MiriadaX",
      degree: "Itinerario Desarrollo Web Fullstack con JavaScript y Node.js",
      duration: "Sept 2022 - Sept 2023",
      desc: "CUÁDRUPLE titulación:",
      techs: [
        "Desarrollo Frontend con HTML, CSS y Javascript",
        "Gestión de proyectos Software con Git y GitHub",
        "Desarrollo Backend con Node.js, Express y BBDDs",
        "Desarrollo de un Proyecto Fullstack con JavaScript",
      ],
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Administrativo",
      duration: "Ene - Jun 2023",
      desc: "ft. 'Ofimática'",
      techs: [
        "Gestión eficiente de documentos y aplicación de software administrativo.",
        "Comunicación efectiva en entornos empresariales, coordinación de tareas y toma de decisiones informada",
      ],
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Ofimática",
      duration: "Ene - Jun 2023",
      desc: "ft. 'Administrativo'",
      techs: [
        "Dominio de la herramienta Microsoft Office, abarcando el procesamiento de textos (Word), hojas de cálculo (Excel), presentaciones (PowerPoint) y gestión de bases de datos (Access).",
        "Técnicas avanzadas para organizar y analizar datos, automatizar tareas y optimizar la productividad en general.",
      ],
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Desarrollo de aplicaciones Android",
      duration: "Feb - Ago 2022",
      desc: "ft. 'Java'",
      techs: [
        "Desarrollo de interfaces de usuario (UI) intuitivas, manejo de actividades y fragmentos, persistencia de datos, integración de servicios web y uso de APIs.",
        "Manejo de hilos, notificaciones y la optimización del rendimiento de las aplicaciones Android",
        "Entorno Android Studio con Firebase. Uso de KOTLIN",
      ],
    },
    {
      institution: "Universidad Antonio de Nebrija & Euroinnova",
      degree: "Java",
      duration: "Feb - Ago 2022",
      desc: "ft. 'Desarrollo Android'",
      techs: [
        "Sintaxis de Java, Data Structures, OOP, manejo de excepciones y la creación de aplicaciones Java. Desarrollo de aplicaciones web utilizando tecnologías como Servlets y JSP",
        "Entornos NetBeans y VS Code con Oracle Database",
      ],
    },
    {
      institution: "Universidad Antonio de Nebrija & INESEM",
      degree: "Bolsa y mercados financieros",
      duration: "Ene 2020 - Jun 2021",
      desc: "Conceptos fundamentales del trading y la inversión en mercados bursátiles.",
      techs: [
        "Evaluación de riesgos, análisis técnico y fundamental, estrategias de inversión e instrumentos financieros.",
        "Gestión de carteras, diversificación y toma de decisiones informadas en el contexto de inversiones",
      ],
    },
    {
      institution: "Universidad Complutense de Madrid",
      degree: "Grado en Ingeniería de Software (1º Curso)",
      duration: "2019 - 2020",
      desc: "1º Curso",
      techs: [
        "Estructuras de datos, algoritmos, OOP y metodologías de desarrollo de software.",
        "Ciclo de vida del software, conceptos de diseño y patrones de programación.",
        "Entorno Visual Studio IDE. Uso de C++",
      ],
    },
    {
      institution: "Gamo Diana",
      degree: "Bachillerato (Ciencias tecnológicas)",
      duration: "2017 - 2019",
      desc: "Nota media: 7",
      techs: ["Rama de Dibujo Técnico y TIC"],
    },
  ],
};

const skills = {
  title: "Mis tecnologías",
  description:
    "Soy un apasionado desarrollador con un sólido conocimiento en diversas tecnologías y herramientas. Siempre busco optimizar mis procesos de trabajo y aprender nuevas técnicas que me permitan mejorar la calidad de mis proyectos. Estoy listo para aplicar mis habilidades técnicas y contribuir a soluciones innovadoras en entornos colaborativos.",
  categories: {
    "Lenguajes de Marcado": [
      { icon: <FaHtml5 />, name: "HTML 5" },
      { icon: <SiPug />, name: "Pug" },
      { icon: <SiMarkdown />, name: "MarkDown" },
    ],
    Estilos: [
      { icon: <FaCss3 />, name: "CSS 3" },
      { icon: <SiSass />, name: "SASS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiFontawesome />, name: "Fontawesome" },
    ],
    Scripts: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiJquery />, name: "jQuery" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
    "GUIs & Android": [
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiKotlin />, name: "Kotlin" },
    ],
    "Bases de Datos": [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiSqlite />, name: "SQLite" },
      { icon: <SiMongodb />, name: "Mongo DB" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiOracle />, name: "Oracle Database" },
    ],
    Desarrollo: [
      { icon: <FaGulp />, name: "Gulp" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <FaNpm />, name: "Npm" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiLighthouse />, name: "Google Lighthouse" },
      { icon: <FaGit />, name: "Git" },
    ],
    Herramientas: [
      { icon: <FaGithub />, name: "Github" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaWordpress />, name: "Wordpress" },
      { icon: <SiVisualstudiocode />, name: "VS Code" },
    ],
  },
};

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
                          className="w-full py-5 bg-[#232329] rounded-lg flex flex-col justify-around items-center gap-1 border border-transparent hover:border-accent/40"
                          onMouseEnter={() => handleMouseEnter(item)}
                          onMouseLeave={handleMouseLeave}
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
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full p-5 bg-[#232329] rounded-lg flex flex-col justify-around items-center gap-2 border border-transparent hover:border-accent/40"
                          onMouseEnter={() => handleMouseEnter(item)}
                          onMouseLeave={handleMouseLeave}
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
                    {Object.entries(skills.categories).map(
                      ([category, skillList], index) =>
                        skillList.map((skill, skillIndex) => {
                          return (
                            <li key={`${index}-${skillIndex}`}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger
                                    className={`w-full h-[150px] bg-[#232329] rounded-lg flex justify-center items-center  
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
