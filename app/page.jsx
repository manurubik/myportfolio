import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-20 gap-5">
          <div className="text-center lg:text-lef order-2 lg:order-none">
            <span className="text-xl">Desarrollo de Software</span>
            <h1 className="h1">
              Hola, soy
              <br />
              <span className="text-accent">Manuel Prieto</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Desarrollo de aplicaciones web y móviles enfocadas en la
              usabilidad y el rendimiento. <br />
              Creación de interfaces intuitivas y optimizadas para brindar
              experiencias fluidas y efectivas.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Link
                href="https://manurubik.github.io/myportfolio/ManuelPrieto_CV_Informatica.pdf"
                download="ManuelPrietoCV"
                type="application/pdf"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Descargar CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
