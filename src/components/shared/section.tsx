import type { ReactNode } from "react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

interface SectionProps {
  id: SectionId;
  children: ReactNode;
  className?: string;
  /** Eyebrow label above the title (already localized). */
  eyebrow?: string;
  /** Section title (already localized). */
  title?: string;
  /** Supporting description below the title (already localized). */
  description?: string;
  /** Use a subtly tinted background to alternate section rhythm. */
  muted?: boolean;
}

/**
 * Standard section shell: anchor target, vertical rhythm, optional muted
 * background and a consistent, animated heading block. Sections pass their
 * body as children below the heading.
 */
export function Section({
  id,
  children,
  className,
  eyebrow,
  title,
  description,
  muted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-24 lg:py-28",
        muted && "bg-muted/40",
        className,
      )}
    >
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
