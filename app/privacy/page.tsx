import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lok Capital's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="px-6 py-20">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-navy mb-2">Privacy Policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: April 2025</p>

        <div className="prose max-w-none space-y-10">

          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-navy">1. Introduction</h2>
            <p className="text-muted leading-relaxed mt-3">
              Lok Capital Advisory Private Limited (&ldquo;Lok Capital&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
              committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard information when you visit our website or interact
              with us. Please read this policy carefully. If you disagree with its terms, please
              discontinue use of the site.
            </p>
          </section>

          <section aria-labelledby="collect-heading">
            <h2 id="collect-heading" className="text-navy">2. Information We Collect</h2>
            <p className="text-muted leading-relaxed mt-3">We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted">
              <li><strong>Contact information</strong> — name and email address when you subscribe to our newsletter or submit a contact enquiry.</li>
              <li><strong>Communication data</strong> — the content of messages you send us through the contact form.</li>
              <li><strong>Usage data</strong> — standard server logs including IP address, browser type, pages visited, and time of visit. We do not use third-party tracking cookies.</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              We do not knowingly collect sensitive personal data (e.g., financial account details,
              government ID numbers) through this website.
            </p>
          </section>

          <section aria-labelledby="use-heading">
            <h2 id="use-heading" className="text-navy">3. How We Use Your Information</h2>
            <p className="text-muted leading-relaxed mt-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted">
              <li>Respond to your enquiries and provide requested information.</li>
              <li>Send our newsletter and impact updates (only where you have subscribed).</li>
              <li>Improve and maintain our website and services.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section aria-labelledby="share-heading">
            <h2 id="share-heading" className="text-navy">4. Sharing of Information</h2>
            <p className="text-muted leading-relaxed mt-3">
              We do not sell, trade, or rent your personal information to third parties. We may
              share information with:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted">
              <li><strong>Service providers</strong> — third-party vendors who assist us in operating our website (e.g., hosting, email delivery) under strict confidentiality obligations.</li>
              <li><strong>Legal authorities</strong> — when required by law or to protect our legal rights.</li>
            </ul>
          </section>

          <section aria-labelledby="retention-heading">
            <h2 id="retention-heading" className="text-navy">5. Data Retention</h2>
            <p className="text-muted leading-relaxed mt-3">
              Newsletter subscriber data is retained until you unsubscribe. Contact form submissions
              are retained for up to 12 months or as required by legal obligations. You may request
              deletion at any time (see Section 7).
            </p>
          </section>

          <section aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-navy">6. Security</h2>
            <p className="text-muted leading-relaxed mt-3">
              We implement reasonable administrative, technical, and physical safeguards to protect
              personal information against loss, misuse, and unauthorised access. However, no
              transmission over the internet is completely secure and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section aria-labelledby="rights-heading">
            <h2 id="rights-heading" className="text-navy">7. Your Rights</h2>
            <p className="text-muted leading-relaxed mt-3">You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your information (subject to legal obligations).</li>
              <li>Withdraw consent to receiving marketing communications at any time.</li>
              <li>Lodge a complaint with the relevant data protection authority.</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@lokcapital.com">info@lokcapital.com</a>.
            </p>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2 id="cookies-heading" className="text-navy">8. Cookies</h2>
            <p className="text-muted leading-relaxed mt-3">
              This website uses only essential cookies required for the site to function
              (e.g., session management). We do not use advertising or analytics cookies that
              track you across other websites.
            </p>
          </section>

          <section aria-labelledby="links-heading">
            <h2 id="links-heading" className="text-navy">9. Third-Party Links</h2>
            <p className="text-muted leading-relaxed mt-3">
              Our site may contain links to external websites. We are not responsible for the
              privacy practices of those sites and encourage you to review their privacy policies.
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-navy">10. Changes to This Policy</h2>
            <p className="text-muted leading-relaxed mt-3">
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the
              top of this page will reflect any changes. Continued use of the site after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-navy">11. Contact Us</h2>
            <p className="text-muted leading-relaxed mt-3">
              For any privacy-related questions or requests, please contact:
            </p>
            <address className="not-italic mt-3 text-muted leading-relaxed">
              <strong>Lok Capital Advisory Private Limited</strong><br />
              New Delhi, India<br />
              Email: <a href="mailto:info@lokcapital.com">info@lokcapital.com</a><br />
              Accessibility concerns: <a href="mailto:accessibility@lokcapital.com">accessibility@lokcapital.com</a>
            </address>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="text-accent font-medium">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
