import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Lok Capital allocates capital towards measurable real-world impact — 25 million lives reached, 90% founder satisfaction.",
};

const HIGHLIGHTS = [
  { number: "25 Million+", label: "Lives impacted across portfolio companies" },
  { number: "90%",         label: "of portfolio founders report improved social impact" },
  { number: "70+",         label: "Technical assistance projects funded" },
  { number: "8",           label: "Portfolio companies reached IPO" },
];

const SDGS = [
  "No Poverty (SDG 1)",
  "Zero Hunger (SDG 2)",
  "Good Health and Wellbeing (SDG 3)",
  "Decent Work and Economic Growth (SDG 8)",
  "Reduced Inequalities (SDG 10)",
  "Climate Action (SDG 13)",
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="impact-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="impact-heading" className="text-navy mb-6">
            We allocate capital towards real impact
          </h1>
          <p className="text-muted text-xl max-w-2xl leading-relaxed">
            Our portfolio companies reach millions of underserved Indians — improving financial
            access, food security, and climate resilience.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section aria-labelledby="highlights-heading" className="px-6 py-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="highlights-heading" className="text-navy mb-12">Impact highlights</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="bg-cream rounded-xl p-8 border border-border">
                <dt className="text-4xl font-bold text-navy mb-3">{h.number}</dt>
                <dd className="text-muted leading-relaxed text-sm">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SDG Alignment */}
      <section aria-labelledby="sdg-heading" className="px-6 py-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="sdg-heading" className="text-navy mb-6">SDG alignment</h2>
          <p className="text-muted mb-8 max-w-2xl">
            Our investments are mapped to UN Sustainable Development Goals, ensuring our capital
            drives meaningful progress on the world's most pressing challenges.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-none p-0 m-0">
            {SDGS.map((sdg) => (
              <li key={sdg} className="flex items-center gap-3 bg-cream border border-border rounded-lg px-5 py-4">
                <span className="text-navy font-bold" aria-hidden="true">✓</span>
                <span className="text-ink text-sm font-medium">{sdg}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact Reports */}
      <section aria-labelledby="reports-heading" className="px-6 py-20 bg-navy text-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="reports-heading" className="text-white mb-4">Impact reports</h2>
          <p className="text-white/70 mb-8 max-w-xl">
            Download our annual impact reports to see detailed metrics on our portfolio performance
            and social outcomes.
          </p>
          <ul className="flex flex-wrap gap-4 list-none p-0 m-0">
            {["2025","2024","2023"].map((year) => (
              <li key={year}>
                <a
                  href={`/reports/impact-report-${year}.pdf`}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-navy font-semibold rounded-full no-underline hover:bg-cream transition-colors"
                  aria-label={`Download Lok Capital Impact Report ${year} (PDF)`}
                >
                  Impact Report {year}
                  <span aria-hidden="true">↓</span>
                  <span className="sr-only">(PDF)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
