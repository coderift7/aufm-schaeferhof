"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";
import { Reveal } from "./Motion";

export default function About() {
  const { about, social } = siteConfig;

  useEffect(() => {
    const btn = document.getElementById("baa-btn");
    const audio = document.getElementById("baa-sound") as HTMLAudioElement;
    if (!btn || !audio) return;
    const handler = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, []);

  return (
    <section id="ueber-uns" className="relative bg-background py-28 lg:py-36">
      <audio id="baa-sound" src={img("/images/baa.mp3")} preload="auto" />
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {about.headline}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 space-y-5 text-base leading-[1.8] text-muted-foreground sm:text-lg">
            {about.paragraphs.map((p, i) => {
              if (p.includes("gem\u00E4\u00E4\u00E4\u00E4ht")) {
                const [before, after] = p.split("gem\u00E4\u00E4\u00E4\u00E4ht");
                return (
                  <p key={i}>
                    {before}
                    <button
                      id="baa-btn"
                      type="button"
                      className="cursor-pointer font-semibold text-primary underline decoration-warm/40 underline-offset-2 transition-colors hover:text-warm"
                    >
                      gem&auml;&auml;&auml;&auml;ht
                    </button>
                    {after}
                  </p>
                );
              }
              return <p key={i}>{p}</p>;
            })}
            <p className="font-medium text-primary">
              Folgt uns gerne auf{" "}
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-warm transition-colors">Instagram</a>
              {" / "}
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-warm transition-colors">Facebook</a>
              {" "}für mehr Einblicke!
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
