"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-3">
              <span className="text-xl font-light">
                <span className="font-normal text-primary">Parcours</span>
              </span>
              <div className="text-xs text-muted-foreground">
                by <span className="text-primary">asb</span>solutions
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t("platform")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("platform")}
                </Link>
              </li>
              <li>
                <Link
                  href="/differenciation"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("whyUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("pricing")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t("useCases")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cas-usage/bilan-competences"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("useCaseBC")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cas-usage/vae"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("useCaseVAE")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cas-usage/retour-emploi"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("useCaseARE")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t("company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ASB Solutions. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
