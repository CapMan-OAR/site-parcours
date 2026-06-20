import { useTranslations } from "next-intl";
import {
  Workflow,
  Users,
  ShieldCheck,
  FileText,
  ClipboardList,
  Activity,
  History,
  BookOpen,
  Clock,
  Award,
} from "lucide-react";

const featureIcons = [
  Workflow, Users, ShieldCheck, FileText, ClipboardList,
  Activity, History, BookOpen, Clock, Award,
];

export function FeaturesTable() {
  const t = useTranslations("home.features");

  const items = Array.from({ length: 10 }, (_, i) => ({
    feature: t(`items.${i}.feature`),
    benefit: t(`items.${i}.benefit`),
  }));

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={i}
                className="group rounded-xl border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{item.feature}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.benefit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
