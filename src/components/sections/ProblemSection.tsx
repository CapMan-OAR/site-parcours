import { useTranslations } from "next-intl";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

export function ProblemSection() {
  const t = useTranslations("home.problem");

  const items: string[] = [];
  let i = 0;
  while (t.has(`items.${i}`)) {
    items.push(t(`items.${i}`));
    i++;
  }

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">{t("subtitle")}</p>
            <ul className="mt-6 space-y-3">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-foreground">
              {t("conclusion")}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/images/illustrations/problem-scattered.png"
              alt="Processus dispersés"
              width={500}
              height={375}
              className="rounded-2xl w-full max-w-sm lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
