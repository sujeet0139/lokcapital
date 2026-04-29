"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

const SECTORS   = ["All", "Financial Services", "Food & Agriculture", "Climate", "Healthcare"];
const FUNDS     = ["All Funds", "Lok IV", "Lok III", "Lok II & Earlier"];
const STATUSES  = ["All", "Active", "Exited"];

type Company = {
  name: string; logo: string; logoAlt: string;
  sector: string; fund: string; status: string; description: string;
};

export default function PortfolioPage() {
  const [sector, setSector]   = useState("All");
  const [fund,   setFund]     = useState("All Funds");
  const [status, setStatus]   = useState("All");

  const companies = portfolioData as Company[];

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const matchSector = sector === "All"      || c.sector === sector;
      const matchFund   = fund   === "All Funds"|| c.fund   === fund;
      const matchStatus = status === "All"      || c.status.toLowerCase() === status.toLowerCase();
      return matchSector && matchFund && matchStatus;
    });
  }, [companies, sector, fund, status]);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="portfolio-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="portfolio-heading" className="text-navy mb-4">Our Portfolio</h1>
          <p className="text-muted text-xl max-w-2xl">
            {companies.length}+ investments across Financial Services, Food &amp; Agriculture, Climate, and Healthcare.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section aria-labelledby="filter-heading" className="px-6 py-8 border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="filter-heading" className="sr-only">Filter portfolio companies</h2>
          <div className="flex flex-wrap gap-6">
            {/* Sector filter */}
            <fieldset className="border-0 p-0 m-0">
              <legend className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Sector</legend>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
                {SECTORS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={sector === s}
                    onClick={() => setSector(s)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      sector === s
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-ink border-border hover:border-navy"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Fund filter */}
            <fieldset className="border-0 p-0 m-0">
              <legend className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Fund</legend>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by fund">
                {FUNDS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={fund === f}
                    onClick={() => setFund(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      fund === f
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-ink border-border hover:border-navy"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </section>

      {/* Companies grid */}
      <section aria-labelledby="companies-heading" className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="companies-heading" className="sr-only">
            Portfolio companies — {filtered.length} results
          </h2>
          {/* Live region announces filter changes to screen readers */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {filtered.length} companies shown
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted py-12 text-center">No companies match the selected filters.</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 list-none p-0 m-0">
              {filtered.map((company) => (
                <li key={company.name}>
                  <article
                    aria-labelledby={`co-${company.name.replace(/\s+/g, "-")}`}
                    className="bg-cream border border-border rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow h-full"
                  >
                    <div className="min-h-14 w-full flex items-center justify-center mb-3">
                      {company.logo ? (
                        <Image
                          src={`/${company.logo}`}
                          alt={company.logoAlt || `${company.name} logo`}
                          width={110}
                          height={56}
                          className="object-contain max-h-14 w-auto"
                        />
                      ) : (
                        <span
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white font-bold text-xl"
                          aria-hidden="true"
                        >
                          {company.name[0]}
                        </span>
                      )}
                    </div>
                    <h3
                      id={`co-${company.name.replace(/\s+/g, "-")}`}
                      className="font-semibold text-navy text-sm"
                    >
                      {company.name}
                    </h3>
                    {company.sector && (
                      <p className="text-xs text-muted mt-1">{company.sector}</p>
                    )}
                    {company.fund && (
                      <span className="mt-2 text-xs px-2 py-0.5 bg-navy/10 text-navy rounded-full">
                        {company.fund}
                      </span>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
