"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  const switchLocale = (locale: "fr" | "en") => {
    router.replace(pathname, { locale });
  };

  const navItems = [
    { href: "/", label: t("platform") },
    {
      label: t("useCases"),
      children: [
        { href: "/cas-usage/bilan-competences", label: t("useCaseBC") },
        { href: "/cas-usage/vae", label: t("useCaseVAE") },
        { href: "/cas-usage/retour-emploi", label: t("useCaseARE") },
      ],
    },
    { href: "/differenciation", label: t("whyUs") },
    { href: "/tarifs", label: t("pricing") },
    { href: "/a-propos", label: t("about") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-light">
            <span className="font-normal text-primary">Parcours</span>
          </span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            by <span className="text-primary">asb</span>solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setUseCasesOpen(true)}
                onMouseLeave={() => setUseCasesOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {useCasesOpen && (
                  <div className="absolute left-0 top-full w-56 rounded-md border bg-background p-1 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        onClick={() => setUseCasesOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={() => switchLocale("fr")}
            className="rounded px-1.5 py-0.5 text-xs text-muted-foreground hover:text-foreground"
          >
            FR
          </button>
          <span className="text-muted-foreground/40">|</span>
          <button
            onClick={() => switchLocale("en")}
            className="rounded px-1.5 py-0.5 text-xs text-muted-foreground hover:text-foreground"
          >
            EN
          </button>
          <Link href="/contact">
            <Button size="sm">{t("demo")}</Button>
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-2 px-3 pt-4">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <button
                onClick={() => { switchLocale("fr"); setMobileOpen(false); }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                FR
              </button>
              <span className="text-muted-foreground/40">|</span>
              <button
                onClick={() => { switchLocale("en"); setMobileOpen(false); }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                EN
              </button>
            </div>
            <div className="px-3 pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">{t("demo")}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
