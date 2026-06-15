import { useTranslations } from "next-intl";
import { Briefcase } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

// Featured experience only — three roles that define the professional
// brand (Data Scientist | AI Engineer with full-stack experience). Earlier
// internships and one-off projects live in the CV / Projects section, not
// here. Copy lives in messages/*.json under `experience.items.*`.
const items = ["smluestari", "flashcom", "independent"] as const;

export function Experience() {
  const t = useTranslations("experience");

  return (
    <Section
      id="experience"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-border/80">
          {items.map((id, index) => (
            <Reveal
              as="li"
              key={id}
              delay={index * 0.05}
              className="relative ml-6 pb-10 last:pb-0"
            >
              {/* Node */}
              <span className="absolute left-[-2.1rem] flex size-7 items-center justify-center rounded-full border bg-background text-muted-foreground">
                <Briefcase className="size-3.5" />
              </span>

              <div className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{t(`items.${id}.role`)}</h3>
                  <Badge variant="muted">{t(`items.${id}.period`)}</Badge>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {t(`items.${id}.company`)} · {t(`items.${id}.location`)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${id}.summary`)}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
