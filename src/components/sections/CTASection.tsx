import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  ns?: string;
}

export function CTASection({ ns = "home.cta" }: CTASectionProps) {
  const t = useTranslations(ns);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                {t("cta1")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {t.has("cta2") && (
              <Link href="/cas-usage/bilan-competences">
                <Button variant="outline" size="lg">
                  {t("cta2")}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
