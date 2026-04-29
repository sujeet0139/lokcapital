import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-navy text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-bold text-xl mb-3">Lok Capital</p>
            <p className="text-sm text-white/70 leading-relaxed">
              India-focused impact investment firm established in 2004.
            </p>
          </div>

          {/* Portfolio */}
          <nav role="navigation" aria-label="Portfolio navigation">
            <h2 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/60">Portfolio</h2>
            <ul className="list-none p-0 m-0 space-y-2">
              {["Finance","Agriculture","Climate","Healthcare"].map(s => (
                <li key={s}>
                  <Link href={`/portfolio?sector=${s}`} className="text-sm text-white/80 hover:text-white no-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colloquial */}
          <nav role="navigation" aria-label="Colloquial navigation">
            <h2 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/60">Colloquial</h2>
            <ul className="list-none p-0 m-0 space-y-2">
              {["Interviews","News","Blog","Videos","Impact Reports"].map(c => (
                <li key={c}>
                  <Link href={`/colloquial?category=${c}`} className="text-sm text-white/80 hover:text-white no-underline">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav role="navigation" aria-label="Legal and accessibility navigation">
            <h2 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/60">Legal</h2>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><Link href="/privacy" className="text-sm text-white/80 hover:text-white no-underline">Privacy Policy</Link></li>
              <li><Link href="/regulatory" className="text-sm text-white/80 hover:text-white no-underline">Regulatory Information</Link></li>
              <li>
                <Link href="/accessibility" className="text-sm text-white font-semibold hover:text-white/80 no-underline underline underline-offset-2">
                  ♿ Accessibility Statement
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-white/60">© 2024 Lok Capital. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social links with accessible labels */}
            <a href="https://www.linkedin.com/company/lok-capital" target="_blank" rel="noopener noreferrer"
               aria-label="Follow Lok Capital on LinkedIn (opens in new window)"
               className="text-white/70 hover:text-white no-underline text-sm">
              LinkedIn <span className="sr-only">(opens in new window)</span>
            </a>
            <a href="https://twitter.com/lokcapital" target="_blank" rel="noopener noreferrer"
               aria-label="Follow Lok Capital on Twitter (opens in new window)"
               className="text-white/70 hover:text-white no-underline text-sm">
              Twitter <span className="sr-only">(opens in new window)</span>
            </a>
          </div>
        </div>

        {/* SEBI compliance notice */}
        <div className="mt-6 p-4 bg-white/10 rounded-lg text-xs text-white/60 leading-relaxed">
          <p>
            Lok Capital is committed to digital accessibility for Persons with Disabilities (PwDs) as mandated by
            SEBI Circular No. SEBI/HO/ITD-1/ITD_VIAP/P/CIR/2025/111 (July 31, 2025) and the Rights of Persons
            with Disabilities Act, 2016. This website conforms to WCAG 2.1 Level AA.
          </p>
          <p className="mt-2">
            Accessibility grievances:{" "}
            <a href="mailto:accessibility@lokcapital.com" className="text-white/80 hover:text-white">
              accessibility@lokcapital.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
