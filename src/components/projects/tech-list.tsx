import type { CSSProperties } from "react";

import type { Tech } from "@/lib/data/tech";
import { cn } from "@/lib/utils";

interface TechListProps {
  items: Tech[];
  /** Slightly larger chips for the detail page. */
  size?: "sm" | "md";
  className?: string;
}

/**
 * Reusable technology-chip list. Each chip shows the brand logo in its real
 * color over a subtle brand-tinted background. Shared across project cards
 * and case-study pages so tech always looks identical.
 */
export function TechList({ items, size = "sm", className }: TechListProps) {
  const chip =
    size === "md" ? "gap-1.5 px-3 py-1.5 text-sm" : "gap-1 px-2 py-0.5 text-xs";
  const icon = size === "md" ? "size-4" : "size-3";

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item.name}
          style={
            {
              "--brand": item.color,
              backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)`,
              borderColor: `color-mix(in srgb, ${item.color} 25%, transparent)`,
            } as CSSProperties
          }
          className={cn(
            "inline-flex items-center rounded-md border font-medium text-foreground",
            chip,
          )}
        >
          <item.icon className={cn(icon, "text-(--brand)")} />
          {item.name}
        </span>
      ))}
    </div>
  );
}
