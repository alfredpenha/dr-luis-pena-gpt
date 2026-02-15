declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(
  eventName: string,
  payload: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: eventName, ...payload });
}

export {};
