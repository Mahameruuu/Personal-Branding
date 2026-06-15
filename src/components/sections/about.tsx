import { useTranslations } from "next-intl";
import { BrainCircuit, Code2, LineChart } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Stagger, StaggerItem } from "@/components/shared/stagger";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  { key: "ai", icon: BrainCircuit },
  { key: "data", icon: LineChart },
  { key: "engineering", icon: Code2 },
];

export function About() {
  const t = useTranslations("about");

  return (
    <Section
      id="about"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      muted
    >
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        {/* Narrative */}
        <Reveal className="space-y-5 lg:col-span-3">
          {["paragraph1", "paragraph2", "paragraph3", "paragraph4"].map(
            (key) => (
              <p
                key={key}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {t(key)}
              </p>
            ),
          )}
        </Reveal>

        {/* Focus areas */}
        <Stagger className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
          {focusAreas.map(({ key, icon: Icon }) => (
            <StaggerItem key={key}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t(`focus.${key}.title`)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`focus.${key}.description`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
