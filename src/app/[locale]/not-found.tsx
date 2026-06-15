import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-semibold tracking-tight text-muted-foreground/40">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">{t("description")}</p>
      <Button asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="size-4" />
          {t("cta")}
        </Link>
      </Button>
    </div>
  );
}
