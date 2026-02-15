const ABSOLUTE_OR_SPECIAL_URL_PATTERN = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;

export function withBase(href: string): string {
  if (
    ABSOLUTE_OR_SPECIAL_URL_PATTERN.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");
  const normalizedHref = href.startsWith("/") ? href : `/${href}`;

  return `${normalizedBase}${normalizedHref}` || "/";
}
