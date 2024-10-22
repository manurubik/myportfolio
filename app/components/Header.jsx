import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  const texto = `Hola!
Quiero trabajar contigo :D`;
  return (
    <header className="mx-5 py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Manuel<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href={`/contacto?message=${encodeURIComponent(texto)}`}>
            <Button size="md">Contrátame</Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
