import type { Options } from "../types";

export function getMessage(text: string, { prefix, suffix, quote }: Options): string {
  const message = `${prefix}${text}${suffix ?? ""}`;

  return quote ? `"${message}"` : message;
}