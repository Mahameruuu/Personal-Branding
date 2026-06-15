import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ComingSoonProps {
  /** Localized label, e.g. "Content coming soon". */
  label: string;
  /** Optional supporting line. */
  hint?: string;
  className?: string;
}

/**
 * A polished placeholder for sections whose real content is not yet
 * filled in. Reads as an intentional design element rather than a gap.
 */
export function ComingSoon({ label, hint, className }: ComingSoonProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-card/50 px-6 py-12 text-center",
        className,
      )}
    >
      <Badge variant="muted" className="gap-1.5">
        <Sparkles className="size-3.5" />
        {label}
      </Badge>
      {hint && (
        <p className="max-w-sm text-sm text-muted-foreground">{hint}</p>
      )}
    </div>
  );
}
