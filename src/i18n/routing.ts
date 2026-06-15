import { defineRouting } from "next-intl/routing";

export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
