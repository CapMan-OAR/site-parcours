import { useTranslations } from "next-intl";
import { Settings, LayoutList, Users, BarChart3 } from "lucide-react";

const stepIcons = [Settings, LayoutList, Users, BarChart3];

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  const steps = [0, 1, 2, 3].map((i) => ({
    title: t(`steps.${i}.title`),
    items: [
      t(`steps.${i}.items.0`),
      t(`steps.${i}.items.1`),
      ...(i !== 1 ? [t(`steps.${i}.items.2`)] : []),
    ],
  }));

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("title")}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-8 translate-x-full bg-primary/20 lg:block" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <ul className="mt-3 space-y-1">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
