import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, FileSearch, Briefcase, GraduationCap, UserPlus, Shield } from "lucide-react";

const useCaseIcons = [ClipboardCheck, FileSearch, Briefcase, GraduationCap, UserPlus, Shield];

export function UseCasesGrid() {
  const t = useTranslations("home.useCases");
  const common = useTranslations("common");

  const items = Array.from({ length: 6 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    link: t(`items.${i}.link`),
  }));

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = useCaseIcons[i];
            return (
              <Card key={i} className="flex flex-col transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-3 text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                {item.link && (
                  <CardFooter className="mt-auto">
                    <Link href={item.link}>
                      <Button variant="ghost" size="sm">
                        {common("learnMore")}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
