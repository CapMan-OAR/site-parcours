import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

interface GeoSectionProps {
  ns: string;
}

export function GeoSection({ ns }: GeoSectionProps) {
  const t = useTranslations(ns);

  const items: string[] = [];
  let i = 0;
  while (t.has(`items.${i}`)) {
    items.push(t(`items.${i}`));
    i++;
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
        <p className="mt-3 text-muted-foreground">{t("description")}</p>
        <ul className="mt-6 space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-semibold text-primary">{t("conclusion")}</p>
      </div>
    </section>
  );
}
