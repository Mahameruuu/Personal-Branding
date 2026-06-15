/**
 * Central, non-localized site configuration. Localized strings live in
 * `messages/*.json`; this file holds structural data, URLs and handles
 * that are the same in every language.
 */
export const siteConfig = {
  name: "Muhammad Mahameru Abidin",
  shortName: "Mahameru",
  title: "Data Scientist | AI Engineer",
  url: "https://your-domain.com",
  email: "mahameru0504@gmail.com",
  phone: "+62 856-4645-2991",
  social: {
    linkedin: {
      handle: "in/mmahamerua",
      url: "https://linkedin.com/in/mmahamerua",
    },
    whatsapp: {
      handle: "+62 856-4645-2991",
      // wa.me format: country code + number, no symbols.
      url: "https://wa.me/6285646452991",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
