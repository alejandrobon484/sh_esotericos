# Guía de trabajo para SH Esotéricos

## Contexto

Este proyecto es un catálogo estático con apariencia de marketplace. No incluye carrito, pagos ni gestión de pedidos; la conversión termina en un contacto directo con Manu.

## Reglas del proyecto

- Trabajar en español salvo que se solicite otro idioma.
- Tratar `catalogo-productos.js` como fuente única de los productos.
- Mantener los datos de contacto compartidos en `contacto.js`.
- Utilizar `productos/` para las imágenes publicables en WebP.
- No borrar ni versionar `productos-originales/`; contiene los archivos maestros locales.
- No introducir frameworks, bases de datos o servicios externos sin justificar el cambio y acordarlo previamente.
- Conservar accesibilidad básica: textos alternativos, navegación por teclado, etiquetas y estados ARIA.
- Verificar rutas de imágenes y enlaces después de modificar el catálogo.
- Actualizar `ESTADO_DEL_PROYECTO.md` tras decisiones o entregas relevantes.

## Entrada actual de desarrollo

El rediseño comienza en `estructura.html`. `index.html` sigue siendo la portada histórica hasta que se apruebe su sustitución.
