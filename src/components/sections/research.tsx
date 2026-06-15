import { useTranslations } from "next-intl";
import { BookOpen, FileText, FlaskConical, GraduationCap } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/shared/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Research categories this section is built to hold. Content is added
// later under `research.types.*`; the layout is content-ready.
const types = [
  { id: "publications", icon: BookOpen },
  { id: "papers", icon: FileText },
  { id: "thesis", icon: GraduationCap },
  { id: "projects", icon: FlaskConical },
];

export function Research() {
  const t = useTranslations("research");

  return (
    <Section
      id="research"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      muted
    >
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {types.map(({ id, icon: Icon }) => (
          <StaggerItem key={id} className="h-full">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <Badge variant="muted">{t("comingSoon")}</Badge>
                </div>
                <div>
                  <h3 className="font-medium">{t(`types.${id}.title`)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t(`types.${id}.description`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
