import { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
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
    image: "assets/images/thelastconductor.jpg",
  },
  {
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
    },
    image: "assets/images/api-bibliotheque.gif",
  },
  {
    title: "API de Restaurant",
    categories: ["Web", ".NET"],
    stack: ["React", "C#", ".NET", "ASP.NET", "EFCore", "PostgreSQL"],
    objective:
        "Réaliser une API de gestion de commandes.",
    status: "Terminé",
    description: (
        <>
          Le but de cette API est de faire passer un restaurant qui serait encore au format papier au format numérique tout en gardant une interface simple, intuitive et rapide.
        </>
    ),
    links: {
      youtube: "https://youtu.be/Sm4Z8vRUB2E",
      github: "https://github.com/GoutteDooo/RestauSimplon",
    },
    image: "assets/images/RestauSimplon.gif",
  },
  {
    title: "Prototype de Jeu vidéo\nLet There Be Light",
    categories: ["Jeu vidéo", ".NET"],
    stack: ["C#", ".NET", "Unity"],
    objective:
      "Créer un jeu vidéo sous 4 jours.",
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
  },
  {
    title: "Application Console\nDuel De Guerrier",
    categories: [".NET"],
    stack: ["C#", ".NET"],
    objective:
      "Développer une application console dans le but d'apprendre l'environnement .NET",
    status: "Terminé",
    description: (
      <>
      </>
    ),
    links: {
      github: "https://github.com/GoutteDooo/DuelDeGuerrier",
    },
    image: "assets/images/DuelDeGuerrier.gif",
  },
  {
    title: "Site e-commerce\nMaison L",
    categories: ["Web"],
    stack: ["Shopify", "Liquid"],
    objective:
        "Créer un site e-commerce avec une interface fluide et intuitive.",
    status: "Terminé",
    description: (
        <>
          Solution e-commerce sur mesure avec :
          <br />
          • gestion des stocks
          <br />
          • paiements sécurisés
        </>
    ),
    links: {
      demo: "https://maison-l-3.myshopify.com",
    },
    image: "assets/images/maison-l.png",
  },
  {
    title: "Jeu vidéo\nLulu's Quest",
    categories: ["Jeu vidéo"],
    stack: ["Lua", "Pico-8"],
    objective:
        "Créer une expérience divertissante rétro avec de grosses contraintes mémoire.",
    status: "Terminé",
    description: (
        <>
          Créer un jeu rétro avec de grosses contraintes mémoires. (quelques kB)
          <br /><br />
          Forcé de devoir optimiser car manque de place, ce projet a été très intéressant à réaliser.
        </>
    ),
    links: {
      demo: "https://gouttedo.itch.io/lulus-quest",
      github: "https://github.com/GoutteDooo/Lulu-s-Quest-PICO",
    },
    image: "assets/images/lulu-pico.png",
  },
  {
    title: "Site vitrine\nEcuries",
    categories: ["Web"],
    stack: ["React", "SCSS"],
    objective:
      "Concevoir et développer à partir de zéro la partie front-end d'un site web pour une écurie",
    status: "Terminé",
    description: (
      <>
      </>
    ),
    links: {
      demo: "https://lesecuriesdelaselle.netlify.app",
      github: "https://github.com/GoutteDooo/LesEcuriesdelaSelle/tree/main",
    },
    image: "assets/images/lesecuriesdelaselle.png",
  },
  {
    title: "Site vitrine\nRecettes de cuisine",
    categories: ["Web"],
    stack: ["React", "SCSS"],
    objective:
      "Réaliser en équipe de 4 la partie front-end d'un site web de recettes de cuisine",
    status: "Terminé",
    description: (
      <>
      </>
    ),
    links: {
      demo: "https://intellicook.netlify.app",
      github: "https://github.com/GoutteDooo/Brief-IntelliCook",
    },
    image: "assets/images/intellicook.png",
  },
];

export default projects;
