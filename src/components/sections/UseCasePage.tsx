import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface UseCasePageProps {
  ns: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function UseCasePage({ ns, imageSrc, imageAlt = "" }: UseCasePageProps) {
  const t = useTranslations(ns);
  const common = useTranslations("common");

  const geoItems: string[] = [];
  let i = 0;
  while (t.has(`geo.items.${i}`)) {
    geoItems.push(t(`geo.items.${i}`));
    i++;
  }

  const problems: string[] = [];
  i = 0;
  while (t.has(`problems.items.${i}`)) {
    problems.push(t(`problems.items.${i}`));
    i++;
  }

  const solutionItems: string[] = [];
  i = 0;
  while (t.has(`solution.items.${i}`)) {
    solutionItems.push(t(`solution.items.${i}`));
    i++;
  }

  const features: { feature: string; benefit: string }[] = [];
  i = 0;
  while (t.has(`features.items.${i}.feature`)) {
    features.push({
      feature: t(`features.items.${i}.feature`),
      benefit: t(`features.items.${i}.benefit`),
    });
    i++;
  }

  const results: { value: string; label: string }[] = [];
  i = 0;
  while (t.has(`results.items.${i}.value`)) {
    results.push({
      value: t(`results.items.${i}.value`),
      label: t(`results.items.${i}.label`),
    });
    i++;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  {t("hero.cta1")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {imageSrc && (
            <div className="flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={375}
                className="rounded-2xl w-full max-w-sm lg:max-w-none"
              />
            </div>
          )}
        </div>
      </section>

      {/* GEO / Definition */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">{t("geo.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("geo.description")}</p>
          <ul className="mt-6 space-y-3">
            {geoItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold text-primary">{t("geo.conclusion")}</p>
        </div>
      </section>

      {/* Problems + Solution */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                {t("problems.title")}
              </h2>
              <ul className="mt-6 space-y-3">
                {problems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                {t("solution.title")}
              </h2>
              <ul className="mt-6 space-y-3">
                {solutionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            {t("features.title")}
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Fonctionnalité
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Bénéfice
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="px-6 py-3 text-sm font-medium">{f.feature}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {f.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            {t("results.title")}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary">{r.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-16">
            <h2 className="text-2xl font-bold">{t("cta")}</h2>
            <div className="mt-6">
              <Link href="/contact">
                <Button size="lg">
                  {common("requestDemo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
