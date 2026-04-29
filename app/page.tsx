import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "We invest in people who build the future | Lok Capital",
  description:
    "Lok Capital is an India-focused impact investment firm established in 2004, investing in tech-enabled enterprises addressing social and environmental challenges.",
};

const STATS = [
  { number: "47+",  label: "Investments" },
  { number: "8",    label: "IPOs" },
  { number: "83%",  label: "Profitable Exits" },
  { number: "70+",  label: "Technical Assistance Projects" },
];

const FOCUS = [
  {
    title: "Financial Services",
    desc:  "Products and services that enhance the financial health of individuals and small businesses across India.",
  },
  {
    title: "Food & Agriculture",
    desc:  "Interventions in farming practices and value-chain efficiency for enabling production of high quality produce.",
  },
  {
    title: "Climate & Sustainability",
    desc:  "Technologies for enabling climate resilience, climate-risk mitigation, resource efficiency and low-GHG production.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 id="hero-heading" className="text-navy font-bold mb-6 max-w-2xl">
              We invest in people who build the future
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Lok Capital is an India-focused investment firm established in 2004. We back tech-enabled
              enterprises addressing social and environmental challenges — from financial inclusion to
              climate resilience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-navy text-white font-semibold rounded no-underline hover:bg-navy-light transition-colors"
              >
                Know more about us
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-3 border-2 border-navy text-navy font-semibold rounded no-underline hover:bg-navy hover:text-white transition-colors"
              >
                View our portfolio
              </Link>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-[480px]" aria-hidden="true">
            <Image
              src="/images/hero.webp"
              alt=""
              width={480}
              height={368}
              priority
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-labelledby="stats-heading" className="px-6 py-16 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="stats-heading" className="sr-only">Our impact in numbers</h2>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-4xl font-bold text-navy">{s.number}</dt>
                <dd className="text-muted mt-1 text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Focus Areas */}
      <section aria-labelledby="focus-heading" className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="focus-heading" className="text-navy mb-4">Our focus areas</h2>
          <p className="text-muted mb-12 max-w-2xl">
            We invest across three sectors where we see the greatest opportunity for financial returns
            and lasting social impact.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
            {FOCUS.map((f) => (
              <li key={f.title} className="bg-cream rounded-xl p-8 border border-border">
                <h3 className="text-navy font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-muted leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — Portfolio */}
      <section aria-labelledby="portfolio-cta-heading" className="bg-navy text-white px-6 py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 id="portfolio-cta-heading" className="text-white mb-3">47+ investments across India</h2>
            <p className="text-white/70 max-w-xl">
              From Wint Wealth to Aquaconnect, our portfolio spans financial services, agri-tech,
              and climate solutions.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 inline-flex items-center px-8 py-3 bg-white text-navy font-bold rounded no-underline hover:bg-cream transition-colors"
          >
            Explore the portfolio
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section aria-labelledby="newsletter-heading" className="px-6 py-16 bg-cream">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 id="newsletter-heading" className="text-navy mb-3">Stay updated</h2>
          <p className="text-muted mb-8">
            Subscribe to receive our latest insights, news, and impact updates.
          </p>
          <NewsletterForm />
          <p className="text-xs text-muted mt-3">
            By subscribing you agree to our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
