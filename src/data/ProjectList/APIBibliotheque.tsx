import { Project } from "@/components/ProjectCard";

export const APIBibliotheque: Project = {
  title: "API Bibliotheque\nArchitecture MVC",
  categories: ["Web", ".NET"],
  stack: ["Razor", "C#", ".NET", "ASP.NET", "EFCore", "PostgreSQL"],
  objective: "Concevoir et développer une API pour une fausse bibliothèque.",
  status: "Terminé",
  description: (
    <>
      API de Bibliothèque avec système de permission et base de données.
      <br /><br />
      Diagramme UML réalisé et architecture MVC intégrée.
    </>
  ),
  links: {
    youtube: "https://youtu.be/-tXCateN6B0",
    github: "https://github.com/GoutteDooo/API-Bibliotheque",
    demo: "https://api-bibliotheque-fqehhed3ctcvhydg.francecentral-01.azurewebsites.net/"
  },
  image: "assets/images/api-bibliotheque.gif",
};