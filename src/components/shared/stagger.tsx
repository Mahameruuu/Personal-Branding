"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

import { staggerContainer, staggerItem } from "@/lib/motion";

interface StaggerProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
  amount?: number;
}

/** Container that staggers the entrance of its `StaggerItem` children. */
export function Stagger({
  children,
  amount = 0.2,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Single staggered child. */
export function StaggerItem({
  children,
  ...props
}: ComponentProps<typeof motion.div>) {
  return (
    <motion.div variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}
