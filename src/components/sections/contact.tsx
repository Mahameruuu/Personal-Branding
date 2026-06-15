import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Stagger, StaggerItem } from "@/components/shared/stagger";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    id: "email",
    icon: Mail,
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    value: siteConfig.social.linkedin.handle,
    href: siteConfig.social.linkedin.url,
  },
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    value: siteConfig.social.whatsapp.handle,
    href: siteConfig.social.whatsapp.url,
  },
];

export function Contact() {
  const t = useTranslations("contact");

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Stagger className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {channels.map(({ id, icon: Icon, value, href }) => {
          const isExternal = !href.startsWith("mailto:");
          return (
            <StaggerItem key={id} className="h-full">
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group block h-full"
              >
                <Card className="flex h-full flex-col items-center gap-3 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t(`channels.${id}`)}</p>
                    <p className="mt-0.5 break-all text-xs text-muted-foreground">
                      {value}
                    </p>
                  </div>
                </Card>
              </a>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal className="mt-12 text-center">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.email}`}>
            {t("cta")}
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </Reveal>
    </Section>
  );
}
