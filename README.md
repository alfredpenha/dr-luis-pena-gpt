# Configuracion de mapa estatico (Google Static Maps)

Este proyecto usa un mapa estatico en `Ubicacion y horarios` (sin `iframe` por defecto) para mantener buen rendimiento en SSG.

## Variable opcional

Define `GOOGLE_MAPS_API_KEY` para habilitar la imagen real de Google Static Maps:

```bash
GOOGLE_MAPS_API_KEY=tu_api_key
```

Si no existe la variable, el sitio intenta cargar la URL de Google Static Maps sin `key`.
Google puede limitar o bloquear ese uso; si ocurre, el usuario sigue teniendo el CTA "Abrir en Google Maps".

## Seguridad de la API key

El sitio es estatico, por lo que la key queda expuesta en el cliente. Se recomienda:

1. Restringir por **HTTP referrer** (dominio final de produccion/GitHub Pages).
2. Habilitar solo **Google Static Maps API** para esa key.
3. Evitar habilitar APIs adicionales con la misma key.
