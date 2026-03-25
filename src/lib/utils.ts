import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/aufm-schaeferhof" : "";

export function img(path: string) {
  return `${basePath}${path}`;
}

export function href(path: string) {
  return `${basePath}${path}`;
}
