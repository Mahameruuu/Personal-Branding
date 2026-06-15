"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/types";

/**
 * Scroll-spy hook. Observes the given section ids and returns the id of
 * the section currently in view, so the navbar can highlight the active
 * link. Uses IntersectionObserver — no scroll listeners, no jank.
 */
export function useActiveSection(sectionIds: SectionId[]): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(
    sectionIds[0] ?? null,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id as SectionId);
        }
      },
      {
        // Trigger when a section is roughly in the vertical center.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
