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
    icon: "/images/home-20-2--svg.svg",
    iconW: 160, iconH: 138,
    title: "Financial Services",
    desc: "Products and services that enhance the financial health of individual and small businesses across India.",
  },
  {
    icon: "/images/home-20-3--svg.svg",
    iconW: 146, iconH: 232,
    title: "Food & Agriculture",
    desc: "Interventions in farming practices and value-chain efficiency for enabling production of high quality produce.",
  },
  {
    icon: "/images/home-202898-svg.svg",
    iconW: 188, iconH: 136,
    title: "Climate & Sustainability",
    desc: "Technologies for enabling climate resilience, climate-risk mitigation, resource efficiency and low-GHG production.",
  },
];

const PORTFOLIO_LOGOS = [
  { src: "/images/portfolio/wint-wealth.svg",           alt: "Wint Wealth" },
  { src: "/images/home-aquaconnect-logo-in-blue-lowercase-lette.png", alt: "Aquaconnect" },
  { src: "/images/home-veritas-finance-company-logo-with-styliz.png", alt: "Veritas Finance" },
  { src: "/images/portfolio/superbottoms.png",          alt: "SuperBottoms" },
  { src: "/images/home-wingreens-harvest-logo-with-a-stylized-l.png", alt: "Wingreens Harvest" },
  { src: "/images/portfolio/moneyview.png",             alt: "MoneyView" },
  { src: "/images/portfolio/mintifi.png",               alt: "Mintifi" },
  { src: "/images/portfolio/marut-drones.png",          alt: "Marut Drones" },
  { src: "/images/portfolio/clean-electric.png",        alt: "Clean Electric" },
  { src: "/images/portfolio/aquaconnect.png",           alt: "Aquaconnect" },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 id="hero-heading" className="text-navy mb-6">
              We invest in people who build the future
            </h1>
            <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
              Lok Capital is a pioneering India-focused investment firm established in 2004.
              We have generated above-market risk-adjusted returns while creating significant
              social and environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-navy text-white font-semibold rounded-full no-underline hover:bg-navy-light transition-colors"
              >
                Know more
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full no-underline hover:bg-navy hover:text-white transition-colors"
              >
                View portfolio
              </Link>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-[460px]" aria-hidden="true">
            <Image
              src="/images/home-black-and-white-line-drawing-of-a-person.webp"
              alt=""
              width={460}
              height={500}
              priority
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── 2. FOCUS AREAS (blue background — matches original) ───── */}
      <section aria-labelledby="focus-heading" className="px-6 py-20" style={{ backgroundColor: "#044389" }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 id="focus-heading" className="text-white mb-4">Our focus areas</h2>
          <p className="text-white/70 mb-12 max-w-2xl">
            We invest across three sectors where we see the greatest opportunity for
            financial returns and lasting social impact.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
            {FOCUS.map((f) => (
              <li key={f.title} className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <div className="mb-5">
                  <Image
                    src={f.icon}
                    alt=""
                    width={f.iconW}
                    height={f.iconH}
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. OUR JOURNEY (stats) ────────────────────────────────── */}
      <section aria-labelledby="journey-heading" className="px-6 py-20 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="shrink-0">
              <Image
                src="/images/home-202966-svg.svg"
                alt=""
                width={120}
                height={112}
                aria-hidden="true"
              />
            </div>
            <div className="flex-1">
              <h2 id="journey-heading" className="text-navy mb-10">Our journey</h2>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="text-5xl font-bold text-navy mb-2">{s.number}</dt>
                    <dd className="text-muted text-sm leading-snug">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PORTFOLIO SNAPSHOT ─────────────────────────────────── */}
      <section aria-labelledby="portfolio-snap-heading" className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="portfolio-snap-heading" className="text-navy mb-3">A snapshot of our portfolio</h2>
          <p className="text-muted mb-10 max-w-2xl">
            We back responsible founders building scalable solutions with a focus on sound fundamentals.
          </p>

          {/* Scrolling logo strip */}
          <div className="overflow-hidden" aria-hidden="true">
            <div className="flex gap-12 items-center animate-marquee">
              {[...PORTFOLIO_LOGOS, ...PORTFOLIO_LOGOS].map((logo, i) => (
                <div key={i} className="shrink-0 h-12 flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className="object-contain max-h-10 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Accessible alternative — screen readers see this */}
          <p className="sr-only">
            Portfolio includes: {PORTFOLIO_LOGOS.map((l) => l.alt).join(", ")}, and more.
          </p>

          <div className="mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full no-underline hover:bg-navy hover:text-white transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. OUR REACH (Google Maps) ────────────────────────────── */}
      <section aria-labelledby="reach-map-heading" className="px-6 py-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="reach-map-heading" className="text-navy mb-3">Our reach</h2>
          <p className="text-muted mb-8 max-w-2xl">
            We have supported businesses across the country.
          </p>
          {/* Map placeholder — Google Maps embed goes here once API key is provided */}
          <div
            className="w-full rounded-2xl overflow-hidden border border-border bg-cream flex items-center justify-center"
            style={{ height: 480 }}
            aria-label="Map showing Lok Capital's presence across India"
          >
            <div className="text-center text-muted py-20">
              <Image
                src="/images/home-location-icon-svg.svg"
                alt=""
                width={48}
                height={48}
                className="mx-auto mb-4 opacity-40"
                aria-hidden="true"
              />
              <p className="text-lg font-medium">Interactive map coming soon</p>
              <p className="text-sm mt-1">Portfolio companies span across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. REACH OUT ──────────────────────────────────────────── */}
      <section aria-labelledby="reach-heading" className="px-6 py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 id="reach-heading" className="text-navy mb-4">Reach out to us</h2>
            <p className="text-muted max-w-lg mb-8 leading-relaxed">
              We are keen to hear from you. Reach out to us at{" "}
              <a href="mailto:contact@lokcapital.com" className="text-accent font-medium">
                contact@lokcapital.com
              </a>{" "}
              to explore potential opportunities, partnerships, or just to learn more about our work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-semibold rounded-full no-underline hover:bg-navy-light transition-colors"
            >
              Contact us
            </Link>
          </div>
          <div className="shrink-0 w-full md:w-[420px] relative">
            <Image
              src="/images/home-man-holding-a-tire-in-a-dimly-lit-tire-s.webp"
              alt="A person working in the field — representing Lok Capital's on-the-ground portfolio engagement"
              width={420}
              height={440}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 7. NEWSLETTER ─────────────────────────────────────────── */}
      <section aria-labelledby="newsletter-heading" className="px-6 py-16 bg-white border-t border-border">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 id="newsletter-heading" className="text-navy mb-3">Stay updated</h2>
          <p className="text-muted mb-8">
            Subscribe to receive our latest insights, news, and impact updates.
          </p>
          <NewsletterForm />
          <p className="text-xs text-muted mt-4">
            By subscribing you agree to our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
