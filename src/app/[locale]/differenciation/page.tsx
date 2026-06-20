import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus, AlertTriangle } from "lucide-react";

export default function DifferentiationPage() {
  const t = useTranslations("differentiation");
  const common = useTranslations("common");

  const marketItems = Array.from({ length: 3 }, (_, i) => ({
    type: t(`market.items.${i}.type`),
    limit: t(`market.items.${i}.limit`),
  }));

  const approachItems = Array.from({ length: 5 }, (_, i) => ({
    before: t(`approach.items.${i}.before`),
    after: t(`approach.items.${i}.after`),
  }));

  const criteria = Array.from({ length: 6 }, (_, i) => ({
    label: t(`comparison.criteria.${i}.label`),
    parcours: t(`comparison.criteria.${i}.parcours`),
    monday: t(`comparison.criteria.${i}.monday`),
    processmaker: t(`comparison.criteria.${i}.processmaker`),
    classic: t(`comparison.criteria.${i}.classic`),
  }));

  const forWhomItems: string[] = [];
  let i = 0;
  while (t.has(`forWhom.items.${i}`)) {
    forWhomItems.push(t(`forWhom.items.${i}`));
    i++;
  }

  const notForWhomItems: string[] = [];
  i = 0;
  while (t.has(`notForWhom.items.${i}`)) {
    notForWhomItems.push(t(`notForWhom.items.${i}`));
    i++;
  }

  function getIcon(val: string) {
    const lower = val.toLowerCase();
    if (["oui", "yes", "totale", "total", "native", "complète", "complete", "très élevée", "very high"].includes(lower))
      return <Check className="h-4 w-4 text-primary" />;
    if (["non", "no", "aucune", "none", "limitée", "limited"].includes(lower))
      return <X className="h-4 w-4 text-red-400" />;
    return <Minus className="h-4 w-4 text-orange-400" />;
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
            <p className="mt-4 text-lg text-muted-foreground">{t("hero.subtitle")}</p>
            <ul className="mt-4 space-y-2">
              {[t("hero.points.0"), t("hero.points.1")].map((p, idx) => (
                <li key={idx} className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <ArrowRight className="h-4 w-4" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Market problem */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{t("market.title")}</h2>
          <div className="mt-8 overflow-hidden rounded-xl border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Type d&apos;outil</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Limite</th>
                </tr>
              </thead>
              <tbody>
                {marketItems.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="px-6 py-3 text-sm">{item.type}</td>
                    <td className="px-6 py-3 text-sm text-orange-600">{item.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-semibold">{t("market.conclusion")}</p>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold">{t("approach.title")}</h2>
          <div className="mt-8 overflow-hidden rounded-xl border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Avant</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Avec PARCOURS</th>
                </tr>
              </thead>
              <tbody>
                {approachItems.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-400" />
                        {item.before}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm font-medium">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {item.after}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold">{t("comparison.title")}</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Critère</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-primary">PARCOURS</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Monday / Kissflow</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">ProcessMaker</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Outils classiques</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="px-4 py-3 text-sm font-medium">{c.label}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="flex items-center gap-1.5">
                        {getIcon(c.parcours)} {c.parcours}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        {getIcon(c.monday)} {c.monday}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        {getIcon(c.processmaker)} {c.processmaker}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        {getIcon(c.classic)} {c.classic}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">{t("forWhom.title")}</h2>
              <ul className="mt-6 space-y-3">
                {forWhomItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t("notForWhom.title")}</h2>
              <ul className="mt-6 space-y-3">
                {notForWhomItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-16">
            <h2 className="text-2xl font-bold">{t("cta.title")}</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  {t("cta.cta2")}
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
