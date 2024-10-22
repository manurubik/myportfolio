const Footer = () => {
  return (
    <footer className=" text-white py-5 border-t border-t-accent">
      <div className="container mx-auto px-4">
        <p className="text-center lg:text-right text-sm">
          &copy; {new Date().getFullYear()} Manuel Prieto
        </p>
      </div>
    </footer>
  );
};

export default Footer;
