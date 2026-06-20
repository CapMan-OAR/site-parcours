"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          {status === "success" ? (
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
              <p className="mt-4 text-lg font-medium">{t("form.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t("form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t("form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t("form.company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t("form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  {t("form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t("form.messagePlaceholder")}
                  className="bg-background"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">{t("form.error")}</p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "..." : t("form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
