import type { NavItem } from "@/types";

/**
 * Single source of truth for the on-page navigation. Each entry maps a
 * section anchor to its scroll-spy id and translation key. The order
 * here defines the order in the navbar, mobile menu and footer.
 */
export const navItems: NavItem[] = [
  { href: "#home", id: "home", labelKey: "home" },
  { href: "#about", id: "about", labelKey: "about" },
  { href: "#experience", id: "experience", labelKey: "experience" },
  { href: "#skills", id: "skills", labelKey: "skills" },
  { href: "#projects", id: "projects", labelKey: "projects" },
  { href: "#research", id: "research", labelKey: "research" },
  { href: "#contact", id: "contact", labelKey: "contact" },
];
