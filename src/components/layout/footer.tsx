import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

import { Container } from "@/components/shared/container";
import { navItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

const socials = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "LinkedIn", href: siteConfig.social.linkedin.url, icon: FaLinkedinIn },
  { label: "WhatsApp", href: siteConfig.social.whatsapp.url, icon: FaWhatsapp },
];

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold tracking-tight">
              {t("brand")}
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              {tf("tagline")}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t("brand")}. {tf("rights")}
          </p>
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
