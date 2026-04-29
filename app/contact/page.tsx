"use client";
import { useState } from "react";

export default function ContactPage() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function set(field: string, value: string) {
    setFields((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.name.trim())    e.name    = "Please enter your full name.";
    if (!fields.email.trim())   e.email   = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                e.email   = "Please enter a valid email address (e.g. you@example.com).";
    if (!fields.subject)        e.subject = "Please select a subject.";
    if (!fields.message.trim()) e.message = "Please enter your message.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (res.ok) {
        setSuccess(true);
        setFields({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section aria-labelledby="contact-heading" className="bg-cream px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 id="contact-heading" className="text-navy mb-4">Contact Us</h1>
          <p className="text-muted text-xl max-w-xl">
            We&rsquo;d love to hear from you &mdash; whether you&rsquo;re a founder, investor, or just curious about our work.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-form-heading" className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 id="contact-form-heading" className="text-navy mb-8">Send us a message</h2>

            {success ? (
              <div role="status" aria-live="polite" className="p-6 bg-cream rounded-2xl border border-border">
                <p className="text-navy font-semibold text-lg mb-2">Message sent!</p>
                <p className="text-muted">Thank you for reaching out. We&rsquo;ll get back to you within 2&ndash;3 working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-6">

                {serverError && (
                  <div role="alert" className="p-4 bg-red-50 border border-red-300 rounded-xl text-red-700 text-sm font-medium">
                    {serverError}
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-2">
                    Full name <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={fields.name}
                    onChange={(e) => set("name", e.target.value)}
                    required
                    aria-required="true"
                    aria-describedby={errors.name ? "err-name" : undefined}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                    className={`w-full px-5 py-3 border-2 rounded-full text-ink bg-white focus:border-accent outline-none ${errors.name ? "border-red-600" : "border-border"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p id="err-name" role="alert" className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-ink mb-2">
                    Email address <span aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={fields.email}
                    onChange={(e) => set("email", e.target.value)}
                    required
                    aria-required="true"
                    aria-describedby={errors.email ? "err-email" : undefined}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                    className={`w-full px-5 py-3 border-2 rounded-full text-ink bg-white focus:border-accent outline-none ${errors.email ? "border-red-600" : "border-border"}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p id="err-email" role="alert" className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-ink mb-2">
                    Subject <span aria-label="required">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={fields.subject}
                    onChange={(e) => set("subject", e.target.value)}
                    required
                    aria-required="true"
                    aria-describedby={errors.subject ? "err-subject" : undefined}
                    aria-invalid={!!errors.subject}
                    className={`w-full px-5 py-3 border-2 rounded-full text-ink bg-white focus:border-accent outline-none ${errors.subject ? "border-red-600" : "border-border"}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="investment">Investment enquiry</option>
                    <option value="portfolio">Portfolio partnership</option>
                    <option value="media">Media &amp; press</option>
                    <option value="accessibility">Accessibility support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p id="err-subject" role="alert" className="mt-1 text-sm text-red-600 font-medium">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-ink mb-2">
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={fields.message}
                    onChange={(e) => set("message", e.target.value)}
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? "err-message" : undefined}
                    aria-invalid={!!errors.message}
                    rows={6}
                    className={`w-full px-5 py-3 border-2 rounded-2xl text-ink bg-white focus:border-accent outline-none resize-y ${errors.message ? "border-red-600" : "border-border"}`}
                    placeholder="Tell us about your enquiry..."
                  />
                  {errors.message && <p id="err-message" role="alert" className="mt-1 text-sm text-red-600 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-navy mb-8">Get in touch</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-ink mb-1">General enquiries</dt>
                <dd>
                  <a href="mailto:contact@lokcapital.com" className="text-accent">
                    contact@lokcapital.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-1">Careers</dt>
                <dd>
                  <a href="mailto:careers@lokcapital.com" className="text-accent">
                    careers@lokcapital.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-1">Accessibility support</dt>
                <dd>
                  <a href="mailto:accessibility@lokcapital.com" className="text-accent">
                    accessibility@lokcapital.com
                  </a>
                  <p className="text-sm text-muted mt-1">
                    For website accessibility issues or to request content in an alternative format.
                    We respond within 3 working days.
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-3">Our Headquarters</dt>
                <dd>
                  <ul className="space-y-5 list-none p-0 m-0">
                    <li>
                      <p className="font-medium text-ink">Chennai</p>
                      <address className="not-italic text-muted text-sm leading-relaxed">
                        6, Seethammal Colony,<br />
                        1st Cross Street, Teynampet,<br />
                        Alwarpet, Chennai,<br />
                        Tamil Nadu 600018, India
                      </address>
                    </li>
                    <li>
                      <p className="font-medium text-ink">Mumbai</p>
                      <address className="not-italic text-muted text-sm leading-relaxed">
                        106-107, Balrama Building,<br />
                        Bandra Kurla Complex Rd, E Block,<br />
                        Bandra East, Mumbai,<br />
                        Maharashtra 400051, India
                      </address>
                    </li>
                    <li>
                      <p className="font-medium text-ink">Gurugram</p>
                      <address className="not-italic text-muted text-sm leading-relaxed">
                        418, Time Tower,<br />
                        MG Road, Sector 28,<br />
                        Near MG Road Metro Station,<br />
                        Gurugram, Haryana 122 002, India
                      </address>
                    </li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink mb-1">Whistleblower</dt>
                <dd>
                  <a href="mailto:vmehta@lokcapital.com" className="text-accent">
                    vmehta@lokcapital.com
                  </a>
                  <span className="text-muted"> or </span>
                  <a href="mailto:compliance@lokcapital.com" className="text-accent">
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
