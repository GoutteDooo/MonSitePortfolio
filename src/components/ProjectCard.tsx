import { useState } from "react";
import ProjectLinks from "@/components/ProjectLinks";

export type ProjectCategory = "Web" | "Jeu vidéo" | ".NET";

export interface Project {
  title: string;
  categories: ProjectCategory[];
  stack: string[];
  objective: string;
  status: "En développement" | "Terminé" | "En pause";
  //@ts-ignore
  description: html;
  links?: {
    demo?: string;
    github?: string;
    youtube?: string;
  };
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const SHIELDS: Record<string, string> = {
  "React":       "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
  "C#":          "https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white",
  "C#.NET":      "https://img.shields.io/badge/C%23.NET-512BD4?style=flat-square&logoColor=white",
  ".NET":        "https://img.shields.io/badge/.NET-512BD4?style=flat-square&logoColor=white",
  "ASP.NET":     "https://img.shields.io/badge/ASP.NET-512BD4?style=flat-square&logoColor=white",
  "EFCore":      "https://img.shields.io/badge/EF_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white&logoSize=auto",
  "Unity":       "https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white",
  "PostgreSQL":  "https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
  "SCSS":        "https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white",
  "Shopify":     "https://img.shields.io/badge/Shopify-96BF48?style=flat-square&logo=shopify&logoColor=white",
  "Liquid":      "https://img.shields.io/badge/Liquid-95BF47?style=flat-square&logo=shopify&logoColor=white",
  "Lua":         "https://img.shields.io/badge/Lua-2C2D72?style=flat-square&logo=lua&logoColor=white",
  "Pico-8":      "https://img.shields.io/badge/Pico--8-FF004D?style=flat-square&logoColor=white",
  "Razor":       "https://img.shields.io/badge/Razor-512BD4?style=flat-square&logo=dotnet&logoColor=white",
};

const TechBadge = ({ tech }: { tech: string }) => {
  const [error, setError] = useState(false);
  const url = SHIELDS[tech];

  if (!url || error) {
    return (
      <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">
        {tech}
      </span>
    );
  }

  return (
    <img
      src={url}
      alt={tech}
      onError={() => setError(true)}
      className="h-5"
    />
  );
};

const statusColors = {
  "En développement": "bg-accent/20 text-accent",
  Terminé: "bg-emerald-500/20 text-emerald-500",
  "En pause": "bg-gray-500/20 text-gray-400",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {project.image && (
          <div className="order-2 md:order-1">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="rounded-lg w-full h-auto object-cover border border-border"
            />
          </div>
        )}
        <div className={project.image ? "order-1 md:order-2" : "md:col-span-2"}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="heading-section text-foreground whitespace-pre-line">{project.title}</h3>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Objectif
            </h4>
            <p className="text-body text-foreground">{project.objective}</p>
          </div>

          <div className="text-body text-muted-foreground mb-6">
            {project.description}
          </div>

          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
