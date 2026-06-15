import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/shared/container";
import {
  ProjectCover,
  ProjectGallery,
  ProjectVideo,
} from "@/components/projects/project-media";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { featuredProjects, getProjectBySlug } from "@/lib/data/projects";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    featuredProjects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const t = await getTranslations({ locale: locale as Locale, namespace: "projects" });
  return {
    title: t(`items.${slug}.title`),
    description: t(`items.${slug}.summary`),
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");

  // Status dot color (literal classes so Tailwind keeps them).
  const statusDot: Record<string, string> = {
    live: "bg-emerald-500",
    completed: "bg-emerald-500",
    inProgress: "bg-amber-500",
    concept: "bg-zinc-400",
    comingSoon: "bg-zinc-400",
  };

  return (
    <article className="pb-24 pt-28">
      <Container className="max-w-4xl">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-ml-2 mb-8 text-muted-foreground"
        >
          <Link href="/#projects">
            <ArrowLeft className="size-4" />
            {t("detail.back")}
          </Link>
        </Button>

        {/* Category + status */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{t(`categories.${project.category}`)}</Badge>
          <Badge variant="muted" className="gap-1.5">
            <span
              className={`size-1.5 rounded-full ${statusDot[project.status] ?? "bg-emerald-500"}`}
            />
            {t(`status.${project.status}`)}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {t(`items.${slug}.title`)}
        </h1>

        {/* Cover */}
        <div className="mt-8 overflow-hidden rounded-xl border shadow-sm">
          <ProjectCover slug={slug} alt={t(`items.${slug}.title`)} />
        </div>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-balance text-lg font-medium leading-relaxed">
          {t(`items.${slug}.summary`)}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t(`items.${slug}.overview`)}
        </p>

        {/* Showcase: video for AI demos, screenshots for full-stack systems */}
        <div className="mt-12">
          {!project.videoUrl && project.screenshots?.length ? (
            <ProjectGallery
              slug={slug}
              alt={t(`items.${slug}.title`)}
              placeholderLabel={t("detail.imagePlaceholder")}
            />
          ) : (
            <ProjectVideo
              slug={slug}
              placeholderLabel={t("detail.videoPlaceholder")}
            />
          )}
        </div>
      </Container>
    </article>
  );
}
