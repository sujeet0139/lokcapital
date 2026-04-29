"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import peopleData from "@/data/people.json";

const CATEGORIES = ["All", "Founders", "Investments", "Operations", "Advisors"];

type Person = {
  name: string; designation: string; category: string;
  photo: string; photoAlt: string; bio: string;
};

export default function PeoplePage() {
  const [category, setCategory] = useState("All");
  const people = peopleData as Person[];

  const filtered = useMemo(() =>
    category === "All" ? people : people.filter((p) => p.category === category),
    [people, category]
  );

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="people-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="people-heading" className="text-navy mb-4">Our team</h1>
          <p className="text-muted text-xl max-w-2xl">
            Held together by shared values, bringing together diverse skill-sets, and aligned with a common purpose.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section aria-labelledby="people-filter-heading" className="px-6 py-6 border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="people-filter-heading" className="sr-only">Filter team by category</h2>
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  category === cat
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-ink border-border hover:border-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* People grid */}
      <section aria-labelledby="team-list-heading" className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="team-list-heading" className="sr-only">Team members</h2>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {filtered.length} team members shown
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 list-none p-0 m-0">
            {filtered.map((person) => (
              <li key={person.name}>
                <article
                  aria-labelledby={`person-${person.name.replace(/\s+/g, "-")}`}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-cream border-2 border-border mb-4">
                    {person.photo ? (
                      <Image
                        src={`/${person.photo}`}
                        alt={person.photoAlt || `Photo of ${person.name}`}
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-navy/10 flex items-center justify-center" aria-hidden="true">
                        <span className="text-navy font-bold text-2xl">
                          {person.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3
                    id={`person-${person.name.replace(/\s+/g, "-")}`}
                    className="font-semibold text-navy text-sm"
                  >
                    {person.name}
                  </h3>
                  <p className="text-xs text-muted mt-1">{person.designation}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
