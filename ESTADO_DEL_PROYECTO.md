# Estado del proyecto SH Esotéricos

Última actualización: 13 de octubre de 2026.

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
| Kits | 10 |
| Objetos | 5 |
| Pirograbados | 15 |
| San Valentín | 4 |
| Tinturas | 17 |
| Tiradas | 5 |
| Trabajo de brujería | 2 |
| Velas | 30 |
| **Total visible** | **108** |

La revisión técnica confirma 443 referencias de imagen en la versión nueva y ninguna referencia ausente.

El catálogo conserva 112 productos registrados. “Conjunto de runas nórdicas” y los tres productos de Réplicas están marcados como ocultos y no se muestran ni se contabilizan entre los 108 productos visibles; sus fichas e imágenes se mantienen para una futura reubicación. La tarjeta y el filtro de Réplicas también permanecen ocultos en la portada.

El producto “Jabón ritualizado Purifica” se retiró del catálogo el 13 de octubre de 2026. Sus archivos de imagen se conservan para una posible recuperación futura.

La categoría “Jabones” se divide en “Jabones naturales” y “Jabones ritualizados”. Actualmente contiene 14 jabones naturales —eucalipto, lavanda, menta, romero, ruda, tomillo, Alepo y caléndula, incluidas sus variantes de tamaño— y 6 jabones ritualizados. El jabón de lavanda grande se separó de la galería de lavanda estándar para disponer de una ficha propia.

La categoría “Tinturas” se divide en 6 tinturas naturales —eucalipto, hierbabuena, lavanda, menta piperita, romero y vainilla— y 11 tinturas ritualizadas —adivinación, amor, dinero, espiritualidad, felicidad, lujuria, paz, protección, purificación, salud y valor—.

El 13 de octubre de 2026 se incorporó la primera tarifa facilitada por el cliente. Los 20 jabones muestran precio: 6 € para los formatos pequeños o estándar naturales, 8 € para los formatos grandes naturales y 12 € para los ritualizados. También se añadieron los precios confirmados de 8 tinturas —7 € las naturales indicadas y 15 € las ritualizadas indicadas— y de 10 referencias de velas: Búhos, Llaves, Sol, Luna y las seis velas de calavera. Los precios que no tienen todavía una correspondencia inequívoca con un producto del catálogo permanecen como “Consultar precio”.

Las variantes grandes de jabón mantienen la palabra “grande” en el título y muestran un sello circular rojo “GRANDE” superpuesto sobre la fotografía, tanto en las tarjetas del catálogo como en la ficha de detalle. Las variantes pequeñas de ruda y tomillo se presentan sin la palabra “chico”; sus correspondientes piezas cuadradas se identifican como grandes.

“Vela negra del corazón protegido | EDICIÓN LIMITADA” —anteriormente “Corazón entre manos”— y “Vela Ver infidelidad” se trasladaron de la colección San Valentín a la categoría Kits, dentro de la subcategoría “Rituales”. Sus imágenes publicables se reorganizaron respectivamente en `productos/kits/kit-corazon-entre-manos/` y `productos/kits/kit-vela-infidelidad/`.

La ficha “Endulzamiento” utiliza una nueva portada cuadrada sin texto ni precio incrustado, basada en el frasco, los cristales y el símbolo de corazón de la campaña de trabajos de brujería. La lámina informativa con el precio de 40 € se conserva en archivos, pero se retiró de la galería pública; su contenido se trasladó a la descripción textual y la tarjeta utiliza un resumen breve independiente.

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
- La sección “Detrás de SH Esotéricos” presenta a Manu como emprendedor, artesano, brujo y devoto de la Santa Muerte, junto con su trabajo artesanal y las principales familias de productos.
- La tarjeta final de contacto ofrece únicamente accesos mediante iconos a Instagram y WhatsApp; el correo permanece visible como dato, pero ya no aparece como botón hasta completar su configuración.
- La sección “Colecciones temporales” se organiza en dos bloques compactos de tarjetas. “Colección de temporada” contiene San Valentín —activa y enlazada— y reservas todavía vacías para Sant Jordi, Pascua, Halloween y Navidad. “Colección de festividades paganas” presenta Imbolc, Ostara, Beltane, Litha, Lughnasadh, Mabon, Samhain y Yule; actualmente solo Samhain está activa y enlazada.
- Las migas de pan y el enlace de retorno de las fichas conservan el contexto: regresan a la categoría filtrada, a la colección San Valentín o al apartado de servicios correspondiente según el producto.
- La sección “Cómo comprar” cuenta con una secuencia ilustrada propia protagonizada por una misma brujita: vuela y explora el catálogo, consulta un libro, confirma mediante magia y recibe un paquete con el sello SH. Las cuatro escenas adaptables y la referencia reutilizable del personaje se conservan en `assets/images/como-comprar/`.
- El fondo general y los bloques alternos incorporan una trama vectorial repetible de inspiración botánica y esotérica —ramas, luna creciente y destellos— almacenada en `assets/patterns/trama-esoterica.svg`. El mosaico es muy ligero, no requiere una imagen rasterizada y se mantiene discreto tanto en el modo claro como en el oscuro.
- Bajo la navegación principal aparece un banner horizontal y completamente clicable para campañas temporales. La campaña activa es Halloween: reutiliza una imagen ambientada de las velas Calabaza y conduce al catálogo filtrado por “Halloween”. El bloque queda preparado para sustituir texto, imagen y colección según el próximo evento.
- Las seis tarjetas principales de categoría incorporan ilustraciones WebP con transparencia, creadas como una misma familia visual: jabón botánico, vela encendida, kit ritual, tintura, objetos esotéricos y pirograbado. Los recursos se encuentran en `assets/images/categorias/` y se muestran como elementos decorativos que no duplican la información accesible del enlace.

## Pendiente inmediato

1. Continuar el estilo visual definitivo: colores, tipografías y tratamiento fotográfico.
2. Completar los precios pendientes y el resto de datos comerciales: medidas, materiales, disponibilidad y variantes. Falta identificar la correspondencia exacta de los velones pequeño y grande, las velas ritualizadas de dos unidades, la vela Corazón, las tinturas Intuición y Tercer ojo, y los pirograbados por medida; los inciensos de la tarifa todavía no están cargados en el catálogo.
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
