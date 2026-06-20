import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AProposPage() {
  const t = useTranslations("about");
  const common = useTranslations("common");

  const principles: { title: string; description: string }[] = [];
  let i = 0;
  while (t.has(`philosophy.principles.${i}.title`)) {
    principles.push({
      title: t(`philosophy.principles.${i}.title`),
      description: t(`philosophy.principles.${i}.description`),
    });
    i++;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              {t("philosophy.title")}
            </h2>
            <p className="mt-2 text-lg text-primary font-medium">
              {t("philosophy.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="rounded-xl border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                {t("founders.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("founders.description")}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/logos-images/la paire - PHOTO-2026-02-19-10-51-01.jpg"
                  alt="Les fondateurs d'ASB Solutions"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            {t("pitch.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("pitch.description")}
          </p>
          <p className="mt-4 text-lg font-semibold text-primary">
            {t("pitch.differentiator")}
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg">
                {common("requestDemo")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
