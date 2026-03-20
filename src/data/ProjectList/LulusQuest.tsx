import { Project } from "@/components/ProjectCard";

export const LulusQuest: Project = {
  title: "Jeu vidéo\nLulu's Quest",
  categories: ["Jeu vidéo"],
  stack: ["Lua", "Pico-8"],
  objective: "Créer une expérience divertissante rétro avec de grosses contraintes mémoire.",
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
};