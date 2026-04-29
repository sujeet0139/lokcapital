import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lok Capital — our story, investment approach, and the philosophy behind our focus on people and impact.",
};

const FUNDS = [
  { name: "Lok Fund I",   year: "2006", size: "$22M",  focus: "Financial Services" },
  { name: "Lok Fund II",  year: "2010", size: "$64M",  focus: "Financial Services, Agriculture, Health, Education" },
  { name: "Lok Fund III", year: "2016", size: "$105M", focus: "Financial Services, Agriculture, Health" },
  { name: "Lok Fund IV",  year: "2022", size: "$150M target", focus: "Financial Services, Agriculture, Climate" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="about-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="about-heading" className="text-navy mb-6">About Lok Capital</h1>
          <p className="text-muted text-xl max-w-2xl leading-relaxed">
            The name "Lok" derives from Sanskrit meaning "people" — reflecting our core philosophy
            of investing in human potential across our entire ecosystem.
          </p>
        </div>
      </section>

      {/* Investment Approach */}
      <section aria-labelledby="approach-heading" className="px-6 py-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 id="approach-heading" className="text-navy mb-6">Investment approach</h2>
            <p className="text-muted leading-relaxed mb-4">
              Lok Capital is an India-focused investment firm established in 2004. We pursue financially
              sound investments in enterprises addressing social and environmental challenges.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              We target Series A to C stage companies where product-market fit has been established,
              with proven revenue traction and clear paths to profitability. We underwrite execution
              risk rather than technological risk.
            </p>
            <p className="text-muted leading-relaxed">
              We provide more than capital — offering technical assistance in technology, marketing,
              strategy, operations, sustainability, and R&amp;D.
            </p>
          </div>
          <div>
            <h2 className="text-navy mb-6">What we look for</h2>
            <ul className="list-none p-0 m-0 space-y-4">
              {[
                "Series A to C stage companies",
                "Proven product-market fit with revenue traction",
                "Clear path to profitability",
                "Tech-enabled business models",
                "Measurable social or environmental impact",
                "Strong founding team aligned with mission",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="text-navy font-bold mt-0.5" aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investment ticket */}
      <section aria-labelledby="ticket-heading" className="px-6 py-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="ticket-heading" className="text-navy mb-6">How much do we invest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-xl p-8 border border-border">
              <p className="text-4xl font-bold text-navy mb-2">USD 3–18M</p>
              <p className="text-muted">Investment ticket size per company</p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-border">
              <p className="text-4xl font-bold text-navy mb-2">80%</p>
              <p className="text-muted">of founders reported improved value from our partnership</p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-border">
              <p className="text-4xl font-bold text-navy mb-2">82</p>
              <p className="text-muted">NPS score among former portfolio companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund history */}
      <section aria-labelledby="funds-heading" className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="funds-heading" className="text-navy mb-10">Our fund history</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left" role="table">
              <caption className="sr-only">Lok Capital fund history — name, year, size, and focus</caption>
              <thead>
                <tr className="border-b-2 border-navy">
                  <th scope="col" className="py-3 pr-8 font-semibold text-navy">Fund</th>
                  <th scope="col" className="py-3 pr-8 font-semibold text-navy">Year</th>
                  <th scope="col" className="py-3 pr-8 font-semibold text-navy">Size</th>
                  <th scope="col" className="py-3 font-semibold text-navy">Focus sectors</th>
                </tr>
              </thead>
              <tbody>
                {FUNDS.map((f, i) => (
                  <tr key={f.name} className={`border-b border-border ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}>
                    <td className="py-4 pr-8 font-semibold text-navy">{f.name}</td>
                    <td className="py-4 pr-8 text-muted">{f.year}</td>
                    <td className="py-4 pr-8 text-muted">{f.size}</td>
                    <td className="py-4 text-muted">{f.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
