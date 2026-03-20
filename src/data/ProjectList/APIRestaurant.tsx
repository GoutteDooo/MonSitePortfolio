import { Project } from "@/components/ProjectCard";

export const APIRestaurant: Project = {
  title: "API de Restaurant",
  categories: ["Web", ".NET"],
  stack: ["React", "C#", ".NET", "ASP.NET", "EFCore", "PostgreSQL"],
  objective: "Réaliser une API de gestion de commandes.",
  status: "Terminé",
  description: (
    <>
      Le but de cette API est de faire passer un restaurant qui serait encore au format papier au format numérique
      tout en gardant une interface simple, intuitive et rapide.
    </>
  ),
  links: {
    youtube: "https://youtu.be/Sm4Z8vRUB2E",
    github: "https://github.com/GoutteDooo/RestauSimplon",
  },
  image: "assets/images/RestauSimplon.gif",
};
