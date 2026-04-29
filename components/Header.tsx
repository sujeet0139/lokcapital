"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const NAV = [
  { label: "About",      href: "/about" },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "People",     href: "/people" },
  { label: "Impact",     href: "/impact" },
  { label: "Colloquial", href: "/colloquial" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header role="banner" className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 no-underline" aria-label="Lok Capital — go to homepage">
          <Image
            src="/images/lok-capital-logo.svg"
            alt="Lok Capital"
            width={160}
            height={45}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded text-sm font-medium text-ink hover:text-navy hover:bg-cream no-underline transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} aria-hidden="true" />
          <span className={`block w-6 h-0.5 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} aria-hidden="true" />
          <span className={`block w-6 h-0.5 bg-navy transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" role="navigation" aria-label="Mobile navigation" className="md:hidden border-t border-border bg-white">
          <ul className="list-none m-0 p-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block px-4 py-3 rounded text-base font-medium text-ink hover:bg-cream no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
