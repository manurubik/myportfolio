"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedinIn,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+34) 629 14 80 27",
    link: "tel:+34629148027",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "manuelprietodeanton@gmail.com",
    link: "mailto:manuelprietodeanton@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "28024, Madrid",
    link: "https://maps.app.goo.gl/2A1ZBhbPc2bzBdM99",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    description: "linkedin.com/in/manuelprietodeanton",
    link: "https://www.linkedin.com/in/manuelprietodeanton",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Contact = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const mensaje = searchParams.get("message");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: service || "",
    message:
      mensaje ||
      (service
        ? `Hola!
Me interesan tus conocimientos en "${service}"!!`
        : ""),
  });

  useEffect(() => {
    if (service || mensaje) {
      setFormData((prevData) => ({
        ...prevData,
        service: service || prevData.service,
        message:
          mensaje ||
          (service
            ? `Hola!
Me interesan tus conocimientos en "${service}"!!`
            : prevData.message),
      }));
    }
  }, [service, mensaje]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:manuelprietodeanton@gmail.com?subject=${encodeURIComponent(
      formData.service
    )}&body=Nombre:%20${encodeURIComponent(
      formData.firstname
    )}%20${encodeURIComponent(
      formData.lastname
    )}%0AEmail:%20${encodeURIComponent(
      formData.email
    )}%0ATeléfono:%20${encodeURIComponent(
      formData.phone
    )}%0A%0A${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Suspense>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="m-5"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="order-2 lg:order-none">
              <form
                className="flex flex-col gap-6 p-6 bg-[#27272c] rounded-lg justify-center items-center"
                onSubmit={sendMessage}
              >
                <h3 className="text-4xl text-accent">Contacta conmigo</h3>
                <p className="text-white/60">
                  Si deseas discutir un proyecto, colaborar en algo interesante
                  o simplemente conectar, no dudes en ponerte en contacto
                  conmigo. Estoy aquí para ayudarte y explorar cómo podemos
                  trabajar juntos para lograr grandes resultados.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Nombre"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Apellidos"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="(Email)"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(Nº de telefono)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <Select
                  value={formData.service}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecciona un servicio</SelectLabel>
                      <SelectItem value="Desarrollo Web">
                        Desarrollo Web
                      </SelectItem>
                      <SelectItem value="Diseño UI/UX">Diseño UI/UX</SelectItem>
                      <SelectItem value="Diseño de Logotipos">
                        Diseño de Logotipos
                      </SelectItem>
                      <SelectItem value="Aplicaciones Android">
                        Aplicaciones Android
                      </SelectItem>
                      <SelectItem value="Otros">Otros</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[130px]"
                  name="message"
                  placeholder="Escribe aquí tu mensaje."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button size="md" className="max-w-40" type="submit">
                  Enviar mensaje
                </Button>
              </form>
            </div>
            <div className="flex items-center order-1 lg:order-none mb-8 lg:mb-0 max-lg:text-center max-lg:justify-center lg:w-1/2">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <Link href={item.link} target="_blank" key={index}>
                      <li className="flex items-center gap-6 group">
                        <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center group-hover:border group-hover:border-accent">
                          <div className="text-3xl group-hover:scale-150 max-lg:group-hover:scale-125 transition-all">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl group-hover:text-accent">
                            {item.description}
                          </h3>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </Suspense>
  );
};

export default Contact;
