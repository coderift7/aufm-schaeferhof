"use client";

import { Heart, CloudSun, Scissors, Baby } from "lucide-react";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem, slideFromLeft, slideFromRight } from "./Motion";

const icons = [CloudSun, Baby, Scissors, Heart];

export default function AboutBreed() {
  const { about } = siteConfig;

  return (
    <section id="guteschafe" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Text */}
          <Reveal variants={slideFromLeft}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Die Rasse
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                {about.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {about.text}
              </p>
            </div>
          </Reveal>

          {/* Herde auf der Weide */}
          <Reveal variants={slideFromRight} delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("/images/herde-weide.jpg")}
                alt="Guteschafe auf der Weide in Friesoythe-Markhausen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {about.features.map((feature, i) => {
            const Icon = icons[i] || Heart;
            return (
              <StaggerItem key={i}>
                <div className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/[0.08]">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
