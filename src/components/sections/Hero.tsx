import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  ns: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({ ns, imageSrc = "/images/illustrations/hero-platform.png", imageAlt = "PARCOURS platform" }: HeroProps) {
  const t = useTranslations(ns);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            {t.has("hero.accent") && (
              <p className="mt-2 text-lg font-semibold text-primary">
                {t("hero.accent")}
              </p>
            )}
            {t.has("hero.description") && (
              <p className="mt-4 text-muted-foreground">
                {t("hero.description")}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  {t("hero.cta1")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {t.has("hero.cta2") && (
                <Link href="/cas-usage/bilan-competences">
                  <Button variant="outline" size="lg">
                    {t("hero.cta2")}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={450}
              className="rounded-2xl w-full max-w-md lg:max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
