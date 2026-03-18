import { useState } from "react";
import { NavLink } from "react-router-dom";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer le thème"
      className="relative flex items-center w-14 h-7 rounded-full bg-secondary border border-border transition-colors duration-300 cursor-pointer"
    >
      {/* Soleil - gauche */}
      <img src="/assets/images/dm_sun.png" alt="Mode clair" className="absolute left-1.5 w-4 h-4" />
      {/* Lune - droite */}
      <img src="/assets/images/dm_moon.png" alt="Mode sombre" className="absolute right-1.5 w-4 h-4" />
      {/* Curseur */}
      <span
        className={`absolute w-5 h-5 rounded-full bg-primary shadow transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="font-serif text-xl font-medium text-foreground">
            
          </NavLink>
          <div className="flex items-center gap-8">
            <ThemeToggle />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/projets"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
