# Flujo de imágenes

- `productos-originales/` conserva los archivos maestros y no se publica ni se incluye en Git.
- `productos/` contiene exclusivamente las versiones WebP que utiliza la web.
- La conversión limita el lado mayor a 2000 píxeles, corrige la orientación y guarda WebP con calidad 82.
- Para regenerar las imágenes se ejecuta `python3 scripts/optimizar-imagenes.py` desde la raíz del proyecto.
- Cuando dos originales tienen el mismo nombre y distinta extensión, la extensión original se añade al nombre WebP para evitar sobrescrituras.

Los originales no deben borrarse después de la conversión.
