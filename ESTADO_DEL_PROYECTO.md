# Estado del proyecto SH Esotéricos

Última actualización: 10 de octubre de 2026.

## Objetivo

Construir un pseudo-marketplace estático para presentar el catálogo de SH Esotéricos. La web no procesa compras: cada producto conduce a una consulta directa con el vendedor.

## Decisiones actuales

- Arquitectura estática con HTML, CSS y JavaScript.
- No se utiliza todavía PrestaShop, Medusa, Shopify, una base de datos ni un sistema de pagos.
- `catalogo-productos.js` es la fuente única de datos del catálogo.
- Las imágenes publicables se almacenan dentro del proyecto en formato WebP.
- Los originales de alta resolución permanecen en `productos-originales/` y no se incluyen en Git ni en el despliegue.
- Los contactos están centralizados en `contacto.js`.
- La estética es provisional; la prioridad realizada hasta ahora ha sido la estructura y la funcionalidad.

## Catálogo cargado

| Sección | Productos |
| --- | ---: |
| Jabones | 20 |
| Kits | 8 |
| Objetos | 5 |
| Pirograbados | 16 |
| Réplicas | 3 |
| San Valentín | 4 |
| Tinturas | 17 |
| Tiradas | 5 |
| Trabajo de brujería | 2 |
| Velas | 32 |
| **Total** | **112** |

La revisión técnica confirma 447 referencias de imagen en la versión nueva y ninguna referencia ausente.

## Funcionalidad terminada

- Navegación principal y navegación adaptable a móvil.
- Categorías, subcategorías y colecciones.
- Buscador de productos.
- Filtros y ordenación del catálogo.
- Carga progresiva de tarjetas.
- Fichas de producto con galería.
- Enlaces de contacto por WhatsApp, Instagram y correo.
- Conversión y organización de las imágenes WebP.

## Pendiente inmediato

1. Definir el estilo visual definitivo: identidad, colores, tipografías y tratamiento fotográfico.
2. Decidir si `estructura.html` sustituirá a `index.html` como portada de producción.
3. Completar datos comerciales de los productos: precios, medidas, materiales, disponibilidad y variantes.
4. Revisar textos legales, privacidad, cookies y condiciones de compra antes de publicar.
5. Configurar el correo `info@sh-esotericos.com` y decidir el flujo del formulario de contacto.
6. Elegir el despliegue definitivo entre Hostinger y GitHub/Vercel.
7. Realizar pruebas finales en móvil, escritorio y navegadores principales.

## Datos de contacto

- Responsable comercial: Manu.
- Teléfono y WhatsApp: +34 640 31 97 26.
- Instagram: https://www.instagram.com/sh_esotericos/.
- Correo previsto: info@sh-esotericos.com.
- Dominio: https://sh-esotericos.com/.

## Criterio para continuar

Cada nuevo bloque de trabajo debe actualizar este documento cuando cambie una decisión técnica, se incorpore una categoría o se complete una tarea importante.
