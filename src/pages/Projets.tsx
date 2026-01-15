import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Application de gestion de tâches",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    objective: "Créer une application intuitive pour gérer les tâches d'équipe avec suivi en temps réel.",
    status: "Terminé",
    description:
      "Une application complète permettant aux équipes de collaborer efficacement. Elle inclut la gestion des projets, l'assignation des tâches, les notifications en temps réel et des tableaux de bord analytiques.",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Plateforme e-commerce",
    stack: ["React", "C#", ".NET Core", "SQL Server", "Azure"],
    objective: "Développer une plateforme e-commerce performante et sécurisée.",
    status: "En développement",
    description:
      "Solution e-commerce sur mesure avec gestion des stocks, paiements sécurisés, et interface d'administration complète. Architecture microservices pour une scalabilité optimale.",
    links: {
      github: "https://github.com",
    },
  },
  {
    title: "Dashboard analytique",
    stack: ["React", "D3.js", "Python", "FastAPI"],
    objective: "Visualiser des données complexes de manière claire et interactive.",
    status: "Terminé",
    description:
      "Tableau de bord interactif permettant d'explorer et d'analyser de grands ensembles de données. Graphiques personnalisables, exports PDF, et mises à jour en temps réel.",
    links: {
      demo: "https://example.com",
    },
  },
];

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
