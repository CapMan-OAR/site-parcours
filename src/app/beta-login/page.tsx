"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BetaLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/beta-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        setError("Mot de passe incorrect");
      }
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            padding: "2.5rem",
            background: "white",
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                margin: 0,
                color: "#0ea5e9",
              }}
            >
              Parcours
            </h1>
            <p
              style={{
                marginTop: 8,
                fontSize: "0.875rem",
                color: "#64748b",
              }}
            >
              Accès réservé — version bêta
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              autoFocus
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                outline: "none",
                boxSizing: "border-box",
              }}
            />

            {error && (
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "0.875rem",
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                marginTop: 16,
                padding: "0.75rem",
                fontSize: "1rem",
                fontWeight: 500,
                color: "white",
                background: loading ? "#93c5fd" : "#0ea5e9",
                border: "none",
                borderRadius: 8,
                cursor: loading ? "wait" : "pointer",
              }}
            >
              {loading ? "Vérification…" : "Entrer"}
            </button>
          </form>
        </div>
      </body>
    </html>
  );
}
