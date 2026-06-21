import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://parcours.asbsolutions.fr";
const isPublic = process.env.SITE_PUBLIC === "true";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: {
      default: t("title"),
      template: `%s | PARCOURS by ASB Solutions`,
    },
    description: t("description"),
    keywords: [
      "PARCOURS",
      "ASB Solutions",
      "gestion de processus",
      "workflow collaboratif",
      "bilan de compétences",
      "Qualiopi",
      "plateforme métier",
    ],
    authors: [{ name: "ASB Solutions" }],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `${baseUrl}/${locale}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: "PARCOURS by ASB Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: isPublic,
      follow: isPublic,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PARCOURS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plateforme de gestion de parcours métier collaboratifs pour organismes de formation et d'accompagnement",
    url: baseUrl,
    author: {
      "@type": "Organization",
      name: "ASB Solutions",
      url: baseUrl,
    },
  };

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
