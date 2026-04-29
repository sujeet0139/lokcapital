import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Lok Capital — for investment enquiries, partnership opportunities, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="contact-heading" className="text-navy mb-4">Contact Us</h1>
          <p className="text-muted text-xl max-w-xl">
            We'd love to hear from you — whether you're a founder, investor, or just curious about our work.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-form-heading" className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 id="contact-form-heading" className="text-navy mb-8">Send us a message</h2>
            <form
              action="/api/contact"
              method="POST"
              noValidate
              aria-label="Contact form"
              className="space-y-6"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-2">
                  Full name <span aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  aria-required="true"
                  autoComplete="name"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-ink bg-white focus:border-accent outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-ink mb-2">
                  Email address <span aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-ink bg-white focus:border-accent outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-semibold text-ink mb-2">
                  Subject <span aria-label="required">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-ink bg-white focus:border-accent outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="investment">Investment enquiry</option>
                  <option value="portfolio">Portfolio partnership</option>
                  <option value="media">Media &amp; press</option>
                  <option value="accessibility">Accessibility support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-ink mb-2">
                  Message <span aria-label="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-required="true"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-ink bg-white focus:border-accent outline-none resize-y"
                  placeholder="Tell us about your enquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-navy mb-8">Get in touch</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-ink mb-1">Office</dt>
                <dd className="text-muted leading-relaxed">
                  Lok Capital<br />
                  New Delhi, India
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-1">General enquiries</dt>
                <dd>
                  <a href="mailto:info@lokcapital.com" className="text-navy">
                    info@lokcapital.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-1">Accessibility support</dt>
                <dd>
                  <a href="mailto:accessibility@lokcapital.com" className="text-navy">
                    accessibility@lokcapital.com
                  </a>
                  <p className="text-sm text-muted mt-1">
                    For website accessibility issues or to request content in an alternative format.
                    We respond within 3 working days.
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-1">Whistleblower</dt>
                <dd>
                  <a href="mailto:vmehta@lokcapital.com" className="text-navy">
                    vmehta@lokcapital.com
                  </a>
                  <span className="text-muted"> or </span>
                  <a href="mailto:compliance@lokcapital.com" className="text-navy">
                    compliance@lokcapital.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
