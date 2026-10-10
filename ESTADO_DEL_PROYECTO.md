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
- La identidad local incorpora un logotipo cuadrado negro y dorado, con sus variantes para cabecera, favicon, Apple Touch Icon y PWA en `assets/branding/`.
- `assets/characters/` contiene una primera propuesta reutilizable de Manu con fondo transparente, pendiente de aprobación antes de integrarla en escenas de la tienda.
- `index.html` ya contiene el nuevo catálogo y es la portada preparada para producción.
- La web anterior se conserva en `archivo/web-anterior/` y está excluida del despliegue mediante `.vercelignore`.

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
- Paquete de iconos del sitio y manifest web enlazados en todas las páginas activas.
- Imágenes de portada, colección San Valentín y taller artesanal de Manu integradas en WebP con variantes adaptables de 768 y 1536 píxeles; la escena activa de Manu es la revisión `v2` de constitución ligeramente más delgada.
- Selector claro/oscuro disponible en todas las páginas mediante una vela artesanal: apagada en modo claro y encendida en modo oscuro. Respeta el sistema y guarda la elección localmente.
- La sección “Detrás de SH Esotéricos” presenta a Manu, su trabajo artesanal y las principales familias de productos sin utilizar ya texto provisional.
- La tarjeta final de contacto ofrece únicamente accesos mediante iconos a Instagram y WhatsApp; el correo permanece visible como dato, pero ya no aparece como botón hasta completar su configuración.

## Pendiente inmediato

1. Continuar el estilo visual definitivo: colores, tipografías y tratamiento fotográfico.
2. Completar datos comerciales de los productos: precios, medidas, materiales, disponibilidad y variantes.
3. Revisar textos legales, privacidad, cookies y condiciones de compra antes de publicar.
4. Configurar el correo `info@sh-esotericos.com` y decidir el flujo del formulario de contacto.
5. Configurar el despliegue de GitHub hacia Hostinger.
6. Realizar pruebas finales en móvil, escritorio y navegadores principales.

## Datos de contacto

- Responsable comercial: Manu.
- Teléfono y WhatsApp: +34 640 31 97 26.
- Instagram: https://www.instagram.com/sh_esotericos/.
- Correo previsto: info@sh-esotericos.com.
- Dominio: https://sh-esotericos.com/.

## Criterio para continuar

Cada nuevo bloque de trabajo debe actualizar este documento cuando cambie una decisión técnica, se incorpore una categoría o se complete una tarea importante.
