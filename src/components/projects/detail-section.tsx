import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface DetailSectionProps {
  title: string;
  /** Optional supporting line under the heading. */
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Consistent section block for case-study pages: an eyebrow heading with an
 * accent rule, an optional description, then the body. Every detail section
 * uses it so spacing/typography stay uniform and new sections are trivial.
 */
export function DetailSection({
  title,
  description,
  children,
  className,
}: DetailSectionProps) {
  return (
    <section className={cn("scroll-mt-24", className)}>
      <h2 className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        <span className="h-4 w-1 rounded-full bg-primary" />
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}
