import { useState } from "react";
import ProjectCard, { ProjectCategory } from "@/components/ProjectCard";
import projects from "@/data/projectsData";

const CATEGORIES: ("Tous" | ProjectCategory)[] = ["Tous", "Web", "Jeu vidéo", ".NET"];

const Projets = () => {
  const [activeFilter, setActiveFilter] = useState<"Tous" | ProjectCategory>("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <div className="container-page pt-24">
      <section className="mb-10 animate-fade-in">
        <h1 className="heading-display text-foreground mb-4">Mes Projets</h1>
      </section>

      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
              activeFilter === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-0">
        {filtered.map((project, index) => (
          <div key={project.title}>
            <ProjectCard project={project} />
            {index < filtered.length - 1 && <div className="separator-warm" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
