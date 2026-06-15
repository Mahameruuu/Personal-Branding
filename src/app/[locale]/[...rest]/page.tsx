import { notFound } from "next/navigation";

/**
 * Catch-all for any unmatched path within a locale. Triggers the localized
 * `[locale]/not-found.tsx`, which renders inside the locale layout (the de
 * facto root layout). This is the next-intl pattern that avoids needing a
 * separate root-level not-found outside the `[locale]` segment.
 */
export default function CatchAllPage() {
  notFound();
}
