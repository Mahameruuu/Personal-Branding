import type { routing } from "@/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    // Typed locales for routing/navigation helpers. Message keys are kept
    // untyped on purpose: several sections render data-driven, dynamic keys
    // (e.g. `focus.${id}.title`) which strict message typing would reject.
    Locale: (typeof routing.locales)[number];
  }
}
