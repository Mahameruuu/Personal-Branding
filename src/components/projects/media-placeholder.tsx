import type { ComponentType } from "react";

import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  /** Aspect ratio of the container. */
  aspect?: "video" | "cover";
  className?: string;
}

/**
 * A designed, intentional placeholder for media that hasn't been added yet
 * (architecture diagram, demo video). Reads as a deliberate "slot" — never a
 * broken asset — so real images/videos can drop straight in later.
 */
export function MediaPlaceholder({
  icon: Icon,
  label,
  aspect = "video",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-dashed bg-muted/40",
        aspect === "video" ? "aspect-video" : "aspect-16/10",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
        <span className="flex size-12 items-center justify-center rounded-full border bg-background/60 backdrop-blur-sm">
          <Icon className="size-5" />
        </span>
        <span className="text-xs font-medium uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
  );
}
