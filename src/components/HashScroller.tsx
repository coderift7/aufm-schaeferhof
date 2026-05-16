"use client";

import { useEffect } from "react";

export default function HashScroller() {
  useEffect(() => {
    const getHeaderOffset = () => {
      const header = document.querySelector("header");
      const headerBar = header?.firstElementChild;
      return (headerBar?.getBoundingClientRect().height ?? 80) + 16;
    };

    const scrollToCurrentHash = () => {
      const rawHash = window.location.hash.slice(1);
      if (!rawHash) return;

      const target = document.getElementById(decodeURIComponent(rawHash));
      if (!target) return;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        getHeaderOffset();

      window.scrollTo({ top, behavior: "auto" });
    };

    const scheduleScroll = () => {
      const timers = [0, 120, 300, 700, 1200, 2200].map((delay) =>
        window.setTimeout(scrollToCurrentHash, delay)
      );

      return () => timers.forEach((timer) => window.clearTimeout(timer));
    };

    let clearScheduledScroll = scheduleScroll();

    const onHashChange = () => {
      clearScheduledScroll();
      clearScheduledScroll = scheduleScroll();
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("load", onHashChange);

    return () => {
      clearScheduledScroll();
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("load", onHashChange);
    };
  }, []);

  return null;
}
