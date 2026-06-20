import { useTranslations } from "next-intl";

export function ImpactSection() {
  const t = useTranslations("home.impact");

  const items = Array.from({ length: 4 }, (_, i) => ({
    value: t(`items.${i}.value`),
    label: t(`items.${i}.label`),
  }));

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("title")}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-primary">{item.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
