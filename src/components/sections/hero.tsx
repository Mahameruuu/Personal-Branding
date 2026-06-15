"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Availability / status pill */}
          <motion.div variants={staggerItem} className="mb-6 flex justify-center">
            <Badge variant="muted" className="gap-2 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {t("status")}
            </Badge>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t("name")}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-balance text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            {t("title")}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("intro")}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" />
            {t("location")}
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#projects">
                {t("ctaPrimary")}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <a href="#contact">
                <Mail className="size-4" />
                {t("ctaSecondary")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
