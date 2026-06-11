import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-hand text-2xl text-primary">Get in touch</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
              Magkita tayo. Let's build this together.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you have a question, want to volunteer, or are exploring a partnership — we'd love to hear from you.
            </p>

            <dl className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">✉</span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</dt>
                  <dd className="mt-1 font-medium text-ink">hello@projectabc.ph</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-sky/15 text-sky">f</span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Facebook</dt>
                  <dd className="mt-1 font-medium text-ink">@projectabc.ph</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-plum/15 text-plum">◐</span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Instagram</dt>
                  <dd className="mt-1 font-medium text-ink">@project.abc</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Project ABC location"
                src="https://www.google.com/maps?q=Manila,Philippines&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-7 sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold text-ink">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We reply within 2–3 business days.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="first" />
              <Field label="Last name" name="last" />
              <Field label="Email" name="email" type="email" className="sm:col-span-2" />
              <Field label="I'd like to…" name="topic" as="select" options={["Volunteer", "Donate", "Partner with you", "Just say hi"]} className="sm:col-span-2" />
              <Field label="Message" name="message" as="textarea" className="sm:col-span-2" />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {sent ? "Salamat! We'll be in touch." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  options,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  className?: string;
}) {
  const base = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={4} className={base} />
      ) : as === "select" ? (
        <select name={name} className={base}>
          {options?.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input name={name} type={type} className={base} />
      )}
    </label>
  );
}
