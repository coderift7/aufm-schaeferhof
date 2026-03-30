"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("/images/logo-aufm-schaeferhof.png")}
            alt="Auf'm Schäferhof Logo"
            className={`h-10 w-10 object-contain transition-all duration-300 ${
              scrolled
                ? ""
                : "invert"
            }`}
          />
          <span
            className={`font-heading text-base font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 sm:flex">
          {siteConfig.nav.map((item) =>
            item.href === "#kontakt" ? (
              <a
                key={item.href}
                href={item.href}
                className={`ml-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`cursor-pointer rounded-full p-2 transition-colors sm:hidden ${
            scrolled ? "text-primary" : "text-white"
          }`}
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl sm:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onPointerUp={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    // Delay scroll so menu close animation doesn't block navigation
                    setTimeout(() => {
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 150);
                  }}
                  className="rounded-xl px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
