import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TarifsPage() {
  const t = useTranslations("pricing");

  const plans = Array.from({ length: 3 }, (_, i) => ({
    name: t(`plans.${i}.name`),
    description: t(`plans.${i}.description`),
    price: t(`plans.${i}.price`),
    period: t(`plans.${i}.period`),
    highlight: t(`plans.${i}.highlight`),
    recommended: t(`plans.${i}.recommended`) === "true",
    features: (() => {
      const f: string[] = [];
      let j = 0;
      while (true) {
        try {
          f.push(t(`plans.${i}.features.${j}`));
          j++;
        } catch {
          break;
        }
      }
      return f;
    })(),
  }));

  const costItems: string[] = [];
  let idx = 0;
  while (t.has(`cost.items.${idx}`)) {
    costItems.push(t(`cost.items.${idx}`));
    idx++;
  }

  const setupItems: string[] = [];
  idx = 0;
  while (t.has(`setup.items.${idx}`)) {
    setupItems.push(t(`setup.items.${idx}`));
    idx++;
  }

  const inactionItems: string[] = [];
  idx = 0;
  while (t.has(`inaction.items.${idx}`)) {
    inactionItems.push(t(`inaction.items.${idx}`));
    idx++;
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
            <p className="mt-2 text-lg font-semibold text-primary">{t("hero.accent")}</p>
            <div className="mt-8 flex flex-wrap gap-6">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {t(`hero.stats.${i}.value`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`hero.stats.${i}.label`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current cost */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{t("cost.title")}</h2>
          <ul className="mt-6 space-y-3">
            {costItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold">{t("cost.conclusion")}</p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={cn(
                  "flex flex-col transition-all",
                  plan.recommended && "border-primary shadow-lg scale-[1.02]"
                )}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.recommended && (
                      <Badge>Recommandé</Badge>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price} €</span>
                    <span className="text-muted-foreground"> {plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground italic">
                    {plan.highlight}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button
                      className="w-full"
                      variant={plan.recommended ? "default" : "outline"}
                    >
                      {t("hero.cta")}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{t("setup.title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("setup.subtitle")}</p>
          <p className="mt-4 text-xl font-bold text-primary">{t("setup.price")}</p>
          <ul className="mt-6 space-y-3">
            {setupItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-muted-foreground">
            {t("setup.conclusion")}
          </p>
        </div>
      </section>

      {/* ROI */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{t("roi.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("roi.description")}</p>
          <p className="mt-4 text-lg font-semibold">{t("roi.result")}</p>
          <p className="mt-4 text-lg font-bold text-primary">{t("roi.conclusion")}</p>
        </div>
      </section>

      {/* Inaction */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{t("inaction.title")}</h2>
          <ul className="mt-6 space-y-3">
            {inactionItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold italic">{t("inaction.conclusion")}</p>
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
                  {t("cta.cta1")}
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
