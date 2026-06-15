import type { LucideIcon } from "lucide-react";

/**
 * Identifiers for the page sections. These double as the anchor `id`
 * targets and the translation namespace keys, keeping navigation,
 * routing and content in sync.
 */
export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "research"
  | "contact";

export interface NavItem {
  /** Section anchor, e.g. "#about". */
  href: string;
  /** Section id used for scroll-spy + translation lookups. */
  id: SectionId;
  /** Translation key under the `nav` namespace. */
  labelKey: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Shown next to the icon in the contact section. */
  handle: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
}

export interface SkillCategory {
  id: string;
  icon: LucideIcon;
  /** Translation key for the category title. */
  titleKey: string;
  /** Translation key for the category description. */
  descriptionKey: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  category: string;
  tags: string[];
  /** Whether to highlight as a featured card. */
  featured?: boolean;
}

export interface ResearchItem {
  id: string;
  type: "publication" | "paper" | "thesis" | "project";
  year: string;
  venue: string;
}
