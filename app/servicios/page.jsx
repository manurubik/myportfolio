"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    description:
      "Desarrollo de aplicaciones web dinámicas y funcionales, optimizando la experiencia del usuario y el rendimiento del sitio",
  },
  {
    num: "02",
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces intuitivas y atractivas, enfocadas en mejorar la experiencia del usuario y la usabilidad del producto.",
  },
  {
    num: "03",
    title: "Diseño de Logotipos",
    description:
      "Creación de logos creativos y personalizados que reflejan la identidad y valores de la marca.",
  },
  {
    num: "04",
    title: "Aplicaciones Android",
    description:
      "Implementación de aplicaciones Android innovadoras y funcionales, centradas en la usabilidad y la interacción del usuario.",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center mx-5 py-12 lg:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={`/contacto?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/28 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
