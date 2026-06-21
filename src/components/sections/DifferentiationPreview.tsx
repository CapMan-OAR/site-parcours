import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";

export function DifferentiationPreview() {
  const t = useTranslations("home.differentiation");
  const common = useTranslations("common");

  const items = Array.from({ length: 4 }, (_, i) => ({
    others: t(`items.${i}.others`),
    parcours: t(`items.${i}.parcours`),
  }));

  const points: string[] = [t("points.0"), t("points.1"), t("points.2")];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {t("title")}
        </h2>

        <div className="mt-12 overflow-x-auto rounded-xl border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  {common("othersColumn")}
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">
                  {common("parcoursColumn")}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="px-6 py-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <X className="h-4 w-4 text-red-400" />
                      {item.others}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {item.parcours}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 space-y-2">
          {points.map((point, i) => (
            <p key={i} className="text-sm text-muted-foreground">
              {point}
            </p>
          ))}
        </div>

        <p className="mt-6 text-center font-semibold text-primary">
          {t("conclusion")}
        </p>

        <div className="mt-6 text-center">
          <Link href="/differenciation">
            <Button variant="outline">
              {common("learnMore")}
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
