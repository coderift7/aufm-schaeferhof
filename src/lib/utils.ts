import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath = "/aufm-schaeferhof";

export function img(path: string) {
  return `${basePath}${path}`;
}
