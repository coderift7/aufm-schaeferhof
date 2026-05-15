"use client";

import { useEffect } from "react";

export default function HashScroller() {
  useEffect(() => {
    const scrollToCurrentHash = () => {
      const rawHash = window.location.hash.slice(1);
      if (!rawHash) return;

      const target = document.getElementById(decodeURIComponent(rawHash));
      target?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToCurrentHash);
    const timers = [
      window.setTimeout(scrollToCurrentHash, 150),
      window.setTimeout(scrollToCurrentHash, 700),
    ];

    window.addEventListener("hashchange", scrollToCurrentHash);
    window.addEventListener("load", scrollToCurrentHash);

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", scrollToCurrentHash);
      window.removeEventListener("load", scrollToCurrentHash);
    };
  }, []);

  return null;
}
