"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

// 6 cards per page (3 columns × 2 rows on desktop); slide for the rest.
const PAGE_SIZE = 6;

// Preferred order of the filter tabs (only those present are shown).
const CATEGORY_ORDER = [
  "computerVision",
  "machineLearning",
  "genAI",
  "fullStack",
];

export function ProjectsExplorer() {
  const t = useTranslations("projects");
  const [active, setActive] = useState("all");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const categories = useMemo(
    () =>
      CATEGORY_ORDER.filter((c) =>
        featuredProjects.some((p) => p.category === c),
      ),
    [],
  );

  const filtered =
    active === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === active);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const visible = filtered.slice(
    safePage * PAGE_SIZE,
    safePage * PAGE_SIZE + PAGE_SIZE,
  );

  function selectCategory(category: string) {
    setActive(category);
    setPage(0);
    setDirection(0);
  }

  function go(delta: 1 | -1) {
    setDirection(delta);
    setPage((p) => Math.min(Math.max(p + delta, 0), pageCount - 1));
  }

  const tabs = [{ key: "all", label: t("filterAll") }].concat(
    categories.map((c) => ({ key: c, label: t(`categories.${c}`) })),
  );

  return (
    <div>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => selectCategory(tab.key)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === tab.key
                ? "border-transparent bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pager controls (only when there's more than one page) */}
      {pageCount > 1 && (
        <div className="mb-5 flex items-center justify-end gap-3">
          <span className="text-sm tabular-nums text-muted-foreground">
            {safePage + 1} / {pageCount}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous projects"
              onClick={() => go(-1)}
              disabled={safePage === 0}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next projects"
              onClick={() => go(1)}
              disabled={safePage === pageCount - 1}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Paged grid */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${active}-${safePage}`}
            initial={{ opacity: 0, x: direction * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -48 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                category={t(`categories.${project.category}`)}
                title={t(`items.${project.slug}.title`)}
                description={t(`items.${project.slug}.summary`)}
                viewDetailsLabel={t("viewDetails")}
                statusBadge={
                  project.status === "comingSoon"
                    ? t("status.comingSoon")
                    : undefined
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
