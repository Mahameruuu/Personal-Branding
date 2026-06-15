import { ArrowUpRight } from "lucide-react";

import { ProjectCover } from "@/components/projects/project-media";
import { TechList } from "@/components/projects/tech-list";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** Already-localized strings. */
  title: string;
  description: string;
  category: string;
  viewDetailsLabel: string;
  /** Optional status badge over the cover (e.g. "Coming Soon"). */
  statusBadge?: string;
}

/**
 * Featured project card for the home grid. Presents a project as a product:
 * cover, category badge, title, short description, tech logos, and a link to
 * the full case study. The whole cover is clickable.
 */
export function ProjectCard({
  project,
  title,
  description,
  category,
  viewDetailsLabel,
  statusBadge,
}: ProjectCardProps) {
  const href = `/projects/${project.slug}`;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <Link href={href} className="relative block border-b">
        <ProjectCover slug={project.slug} alt={title} />
        {statusBadge && (
          <Badge
            variant="muted"
            className="absolute left-3 top-3 gap-1.5 bg-background/70 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-zinc-400" />
            {statusBadge}
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 bg-background/70 backdrop-blur-sm"
        >
          {category}
        </Badge>
      </Link>

      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <TechList items={project.tech} className="mt-4" />
      </CardContent>

      <CardFooter>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
        >
          {viewDetailsLabel}
          <ArrowUpRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}

/**
 * Placeholder card used to fill out the grid until more real projects are
 * added. Mirrors the real card's proportions for a consistent layout.
 */
export function ProjectPlaceholderCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div
        className={cn(
          "relative aspect-16/10 w-full overflow-hidden border-b bg-muted",
          "animate-pulse",
        )}
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </CardHeader>
      <CardContent className="flex-1 pb-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
