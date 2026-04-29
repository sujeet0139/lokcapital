"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsletterForm() {
  const [email, setEmail]     = useState("");
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address (e.g. you@example.com).");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("email", email);
      const res = await fetch("/api/subscribe", { method: "POST", body: fd });
      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p role="status" aria-live="polite" className="text-navy font-semibold py-4">
        Thank you for subscribing! You&rsquo;ll receive our latest updates.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Newsletter subscription form"
      className="flex flex-col sm:flex-row gap-3"
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
          aria-describedby={error ? "newsletter-error" : undefined}
          aria-invalid={!!error}
          placeholder="you@example.com"
          autoComplete="email"
          className={`w-full px-4 py-3 border-2 rounded-full text-ink bg-white focus:border-accent outline-none ${
            error ? "border-red-600" : "border-border"
          }`}
        />
        {error && (
          <p id="newsletter-error" role="alert" className="mt-2 text-sm text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors disabled:opacity-60"
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
