import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Lok Capital's accessibility statement — our commitment to WCAG 2.1 Level AA, SEBI RPwD Act 2016 compliance, and how to report accessibility issues.",
};

export default function AccessibilityPage() {
  return (
    <section aria-labelledby="acc-heading" className="px-6 py-20">
      <div className="max-w-[800px] mx-auto">

        <h1 id="acc-heading" className="text-navy mb-2">Accessibility Statement</h1>
        <p className="text-muted text-sm mb-10">Last updated: May 2026</p>

        <h2 className="text-navy mt-10 mb-4">Our commitment</h2>
        <p className="text-muted leading-relaxed mb-4">
          Lok Capital is committed to ensuring digital accessibility for people with disabilities.
          We continually improve the user experience for everyone and apply relevant accessibility
          standards across our website — <strong>lokcapital.com</strong>.
        </p>

        <h2 className="text-navy mt-10 mb-4">Standards we follow</h2>
        <p className="text-muted leading-relaxed mb-4">
          This website aims to conform to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted mb-4">
          <li><strong>WCAG 2.1 Level AA</strong> — Web Content Accessibility Guidelines</li>
          <li><strong>GIGW</strong> — Guidelines for Indian Government Websites</li>
          <li><strong>IS 17802</strong> — Indian Standards on Accessibility for ICT Products and Services</li>
          <li>
            <strong>Rights of Persons with Disabilities Act, 2016</strong> (RPwD Act) as mandated by
            SEBI Circular No. SEBI/HO/ITD-1/ITD_VIAP/P/CIR/2025/111 (July 31, 2025) and
            SEBI/HO/ITD-1/ITD_VIAP/P/CIR/2025/131 (September 25, 2025)
          </li>
        </ul>

        <h2 className="text-navy mt-10 mb-4">Nodal Officer for accessibility</h2>
        <dl className="space-y-3">
          <div className="flex gap-4">
            <dt className="font-semibold text-ink w-32 shrink-0">Name</dt>
            <dd className="text-muted">[INSERT NODAL OFFICER NAME]</dd>
          </div>
          <div className="flex gap-4">
            <dt className="font-semibold text-ink w-32 shrink-0">Designation</dt>
            <dd className="text-muted">[INSERT DESIGNATION]</dd>
          </div>
          <div className="flex gap-4">
            <dt className="font-semibold text-ink w-32 shrink-0">Email</dt>
            <dd>
              <a href="mailto:accessibility@lokcapital.com" className="text-navy">
                accessibility@lokcapital.com
              </a>
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="font-semibold text-ink w-32 shrink-0">Phone</dt>
            <dd className="text-muted">[INSERT PHONE]</dd>
          </div>
        </dl>

        <h2 className="text-navy mt-10 mb-4">Accessibility grievance mechanism</h2>
        <p className="text-muted leading-relaxed mb-4">
          If you experience any difficulty accessing our website or require content in an alternative
          format (including audio, large print, or Easy Read), please contact us:
        </p>
        <ul className="list-none p-0 space-y-2 mb-4">
          <li>
            <strong>Email: </strong>
            <a href="mailto:accessibility@lokcapital.com" className="text-navy">
              accessibility@lokcapital.com
            </a>
          </li>
        </ul>
        <p className="text-muted">
          We aim to respond to all accessibility queries within <strong>3 working days</strong>.
          Complaints may be escalated to the Nodal Officer if not resolved.
        </p>

        <h2 className="text-navy mt-10 mb-4">Current conformance status</h2>
        <p className="text-muted leading-relaxed mb-4">
          Lok Capital is currently undergoing a comprehensive accessibility audit and remediation
          exercise in compliance with SEBI directives. Our remediation is expected to be complete
          by <strong>July 31, 2026</strong>, in line with SEBI's mandatory deadline.
        </p>
        <p className="text-muted leading-relaxed">
          An IAAP-certified accessibility auditor has been appointed and an accessibility audit
          has been conducted. We are actively implementing the audit recommendations.
        </p>

        <h2 className="text-navy mt-10 mb-4">Assistive technology support</h2>
        <p className="text-muted leading-relaxed mb-3">
          This website has been tested with the following assistive technologies:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted mb-4">
          <li>NVDA screen reader (Windows, Chrome)</li>
          <li>VoiceOver (macOS, iOS)</li>
          <li>TalkBack (Android)</li>
          <li>Keyboard-only navigation</li>
        </ul>

        <h2 className="text-navy mt-10 mb-4">Alternative formats and assisted access</h2>
        <p className="text-muted leading-relaxed mb-3">
          If you require any content in an alternative format or need assisted access to our services,
          please contact <a href="mailto:accessibility@lokcapital.com" className="text-navy">
          accessibility@lokcapital.com</a>. We can provide:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted">
          <li>Documents in accessible Word or tagged PDF format</li>
          <li>Assisted onboarding calls for investors with disabilities</li>
          <li>Alternative KYC verification methods for differently-abled clients</li>
        </ul>

        <h2 className="text-navy mt-10 mb-4">Feedback</h2>
        <p className="text-muted leading-relaxed">
          We welcome feedback on the accessibility of lokcapital.com. If you find any barriers
          or have suggestions for improvement, please email{" "}
          <a href="mailto:accessibility@lokcapital.com" className="text-navy">
            accessibility@lokcapital.com
          </a>.
          Your feedback directly helps us improve.
        </p>

        <div className="mt-12 p-6 bg-cream border border-border rounded-xl text-sm text-muted">
          <p>
            <strong>Regulatory references:</strong><br />
            SEBI/HO/ITD-1/ITD_VIAP/P/CIR/2025/111 (July 31, 2025) |
            SEBI/HO/ITD-1/ITD_VIAP/P/CIR/2025/131 (September 25, 2025) |
            Rights of Persons with Disabilities Act, 2016
          </p>
        </div>
      </div>
    </section>
  );
}
