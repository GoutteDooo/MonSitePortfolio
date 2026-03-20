import { Project } from "@/components/ProjectCard";

export const MaisonL: Project = {
  title: "Site e-commerce\nMaison L",
  categories: ["Web"],
  stack: ["Shopify", "Liquid"],
  objective: "Créer un site e-commerce avec une interface fluide et intuitive.",
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
};