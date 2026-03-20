import { Project } from "@/components/ProjectCard";

export const TheLastConductor: Project = {
  title: "Jeu vidéo\nThe Last Conductor",
  categories: ["Jeu vidéo"],
  stack: ["Unity", "C#", ".NET"],
  objective: "Progresser dans l'environnement .NET.",
  status: "En développement",
  description: (
    <>
      Projet très intéressant car demande une gestion rigoureuse de l'architecture.
      <br /><br />
      <p className={"text-red-500"}>Code source privé car projet à but lucratif.</p>
    </>
  ),
  links: {
    demo: "https://gouttedo.itch.io/thelastconductor",
    youtube: "https://youtu.be/cnQc5MYrOTE",
  },
  image: "assets/images/TLC.gif",
};