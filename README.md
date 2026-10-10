# SH Esotéricos

Escaparate y catálogo estático para SH Esotéricos. La web permite explorar productos por categorías, buscar y filtrar el catálogo, consultar las fichas y contactar directamente con Manu por WhatsApp, Instagram o correo electrónico.

## Estado actual

- 112 productos catalogados.
- 447 imágenes WebP enlazadas y verificadas.
- Catálogo organizado en jabones, velas, kits, tinturas, objetos, pirograbados, réplicas, tiradas, trabajo de brujería y San Valentín.
- Sin carrito, pagos ni base de datos: los pedidos se confirman directamente con el vendedor.
- Sitio construido con HTML, CSS y JavaScript sin dependencias de ejecución.

La portada activa del nuevo catálogo es `index.html`. La web anterior y el prototipo estructural se conservan dentro de `archivo/`, que queda fuera del despliegue.

## Uso local

Puede abrirse `index.html` directamente en el navegador. Para probarlo mediante HTTP local:

```bash
python3 -m http.server 8000
```

Después, abrir `http://localhost:8000/`.

## Estructura principal

- `index.html`, `estructura.css`, `estructura.js`: portada y navegación del nuevo catálogo.
- `catalogo-productos.js`: fuente única de los datos de producto.
- `catalogo-render.js`: representación de las tarjetas del catálogo.
- `producto-catalogo.html` y `producto-catalogo.js`: ficha genérica de producto.
- `producto-pirograbado.html` y `producto-pirograbado.js`: ficha de pirograbados.
- `contacto.js`: datos de contacto centralizados.
- `productos/`: imágenes WebP utilizadas por la web.
- `productos-originales/`: archivos maestros locales; están excluidos de Git.
- `archivo/`: web anterior, prototipo y catálogos JavaScript anteriores conservados como referencia.
- `scripts/optimizar-imagenes.py`: regeneración de imágenes WebP.

## Imágenes

Los originales se mantienen localmente en `productos-originales/` y no se suben al repositorio. Las copias WebP publicables viven en `productos/`. Consulte `IMAGENES.md` para conocer el flujo completo.

## Contacto configurado

- Vendedor: Manu
- Web: https://sh-esotericos.com/
- Instagram: https://www.instagram.com/sh_esotericos/
- Correo: info@sh-esotericos.com

## Próximos pasos

El estado de trabajo, las decisiones adoptadas y las tareas pendientes se mantienen en `ESTADO_DEL_PROYECTO.md`.
