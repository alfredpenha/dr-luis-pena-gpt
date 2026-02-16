type GoogleStaticMapOptions = {
  centerQuery: string;
  zoom: number;
  size: string;
  scale: number;
  maptype: "roadmap" | "satellite" | "terrain" | "hybrid";
  markerColor: string;
};

// NOTE:
// GOOGLE_MAPS_API_KEY is optional. If it is missing we return null and UI shows
// a lightweight fallback CTA without iframe or fake map image.
// Static sites expose this key publicly, so restrict it by HTTP referrer and
// enable only the Google Static Maps API.
export function getGoogleStaticMapUrl({
  centerQuery,
  zoom,
  size,
  scale,
  maptype,
  markerColor,
}: GoogleStaticMapOptions): string {
  const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY;

  const encodedCenter = encodeURIComponent(centerQuery);
  const encodedMarker = encodeURIComponent(`color:${markerColor}|${centerQuery}`);

  const baseUrl =
    "https://maps.googleapis.com/maps/api/staticmap" +
    `?center=${encodedCenter}` +
    `&zoom=${zoom}` +
    `&size=${encodeURIComponent(size)}` +
    `&scale=${scale}` +
    `&maptype=${encodeURIComponent(maptype)}` +
    `&markers=${encodedMarker}`;

  if (!apiKey) {
    return baseUrl;
  }

  return `${baseUrl}&key=${encodeURIComponent(apiKey)}`;
}
