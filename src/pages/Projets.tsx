import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Jeu vidéo - The Last Conductor",
    stack: ["Unity", "C#.NET"],
    objective: "Créer une expérience divertissante et fluide à but commercial.",
    status: "En développement",
    description: (
      <>
        Vous incarnez un ingénieur dans un monde cyberpunk en 2053. Il n'y a
        plus de courant sur Terre.
        <br />
        Votre mission est de rétablir le courant grâce à votre G-Gun.
        <br />
        Des obstacles se dresseront sur votre épopée, serez-vous prêt à
        affronter tous les dangers pour sauver l'humanité ?
      </>
    ),
    links: {
      demo: "https://gouttedo.itch.io/thelastconductor",
    },
    image: "assets/images/thelastconductor.jpg",
  },
  {
    title: "Site e-commerce - Maison L",
    stack: ["Shopify", "Liquid"],
    objective:
      "Créer un site e-commerce avec une interface fluide et intuitive.",
    status: "En développement",
    description: (
      <>
        Solution e-commerce sur mesure avec gestion des stocks, paiements
        sécurisés, et interface d'administration complète.
      </>
    ),
    links: {
      demo: "https://maison-l-3.myshopify.com",
    },
    image: "assets/images/maison-l.png",
  },
  {
    title: "Jeu vidéo - Lulu's Quest",
    stack: ["Lua", "Pico-8"],
    objective:
      "Créer une expérience divertissante rétro avec de grosses contraintes mémoire.",
    status: "Terminé",
    description: (
      <>
        Vous prenez le contrôle de deux personnages : Lulu et Hadès dont les
        pouvoirs sont opposés.
        <br />
        Lulu est une fée : Elle peut créer des orbes lumineuses et ne se déplace
        qu'à l'intérieur de celles-ci.
        <br />
        Hadès est un ténébreux : Il peut éteindre les orbes lumineuses, et périt
        s'il en touche une.
        <br />
        Votre mission est d'atteindre le coeur de la planète, là où les deux
        pourront le réparer et sauver le monde. Serez-vous prêt à affronter tous
        les obstacles qui se dresseront sur leur chemin ?
      </>
    ),
    links: {
      demo: "https://gouttedo.itch.io/lulus-quest",
      github: "https://github.com/GoutteDooo/Lulu-s-Quest-PICO",
    },
    image: "assets/images/lulu-pico.png",
  },
  {
    title: "API Bibliotheque - Full stack",
    stack: ["C#", ".NET", "ASP.NET", "EFCore", "PostgreSQL"],
    objective: "Concevoir et développer une API pour une fausse bibliothèque.",
    status: "Terminé",
    description: (
      <>
        Le principe était de créer une API pour les membres de la bibliothèque
        afin qu'ils puissent emprunter, rendre ou réserver les livres présents
        dans la base de données.
        <br />
        Trois rôles sont distribués : Membre, Employé et Administrateur.
        <br />
        Les employés peuvent gérer les réservations, valider un emprunt, valider
        un rendu, gérer les stocks.
        <br />
        Les Administrateurs ont les mêmes droits que les employés et peuvent
        également gérer ceux-ci. Ils peuvent en ajouter ou les retirer de la
        base de données.
        <br />
        Projet réalisé en formation chez Simplon
      </>
    ),
    links: {
      demo: "Pas de lien pour le moment",
      github: "https://github.com/GoutteDooo/API-Bibliotheque",
    },
    image: "assets/images/api-bibliotheque.png",
  },
  {
    title: "Prototype de Jeu vidéo - Let There Be Light",
    stack: ["C#", ".NET", "Unity"],
    objective:
      "Concevoir et créer un prototype de jeu vidéo fun sous un délai extrêmement court de 4 jours.",
    status: "Terminé",
    description: (
      <>
        Le Projet a été réalisée en équipe. J'ai collaboré avec Hazel Cunuder,
        ma camarade de formation.
        <br />
        La difficulté principale fut de réussir à boucler le gameplay. Nous y
        sommes parvenus dés lors que nous avons eu l'idée de le faire via une
        state machine.
        <br />
        La state machine, qui agit en tant que Singleton pour être toujours
        présente, change d'état à chaque phase de jeu : Playing, Victory,
        Defeat, Menu, Pause, Completed et d'autres...
        <br />
        Projet réalisé en formation chez Simplon
      </>
    ),
    links: {
      demo: "Pas de lien pour le moment",
      github: "https://github.com/GoutteDooo/Let_There_Be_Light_Simplon",
    },
    image: "assets/images/ltbl.gif",
  },
  {
    title: "API de Restaurant - Full stack",
    stack: ["C#", ".NET", "ASP.NET", "React", "EFCore", "PostgreSQL"],
    objective:
      "Concevoir et développer une API intuitive pour un faux restaurant.",
    status: "Terminé",
    description: (
      <>
        RestauSimplon est un restaurant qui souhaite digitaliser la gestion de
        ses commandes, actuellement effectuée sur papier.
        <br />
        Ce projet a pour but de créer une API REST permettant de gérer les
        articles du menu, les clients et les commandes, tout en automatisant les
        calculs et en assurant une meilleure traçabilité.
        <br />
        Projet réalisé en formation chez Simplon
      </>
    ),
    links: {
      demo: "Pas de lien pour le moment",
      github: "https://github.com/GoutteDooo/RestauSimplon",
    },
    image: "assets/images/restausimplon.png",
  },
  {
    title: "Application Console - Duel De Guerrier",
    stack: ["C#", ".NET"],
    objective:
      "Développer une application console dans le but d'apprendre l'environnement .NET",
    status: "Terminé",
    description: (
      <>
        Dans cette app, vous pouvez créer des fourmis qui s'affrontent dans une
        arène.
        <br />
        L'app gère une base de données dynamique qui s'enregistre dans un
        fichier json si vous le souhaitez.
        <br />
        Le système de combat est dynamique, une fois que deux fourmis
        s'affrontent, vous voyez tout le combat se dérouler jusqu'au bout.
        <br />
        Un système de championnat a été mis en place. Si vous avez plus de deux
        fourmis dans l'arène, celles-ci s'affrontent deux par deux jusqu'à ce
        qu'il n'en reste qu'une seule victorieuse.
        <br />
        Projet réalisé en formation chez Simplon
      </>
    ),
    links: {
      demo: "Pas de lien pour le moment",
      github: "https://github.com/GoutteDooo/DuelDeGuerrier",
    },
    image: "assets/images/api-bibliotheque.png",
  },
  {
    title: "Site Web Front end - Les Ecuries de la Selle",
    stack: ["React", "SCSS"],
    objective:
      "Concevoir et développer à partir de zéro la partie front-end d'un site web pour une écurie",
    status: "Terminé",
    description: (
      <>
        Partie front-end du site web de "Les Ecuries de la Selle" réalisée avec
        React et SCSS.
        <br />
        Le site est entièrement responsive et est hébergé par Netlify, ce qui
        permet à sa propriétaire de n'y mettre aucun frais !
      </>
    ),
    links: {
      demo: "https://lesecuriesdelaselle.netlify.app",
      github: "https://github.com/GoutteDooo/LesEcuriesdelaSelle/tree/main",
    },
    image: "assets/images/lesecuriesdelaselle.png",
  },
  {
    title: "Site Web Front end - Intellicook",
    stack: ["React", "SCSS"],
    objective:
      "Concevoir et développer en équipe de 4 à partir de zéro la partie front-end d'un site web pour une fausse entreprise",
    status: "Terminé",
    description: (
      <>
        Partie front-end du site web de la fake entreprise "Intellicook"
        réalisée avec React et SCSS.
        <br />
        Projet réalisé en équipe de 4, où l'esprit d'équipe et la communication
        étaient de mise.
      </>
    ),
    links: {
      demo: "https://intellicook.netlify.app",
      github: "https://github.com/GoutteDooo/Brief-IntelliCook",
    },
    image: "assets/images/intellicook.png",
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
