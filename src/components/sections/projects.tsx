import { useTranslations } from "next-intl";

import { Section } from "@/components/shared/section";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <Section
      id="projects"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <ProjectsExplorer />
    </Section>
  );
}
