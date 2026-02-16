# Preview de mapa (sin API key)

La seccion `Ubicacion y horarios` usa una imagen local para el preview del mapa:

- Archivo: `public/images/mapa.png`
- Render: `src/components/ui/MapPreview.astro`
- Integracion: `src/components/sections/LocationHours.astro`

No se usa `iframe` ni Google Static Maps API. El boton "Abrir en Google Maps" sigue llevando a `contact.mapsUrl`.
