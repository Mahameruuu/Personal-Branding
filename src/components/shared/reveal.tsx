"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { slideUp } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Override the default slide-up variant. */
  variants?: Variants;
  /** Delay before the animation starts (seconds). */
  delay?: number;
  /** How far into the viewport before triggering (0–1). */
  amount?: number;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Animate children into view on scroll, once. Wraps Framer Motion's
 * `whileInView` with our shared variants and sensible defaults.
 */
export function Reveal({
  children,
  className,
  variants = slideUp,
  delay = 0,
  amount = 0.3,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
