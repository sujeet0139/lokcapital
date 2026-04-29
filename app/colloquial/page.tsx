"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import colloquialData from "@/data/colloquial.json";

const CATEGORIES = ["All", "Interviews", "News", "Blog", "Videos", "Impact Reports"];

type Post = {
  title: string; href: string; category: string;
  image: string; imageAlt: string; excerpt: string;
};

export default function ColloquialPage() {
  const [category, setCategory] = useState("All");
  const posts = colloquialData as Post[];

  const filtered = useMemo(() =>
    category === "All" ? posts : posts.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    ),
    [posts, category]
  );

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="colloquial-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="colloquial-heading" className="text-navy mb-4">Colloquial</h1>
          <p className="text-muted text-xl max-w-2xl">
            Interviews, news, blogs, videos, and impact reports from Lok Capital and our portfolio.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section aria-labelledby="col-filter-heading" className="px-6 py-6 border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="col-filter-heading" className="sr-only">Filter by content type</h2>
          <div role="group" aria-label="Filter by content category" className="flex flex-wrap gap-2">
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

      {/* Posts grid */}
      <section aria-labelledby="posts-heading" className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 id="posts-heading" className="sr-only">Articles and content</h2>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {filtered.length} items shown
          </div>
          {filtered.length === 0 ? (
            <p className="text-muted py-12 text-center">No content found for this category.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
              {filtered.map((post, i) => (
                <li key={`${post.title}-${i}`}>
                  <article
                    aria-labelledby={`post-${i}`}
                    className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col"
                  >
                    <div className="bg-cream h-40 flex items-center justify-center px-6" aria-hidden="true">
                      <span className="text-navy/30 text-5xl font-bold">
                        {post.category?.[0] || "L"}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      {post.category && (
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                          {post.category}
                        </span>
                      )}
                      <h3 id={`post-${i}`} className="font-bold text-navy text-base leading-snug mb-3">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                      )}
                      {post.href ? (
                        <Link
                          href={post.href}
                          className="text-sm font-semibold text-navy hover:text-accent mt-auto"
                          aria-label={`Read more about ${post.title}`}
                          {...(post.href.startsWith("http") ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          } : {})}
                        >
                          Read more
                          {post.href.startsWith("http") && (
                            <span className="sr-only"> (opens in new window)</span>
                          )}
                          <span aria-hidden="true"> →</span>
                        </Link>
                      ) : null}
                    </div>
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
