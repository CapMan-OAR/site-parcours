import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function SolutionSection() {
  const t = useTranslations("home.solution");

  const items: string[] = [];
  let i = 0;
  while (t.has(`items.${i}`)) {
    items.push(t(`items.${i}`));
    i++;
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="hidden lg:flex items-center justify-center order-first">
            <Image
              src="/images/illustrations/solution-unified.png"
              alt="Plateforme PARCOURS unifiée"
              width={500}
              height={375}
              className="rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              {t("description")}
            </p>
            <ul className="mt-6 space-y-3">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-primary">
              {t("conclusion")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
