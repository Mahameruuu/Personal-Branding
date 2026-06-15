import {
  BrainCircuit,
  Cloud,
  Database,
  LayoutDashboard,
  Server,
  type LucideIcon,
} from "lucide-react";

import { tech, type Tech } from "@/lib/data/tech";

export interface SkillCategoryDef {
  /** Stable id + translation key under `skills.categories.*`. */
  id: string;
  icon: LucideIcon;
  skills: Tech[];
}

/**
 * Skill categories with real technologies, sourced from the shared tech
 * registry so logos & colors stay consistent with the Projects section.
 * Logos render monochrome at rest and reveal their brand color on hover.
 */
export const skillCategories: SkillCategoryDef[] = [
  {
    id: "aiData",
    icon: BrainCircuit,
    skills: [
      tech.python,
      tech.tensorflow,
      tech.keras,
      tech.scikitlearn,
      tech.pandas,
      tech.matplotlib,
      tech.r,
      tech.tableau,
      tech.streamlit,
    ],
  },
  {
    id: "backend",
    icon: Server,
    skills: [
      tech.laravel,
      tech.fastapi,
      tech.flask,
      tech.php,
      tech.java,
      tech.cpp,
      tech.swagger,
    ],
  },
  {
    id: "frontend",
    icon: LayoutDashboard,
    skills: [tech.javascript, tech.react, tech.html5, tech.css3, tech.bootstrap],
  },
  {
    id: "database",
    icon: Database,
    skills: [tech.mysql, tech.postgresql, tech.mongodb, tech.redis],
  },
  {
    id: "devops",
    icon: Cloud,
    skills: [tech.aws, tech.gcp, tech.docker, tech.git],
  },
];
