"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { href } from "@/lib/utils";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-300 focus:border-warm/40 focus:ring-2 focus:ring-warm/10";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="kontakt" className="relative bg-muted py-28 lg:py-36">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left column — Info */}
          <Reveal variants={slideFromLeft}>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
                Kontakt
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {siteConfig.contact.headline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.contact.subheadline}
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-5">
                <a
                  href={`tel:${siteConfig.phone.replace(/[\s-]/g, "")}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <Phone className="h-4 w-4 text-warm" />
                  </div>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    {siteConfig.phone}
                  </span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <MapPin className="h-4 w-4 text-warm" />
                  </div>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    {siteConfig.address}
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-muted-foreground shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all hover:text-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  aria-label="Facebook"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-muted-foreground shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all hover:text-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  aria-label="Instagram"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right column — Form */}
          <Reveal variants={slideFromRight} delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-14 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10"
                    >
                      <CheckCircle2 className="h-7 w-7 text-accent" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-primary">
                      Nachricht gesendet!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {siteConfig.contact.successMessage}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setSending(true);
                      setError("");
                      const form = e.currentTarget;
                      const data = new FormData(form);
                      try {
                        const res = await fetch("https://n8n.hoeger.dev/contact", { method: "POST", body: data });
                        if (res.ok) {
                          setSubmitted(true);
                        } else {
                          setError("Nachricht konnte nicht gesendet werden. Bitte versucht es später erneut.");
                        }
                      } catch {
                        setError("Verbindungsfehler. Bitte versucht es später erneut.");
                      } finally {
                        setSending(false);
                      }
                    }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <input type="text" id="name" name="name" required placeholder="Euer Name" className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                          E-Mail *
                        </label>
                        <input type="email" id="email" name="email" required placeholder="eure@email.de" className={inputClasses} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                        Telefon
                      </label>
                      <input type="tel" id="phone" name="phone" placeholder="Für Rückfragen" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Nachricht *
                      </label>
                      <textarea id="message" name="message" required rows={4} placeholder="Was können wir für euch tun?" className={inputClasses} />
                    </div>
                    {/* Honeypot — hidden from users, catches bots */}
                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                    {error && (
                      <p className="text-sm text-red-500">{error}</p>
                    )}
                    <label className="flex cursor-pointer items-start gap-2.5">
                      <input type="checkbox" required className="mt-0.5 rounded border-border" />
                      <span className="text-xs leading-relaxed text-muted-foreground">
                        Ich stimme der{" "}
                        <a href={href("/datenschutz")} className="text-warm underline underline-offset-2">
                          Datenschutzerklärung
                        </a>{" "}
                        zu. *
                      </span>
                    </label>
                    <button
                      type="submit"
                      disabled={sending}
                      className="group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      {sending ? "Wird gesendet..." : siteConfig.contact.cta}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
