import { parseTrackEventName, trackEvent } from "@/scripts/track";

const allowedSources = new Set(["header", "hero", "location", "footer"]);

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const element = target.closest("[data-track-event]");
  if (!(element instanceof HTMLElement)) {
    return;
  }

  const eventName = parseTrackEventName(element.dataset.trackEvent ?? null);
  if (!eventName) {
    return;
  }

  const source = element.dataset.trackSource;
  if (!source || !allowedSources.has(source)) {
    return;
  }

  const href = element instanceof HTMLAnchorElement ? element.href : undefined;
  const label =
    element.getAttribute("aria-label") ??
    element.textContent?.trim() ??
    undefined;

  trackEvent(eventName, {
    source,
    href,
    label,
  });
});
