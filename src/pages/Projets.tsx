import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projectsData";

const Projets = () => {
  return (
    <div className="container-page pt-24">
      <section className="mb-16 animate-fade-in">
        <h1 className="heading-display text-foreground mb-4">Mes Projets</h1>
        <p className="text-body text-muted-foreground max-w-2xl">
          Découvrez une sélection de projets sur lesquels j'ai travaillé,
          illustrant mon expertise en développement web full-stack.
        </p>
      </section>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div key={project.title}>
            <ProjectCard project={project} />
            {index < projects.length - 1 && <div className="separator-warm" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;