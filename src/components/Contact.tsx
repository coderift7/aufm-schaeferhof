"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-sm transition-all duration-200 focus:border-accent/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent/20";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="relative bg-primary py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,rgba(21,128,61,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal variants={slideFromLeft}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-warm">
                Kontakt
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {siteConfig.contact.headline}
              </h2>
              <p className="mt-4 text-lg text-white/55">
                {siteConfig.contact.subheadline}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08]">
                    <Phone className="h-4 w-4 text-warm" />
                  </div>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-white/60 hover:text-white">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08]">
                    <Mail className="h-4 w-4 text-warm" />
                  </div>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/60 hover:text-white">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08]">
                    <MapPin className="h-4 w-4 text-warm" />
                  </div>
                  <span className="text-sm text-white/60">{siteConfig.address}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight} delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20"
                    >
                      <CheckCircle2 className="h-7 w-7 text-green-400" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-white">Nachricht gesendet!</h3>
                    <p className="mt-2 text-sm text-white/50">{siteConfig.contact.successMessage}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">Name *</label>
                        <input type="text" id="name" required placeholder="Ihr Name" className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">E-Mail *</label>
                        <input type="email" id="email" required placeholder="ihre@email.de" className={inputClasses} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/70">Telefon</label>
                      <input type="tel" id="phone" placeholder="Für Rückfragen" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-white/70">Interesse an</label>
                      <select id="interest" className={inputClasses}>
                        <option value="">Bitte wählen</option>
                        <option value="bock">Zuchtbock</option>
                        <option value="mutter">Mutterschaf</option>
                        <option value="jaehrling">Jährling</option>
                        <option value="beratung">Beratung zur Haltung</option>
                        <option value="besuch">Hofbesuch</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">Nachricht *</label>
                      <textarea id="message" required rows={4} placeholder="Was können wir für Sie tun?" className={inputClasses} />
                    </div>
                    <label className="flex cursor-pointer items-start gap-2">
                      <input type="checkbox" required className="mt-1 rounded border-white/20 bg-white/5" />
                      <span className="text-xs text-white/40">
                        Ich stimme der <a href="/datenschutz" className="text-accent underline">Datenschutzerklärung</a> zu. *
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-warm px-6 py-3.5 font-semibold text-white shadow-[0_4px_16px_rgba(161,98,7,0.3)] transition-all duration-150 hover:bg-warm/90"
                    >
                      <Send className="h-4 w-4" />
                      {siteConfig.contact.cta}
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
