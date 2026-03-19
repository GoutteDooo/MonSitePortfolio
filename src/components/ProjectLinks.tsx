import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import { Project } from "@/components/ProjectCard";

interface ProjectLinksProps {
  links: Project["links"];
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  if (!links) return null;

  return (
    <div className="flex items-center gap-4">
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium link-warm"
        >
          <ExternalLink className="w-4 h-4" />
          Voir le projet
        </a>
      )}
      {links.youtube && (
        <a
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium link-warm"
        >
          <YoutubeIcon className="w-4 h-4" />
          Voir la démo
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium link-warm"
        >
          <GithubIcon className="w-4 h-4" />
          Code source
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;