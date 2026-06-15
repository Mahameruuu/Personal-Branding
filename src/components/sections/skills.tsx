import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";

import { Section } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/shared/stagger";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skillCategories } from "@/lib/data/skills";

export function Skills() {
  const t = useTranslations("skills");

  return (
    <Section
      id="skills"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      muted
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ id, icon: Icon, skills }) => (
          <StaggerItem key={id} className="h-full">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium leading-tight">
                      {t(`categories.${id}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {t(`categories.${id}.description`)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={
                        {
                          "--brand": skill.color,
                          backgroundColor: `color-mix(in srgb, ${skill.color} 10%, transparent)`,
                          borderColor: `color-mix(in srgb, ${skill.color} 25%, transparent)`,
                        } as CSSProperties
                      }
                      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium text-foreground transition-transform hover:scale-[1.03]"
                    >
                      <skill.icon className="size-3.5 text-(--brand)" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
