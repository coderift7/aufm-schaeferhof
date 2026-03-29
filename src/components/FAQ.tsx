"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

const linkClass = "text-warm underline underline-offset-2 hover:text-primary transition-colors";

const linkMap: Record<string, { label: string; href: string; external?: boolean }> = {
  instagram: { label: "Instagram", href: siteConfig.social.instagram, external: true },
  facebook: { label: "Facebook", href: siteConfig.social.facebook, external: true },
  homepage_author: { label: "Michael H\u00F6ger", href: "" },
};

function renderAnswer(text: string): ReactNode[] {
  const parts = text.split(/\{(\w+)\}/);
  return parts.map((part, i) => {
    const link = linkMap[part];
    if (link) {
      if (!link.href) return <strong key={i}>{link.label}</strong>;
      return (
        <a
          key={i}
          href={link.href}
          className={linkClass}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link.label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
              Häufige Fragen
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Gut zu wissen
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="mt-14 space-y-3" staggerDelay={0.06}>
          {siteConfig.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <StaggerItem key={i}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-warm/20 bg-card shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                      : "border-border bg-card hover:border-warm/10"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="pr-4 font-heading text-[15px] font-semibold text-primary">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25 },
                        }}
                      >
                        <p className="px-6 pb-5 text-[15px] leading-[1.75] text-muted-foreground">
                          {renderAnswer(item.answer)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
