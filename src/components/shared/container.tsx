import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Consistent max-width + responsive horizontal padding wrapper used by
 * every section, the navbar and the footer. Single place to tune layout
 * rhythm across the whole site.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
