import { Project } from "@/components/ProjectCard";

export const LetThereBeLightProto: Project = {
  title: "Prototype de Jeu vidéo\nLet There Be Light",
  categories: ["Jeu vidéo", ".NET"],
  stack: ["C#", ".NET", "Unity"],
  objective: "Créer un jeu vidéo sous 4 jours.",
  status: "Terminé",
  description: (
    <>
      <strong>Difficulté principale :</strong>
      <br />
      Réussir à boucler le gameplay sans connaissance préalable du moteur Unity.
      <br /><br />
    </>
  ),
  links: {
    demo: "https://gouttedo.itch.io/let-there-be-light-proto",
    github: "https://github.com/GoutteDooo/Let_There_Be_Light_Simplon",
  },
  image: "assets/images/ltbl.gif",
};