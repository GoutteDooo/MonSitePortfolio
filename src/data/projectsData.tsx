import { Project } from "@/components/ProjectCard";
import { APIBibliotheque } from "./ProjectList/APIBibliotheque";
import { TheLastConductor } from "./ProjectList/TheLastConductor";
import { APIRestaurant } from "./ProjectList/APIRestaurant";
import { LetThereBeLightProto } from "./ProjectList/LetThereBeLightProto";
import { DuelDeGuerrier } from "./ProjectList/DuelDeGuerrier";
import { MaisonL } from "./ProjectList/MaisonL";
import { LulusQuest } from "./ProjectList/LulusQuest";
import { Ecuries } from "./ProjectList/Ecuries";
import { RecettesCuisine } from "./ProjectList/RecettesCuisine";

const projects: Project[] = [
  // @ts-ignore
  APIBibliotheque,
  TheLastConductor,
  APIRestaurant,
  LetThereBeLightProto,
  DuelDeGuerrier,
  MaisonL,
  LulusQuest,
  Ecuries,
  RecettesCuisine,
];

export default projects;