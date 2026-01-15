import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  stack: string[];
  objective: string;
  status: "En développement" | "Terminé" | "En pause";
  description: string;
  links?: {
    demo?: string;
    github?: string;
  };
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  "En développement": "bg-accent/20 text-accent",
  "Terminé": "bg-primary/20 text-primary",
  "En pause": "bg-muted text-muted-foreground",
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
              className="rounded-lg w-full h-auto object-cover border border-border"
            />
          </div>
        )}
        <div className={project.image ? "order-1 md:order-2" : "md:col-span-2"}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="heading-section text-foreground">{project.title}</h3>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Objectif</h4>
            <p className="text-body text-foreground">{project.objective}</p>
          </div>

          <p className="text-body text-muted-foreground mb-6">{project.description}</p>

          {project.links && (
            <div className="flex items-center gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium link-warm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir le projet
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium link-warm"
                >
                  <Github className="w-4 h-4" />
                  Code source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
