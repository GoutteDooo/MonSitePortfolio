const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-subtle">
              © {new Date().getFullYear()} Donovan Goudal. Tous droits réservés.
            </p>
            <p className="text-subtle text-xs">
              Icônes par{" "}
              <a href="https://www.flaticon.com/authors/rashad" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">Rashad</a>
              {" "}et{" "}
              <a href="https://www.flaticon.com/authors/pod-gladiator" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">POD Gladiator</a>
              {" "}via{" "}
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">Flaticon</a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/GoutteDooo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/donovan-goudal-a8707b374/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
