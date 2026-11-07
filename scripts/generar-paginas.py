#!/usr/bin/env python3
"""Genera las páginas estáticas indexables a partir de catalogo-productos.js.

Uso, desde la raíz del proyecto:
    python3 scripts/generar-paginas.py

Crea, borrando antes su contenido anterior:
    producto/<id>/index.html     una ficha por producto visible
    categoria/<slug>/index.html  una página por categoría
    coleccion/<slug>/index.html  una página por colección de temporada
    aviso-legal/, privacidad/, cookies/, condiciones/  páginas legales (noindex)
    sitemap.xml

Debe ejecutarse cada vez que cambie catalogo-productos.js. Las páginas
generadas se versionan en Git porque Hostinger publica el repositorio tal cual.
"""

import html
import json
import re
import shutil
from pathlib import Path
from urllib.parse import quote, unquote

from PIL import Image

DOMINIO = 'https://sh-esotericos.com'
RAIZ = Path(__file__).resolve().parent.parent
TIENDA_ID = f'{DOMINIO}/#tienda'
WHATSAPP = '34640319726'
INSTAGRAM = 'https://www.instagram.com/sh_esotericos/'
ARTESANALES = {'jabones', 'velas', 'tinturas', 'pictografia', 'kits', 'san-valentin'}
SERVICIOS = {'tiradas', 'trabajos'}

CATEGORIAS = {
    'jabones': {
        'nombre': 'Jabones',
        'slug': 'jabones',
        'titulo': 'Jabones artesanales naturales y ritualizados | SH Esotéricos',
        'h1': 'Jabones artesanales naturales y ritualizados',
        'tipo': 'Jabón artesanal',
        'intro': 'Jabones elaborados a mano por Manu en Barcelona. Los jabones naturales llevan plantas como eucalipto, lavanda, menta, romero, ruda, tomillo o caléndula, e incluyen también jabón de Alepo; varios se presentan en formato estándar y grande. Los jabones ritualizados —Amor, Bruja, Suerte, Dinero, Protege y Psíquico— se preparan con una intención concreta para acompañar tus rituales.',
    },
    'velas': {
        'nombre': 'Velas',
        'slug': 'velas',
        'titulo': 'Velas artesanales y ritualizadas en Barcelona | SH Esotéricos',
        'h1': 'Velas artesanales y ritualizadas',
        'tipo': 'Vela artesanal',
        'intro': 'Velas hechas a mano en Barcelona: velas de la Santa Muerte en forma de calavera, velas rituales para la protección, la suerte o el amor, velas de aromaterapia y ediciones de temporada para Halloween, Navidad y San Valentín. Consulta colores, medidas y disponibilidad directamente con Manu.',
    },
    'kits': {
        'nombre': 'Kits rituales',
        'slug': 'kits',
        'titulo': 'Kits rituales artesanales | SH Esotéricos',
        'h1': 'Kits rituales',
        'tipo': 'Kit ritual',
        'intro': 'Kits preparados por Manu con lo necesario para un ritual o un regalo: kits de jabón y bálsamo, kit de limpieza energética, kit de velas de la suerte y kits de temporada para la Noche de San Juan y Samhain.',
    },
    'tinturas': {
        'nombre': 'Tinturas',
        'slug': 'tinturas',
        'titulo': 'Tinturas y esencias naturales y ritualizadas | SH Esotéricos',
        'h1': 'Tinturas y esencias naturales y ritualizadas',
        'tipo': 'Tintura artesanal',
        'intro': 'Esencias artesanales en dos líneas: tinturas naturales de eucalipto, hierbabuena, lavanda, menta piperita, romero y vainilla, y tinturas ritualizadas para la adivinación, el amor, el dinero, la protección, la purificación y otras intenciones.',
    },
    'objetos': {
        'nombre': 'Objetos',
        'slug': 'objetos',
        'titulo': 'Objetos esotéricos y bálsamos naturales | SH Esotéricos',
        'h1': 'Objetos esotéricos, bálsamos y complementos',
        'tipo': 'Objeto esotérico',
        'intro': 'Bálsamos naturales de limón, menta, romero y tomillo, pulseras de 7 nudos, un adorno de cráneo realista para Halloween y réplicas como los dados de Insidious.',
    },
    'pictografia': {
        'nombre': 'Pirograbados',
        'slug': 'pirograbados',
        'titulo': 'Pirograbados artesanales en madera | SH Esotéricos',
        'h1': 'Pirograbados artesanales en madera',
        'tipo': 'Pirograbado artesanal',
        'intro': 'Pirograbados sobre madera realizados a mano por Manu: lobos, fénix, cuervos, colibríes, árboles de la vida y simbología nórdica y celta como el Valknut, la trisqueta, la cruz celta o el nudo celta. Piezas para decorar, coleccionar o regalar.',
    },
    'tiradas': {
        'nombre': 'Tiradas',
        'slug': 'tiradas',
        'titulo': 'Tiradas de tarot y oráculo en Barcelona | SH Esotéricos',
        'h1': 'Tiradas de tarot y oráculo',
        'tipo': 'Tirada',
        'intro': 'Tiradas realizadas por Manu: tirada sencilla de tarot, tirada de Cruz Celta y lecturas con los oráculos de María Aranguren, de la Santa Muerte y de la Bruja Verde. Desde 5 €; consulta disponibilidad y la forma de realizar la lectura.',
    },
    'trabajos': {
        'nombre': 'Trabajos y lecturas',
        'slug': 'trabajos',
        'titulo': 'Trabajos de brujería y lecturas en Barcelona | SH Esotéricos',
        'h1': 'Trabajos de brujería y lecturas',
        'tipo': 'Trabajo de brujería',
        'intro': 'Trabajos personalizados —endulzamiento, amor propio, volteo y abre caminos— y lecturas de tarot, oráculo y runas. Cada trabajo se valora antes con Manu, que te explicará disponibilidad, condiciones y precio.',
    },
}

COLECCIONES = {
    'Halloween': {
        'nombre': 'Halloween',
        'slug': 'halloween',
        'titulo': 'Velas de Halloween artesanales | SH Esotéricos',
        'h1': 'Colección de Halloween',
        'intro': 'Velas artesanales de Halloween —calabazas, fantasmas mascota, fantasmas pequeños y fantasma con gorro de bruja— y un adorno de cráneo realista para decorar la noche más mágica del año.',
    },
    'Navidad': {
        'nombre': 'Navidad',
        'slug': 'navidad',
        'titulo': 'Velas de Navidad artesanales | SH Esotéricos',
        'h1': 'Colección de Navidad',
        'intro': 'Velas artesanales de Navidad: árboles, gnomos y un velón azul navideño, hechos a mano para decorar o regalar.',
    },
    'San Valentín': {
        'nombre': 'San Valentín',
        'slug': 'san-valentin',
        'titulo': 'Velas y sets de San Valentín | SH Esotéricos',
        'h1': 'Colección de San Valentín',
        'intro': 'Velas y sets para San Valentín: cubo de corazones, vela Pareja, Pareja entre alas y los sets Amor y Lujuria, en versión individual y dúo.',
    },
    'Noche de San Juan': {
        'nombre': 'Noche de San Juan',
        'slug': 'noche-de-san-juan',
        'titulo': 'Kits rituales para la Noche de San Juan | SH Esotéricos',
        'h1': 'Kits para la Noche de San Juan',
        'intro': 'Dos kits rituales preparados para la Noche de San Juan, la celebración del solsticio de verano que en la rueda del año pagana se conoce como Litha.',
    },
    'Samhain': {
        'nombre': 'Samhain',
        'slug': 'samhain',
        'titulo': 'Kit ritual de Samhain | SH Esotéricos',
        'h1': 'Colección de Samhain',
        'intro': 'Kit ritual de Samhain con velón, bolsa y pieza pirograbada para celebrar el inicio del año nuevo celta, la noche del 31 de octubre.',
    },
}

PUNTOS_POR_DEFECTO = [
    'Consulta directa y personalizada.',
    'Información adicional disponible bajo consulta.',
    'Disponibilidad sujeta a confirmación.',
]

ACTUALIZACION_LEGAL = '2 de noviembre de 2026'

TITULAR = {
    'nombre': 'Manuel Martín Domínguez',
    'nif': '46785189S',
    'localidad': '08820 El Prat de Llobregat (Barcelona)',
    'email': 'info@sh-esotericos.com',
    'telefono': '+34 640 31 97 26',
}

DATOS_TITULAR = f'''<ul>
        <li><strong>Titular:</strong> {TITULAR['nombre']}</li>
        <li><strong>NIF:</strong> {TITULAR['nif']}</li>
        <li><strong>Nombre comercial:</strong> SH Esotéricos</li>
        <li><strong>Localidad:</strong> {TITULAR['localidad']}</li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:{TITULAR['email']}">{TITULAR['email']}</a></li>
        <li><strong>Teléfono y WhatsApp:</strong> {TITULAR['telefono']}</li>
      </ul>'''

# Páginas legales: (slug, título del enlace, h1, contenido HTML). Se generan con noindex
# porque contienen datos personales del titular y no aportan a las búsquedas.
LEGALES = [
    ('aviso-legal', 'Aviso legal', 'Aviso legal', f'''
      <p>En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de este sitio web, sh-esotericos.com:</p>
      {DATOS_TITULAR}
      <h2>Objeto del sitio web</h2>
      <p>Este sitio web es un catálogo informativo de productos artesanales (jabones, velas, kits rituales, tinturas, bálsamos, pirograbados y objetos) y de servicios esotéricos (tiradas, lecturas y trabajos). La web no permite comprar ni pagar en línea: los pedidos y consultas se realizan contactando directamente con el titular por WhatsApp, Instagram, correo electrónico o en persona.</p>
      <h2>Naturaleza de los servicios esotéricos</h2>
      <p>Las tiradas, lecturas y trabajos esotéricos se ofrecen como orientación personal y espiritual. No sustituyen en ningún caso el consejo médico, psicológico, legal ni financiero de un profesional cualificado. Están dirigidos a personas mayores de 18 años.</p>
      <h2>Productos artesanales</h2>
      <p>Los productos se elaboran a mano, por lo que pueden presentar pequeñas diferencias de color, forma o acabado respecto a las fotografías. Los jabones, bálsamos y tinturas son de uso externo; antes de usarlos, consulta los ingredientes si tienes alergias o piel sensible. Los usos rituales o simbólicos descritos no constituyen propiedades terapéuticas ni sustituyen a ningún tratamiento.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos, fotografías, diseños, logotipos y demás contenidos de esta web pertenecen a su titular o se usan con autorización. No está permitida su reproducción, distribución o modificación sin consentimiento expreso.</p>
      <h2>Enlaces externos</h2>
      <p>La web enlaza con servicios de terceros, como WhatsApp o Instagram. El titular no se hace responsable del contenido ni de las políticas de esos servicios.</p>
      <h2>Responsabilidad</h2>
      <p>El titular procura que la información de la web sea correcta y esté actualizada, pero la disponibilidad y los precios se confirman siempre en el momento de hacer el pedido.</p>
      <h2>Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación española.</p>'''),
    ('privacidad', 'Privacidad', 'Política de privacidad', f'''
      <h2>Responsable del tratamiento</h2>
      {DATOS_TITULAR}
      <h2>Qué datos se tratan</h2>
      <p>Esta web no tiene formularios ni registro de usuarios. Solo se tratan los datos que tú facilitas al contactar por WhatsApp, Instagram, correo electrónico, teléfono o en persona: normalmente tu nombre, tu teléfono o usuario, tu correo, el contenido de tu consulta y, si pides un envío, la dirección de entrega.</p>
      <h2>Para qué se usan</h2>
      <ul>
        <li>Responder a tus consultas.</li>
        <li>Preparar, entregar o enviar tu pedido y realizar los servicios que solicites.</li>
        <li>Cumplir las obligaciones legales, fiscales y contables.</li>
      </ul>
      <p>No se envían comunicaciones comerciales sin tu consentimiento ni se elaboran perfiles.</p>
      <h2>Base legal</h2>
      <p>El consentimiento que das al contactar, la ejecución del pedido o servicio que solicitas y el cumplimiento de obligaciones legales.</p>
      <h2>Cuánto tiempo se conservan</h2>
      <p>El tiempo necesario para atender tu consulta o pedido y, después, durante los plazos que exige la ley. Puedes pedir que se borren en cualquier momento, salvo los que haya obligación legal de conservar.</p>
      <h2>Con quién se comparten</h2>
      <p>No se ceden datos a terceros, salvo a la empresa de transporte cuando hay un envío o cuando lo exija la ley. Las conversaciones por WhatsApp e Instagram se rigen también por las políticas de privacidad de Meta. La web está alojada en Hostinger, que puede registrar datos técnicos de acceso, como la dirección IP, por motivos de seguridad.</p>
      <h2>Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:{TITULAR['email']}">{TITULAR['email']}</a>. Si consideras que tus datos no se tratan correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es/" target="_blank" rel="noopener">aepd.es</a>).</p>'''),
    ('cookies', 'Cookies', 'Política de cookies', '''
      <h2>Esta web no usa cookies</h2>
      <p>SH Esotéricos no utiliza cookies propias ni de terceros: no hay herramientas de analítica, publicidad ni seguimiento.</p>
      <h2>Preferencia de tema</h2>
      <p>Si activas el modo oscuro con el botón de la vela, tu elección se guarda en el almacenamiento local de tu navegador para recordarla en la próxima visita. Es un dato técnico que no sale de tu dispositivo, no te identifica y no se comparte con nadie. Puedes borrarlo desde la configuración de tu navegador.</p>
      <h2>Enlaces a otros servicios</h2>
      <p>Al pulsar los enlaces de WhatsApp o Instagram sales de esta web, y esos servicios pueden usar sus propias cookies según sus políticas.</p>'''),
    ('condiciones', 'Condiciones', 'Condiciones de venta', f'''
      <p>Estas condiciones se aplican a los pedidos de productos y servicios de SH Esotéricos, cuyo titular es {TITULAR['nombre']} (NIF {TITULAR['nif']}).</p>
      <h2>Cómo se hace un pedido</h2>
      <p>La web es un catálogo: no hay carrito ni pago en línea. Para pedir, contacta con Manu por WhatsApp, Instagram, correo electrónico o en persona. El pedido queda cerrado cuando se confirman por escrito el producto o servicio, el precio final, la forma de pago y la entrega.</p>
      <h2>Precios</h2>
      <p>Los precios se indican en euros. Cuando aparece «Desde», el precio final depende de las opciones elegidas y se confirma antes de cerrar el pedido. Los gastos de envío, si los hay, se indican aparte antes de la confirmación.</p>
      <h2>Pago</h2>
      <p>La forma de pago se acuerda al confirmar el pedido. Los encargos personalizados y los servicios pueden requerir el pago previo.</p>
      <h2>Entrega</h2>
      <p>Los pedidos pueden recogerse en persona en la zona de Barcelona o enviarse por mensajería. El plazo y el coste del envío se confirman en cada caso.</p>
      <h2>Desistimiento y devoluciones</h2>
      <p>En los pedidos realizados a distancia tienes 14 días naturales desde la entrega para desistir sin dar explicaciones, avisando por escrito. Los gastos de devolución corren de tu cuenta, y el producto debe devolverse en el estado en que se recibió. El reembolso se realiza en un plazo máximo de 14 días.</p>
      <p>Según la ley, no se aplica el derecho de desistimiento a:</p>
      <ul>
        <li>Productos hechos por encargo o personalizados.</li>
        <li>Jabones, bálsamos, tinturas y otros productos de higiene o cuidado personal que se hayan desprecintado o usado.</li>
        <li>Tiradas, lecturas y trabajos que ya se hayan realizado con tu consentimiento.</li>
      </ul>
      <h2>Garantía</h2>
      <p>Los productos cuentan con la garantía legal de conformidad. Si un producto llega dañado o no corresponde con lo pedido, escribe a <a href="mailto:{TITULAR['email']}">{TITULAR['email']}</a> o por WhatsApp y se buscará una solución: reparación, sustitución o reembolso. Las pequeñas diferencias propias de un producto artesanal no se consideran defectos.</p>
      <h2>Servicios esotéricos</h2>
      <p>Las tiradas, lecturas y trabajos son servicios de orientación personal y espiritual dirigidos a mayores de 18 años. No garantizan resultados concretos ni sustituyen el consejo de un profesional médico, psicológico, legal o financiero.</p>
      <h2>Legislación aplicable</h2>
      <p>Estas condiciones se rigen por la legislación española. Si eres consumidor, puedes acudir a los juzgados de tu domicilio.</p>'''),
]

PIE_LEGAL = '<nav class="footer-legal" aria-label="Información legal">' + ''.join(
    f'<a href="/{slug}/">{enlace}</a>' for slug, enlace, _, _ in LEGALES) + '</nav>'

e = html.escape
_dimensiones = {}


def cargar_productos():
    texto = (RAIZ / 'catalogo-productos.js').read_text(encoding='utf-8')
    coincidencia = re.search(r'window\.CATALOGO_PRODUCTOS\s*=\s*(\[.*?\n\]);', texto, re.S)
    if not coincidencia:
        raise SystemExit('No se encontró window.CATALOGO_PRODUCTOS en catalogo-productos.js')
    return json.loads(coincidencia.group(1))


def version_css():
    indice = (RAIZ / 'index.html').read_text(encoding='utf-8')
    return re.search(r'estructura\.css\?v=([\w-]+)', indice).group(1)


def ruta_imagen(ruta):
    """Ruta absoluta y codificada, válida aunque el archivo tenga espacios o eñes."""
    return '/' + quote(unquote(ruta), safe='/')


def dimensiones(ruta):
    if ruta not in _dimensiones:
        archivo = RAIZ / unquote(ruta)
        if not archivo.is_file():
            raise SystemExit(f'Imagen inexistente: {ruta}')
        with Image.open(archivo) as imagen:
            _dimensiones[ruta] = imagen.size
    return _dimensiones[ruta]


def atributos_tamano(ruta):
    ancho, alto = dimensiones(ruta)
    return f'width="{ancho}" height="{alto}"'


def precio_numerico(precio):
    coincidencia = re.search(r'(\d+(?:,\d+)?)\s*€', precio or '')
    return f"{float(coincidencia.group(1).replace(',', '.')):.2f}" if coincidencia else None


def precio_visible(producto):
    return producto.get('price') or ('Consultar tarifa' if producto['category'] == 'tiradas' else 'Consultar precio')


def recortar(texto, limite=160):
    if len(texto) <= limite:
        return texto
    return texto[:limite - 1].rsplit(' ', 1)[0].rstrip(',;:—') + '…'


def url_producto(producto):
    return f"/producto/{producto['id']}/"


def tiene_pagina(producto):
    return not producto.get('hidden') and not producto['detailUrl'].startswith('index.html')


def enlace_tarjeta(producto):
    """Las lecturas genéricas no tienen ficha propia: llevan a la página de tiradas."""
    return url_producto(producto) if tiene_pagina(producto) else '/categoria/tiradas/'


def padre(producto):
    """Página a la que pertenece la ficha en las migas de pan."""
    if producto['category'] == 'san-valentin':
        datos = COLECCIONES['San Valentín']
        return datos['nombre'], f"/coleccion/{datos['slug']}/"
    datos = CATEGORIAS[producto['category']]
    return datos['nombre'], f"/categoria/{datos['slug']}/"


def json_ld(datos):
    texto = json.dumps(datos, ensure_ascii=False, indent=2).replace('</', '<\\/')
    return f'  <script type="application/ld+json">\n{texto}\n  </script>\n'


def migas_ld(elementos):
    return {
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {'@type': 'ListItem', 'position': posicion, 'name': nombre, 'item': DOMINIO + url}
            for posicion, (nombre, url) in enumerate(elementos, 1)
        ],
    }


def cabeza(titulo, descripcion, canonica, imagen, imagen_alt, datos_estructurados, css, robots=''):
    imagen_ancho, imagen_alto = (1200, 630)
    if not imagen:
        imagen = 'assets/images/social/sh-esotericos-og.jpg'
    else:
        imagen_ancho, imagen_alto = dimensiones(imagen)
    return f'''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{e(descripcion)}">
  <meta name="theme-color" content="#000000">{f'{chr(10)}  <meta name="robots" content="{robots}">' if robots else ''}
  <title>{e(titulo)}</title>
  <link rel="canonical" href="{DOMINIO}{canonica}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_ES">
  <meta property="og:site_name" content="SH Esotéricos">
  <meta property="og:url" content="{DOMINIO}{canonica}">
  <meta property="og:title" content="{e(titulo.split(' | ')[0])}">
  <meta property="og:description" content="{e(descripcion)}">
  <meta property="og:image" content="{DOMINIO}{ruta_imagen(imagen)}">
  <meta property="og:image:width" content="{imagen_ancho}">
  <meta property="og:image:height" content="{imagen_alto}">
  <meta property="og:image:alt" content="{e(imagen_alt)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/branding/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/branding/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/branding/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/branding/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <script src="/tema.js"></script>
  <link rel="stylesheet" href="/estructura.css?v={css}">
{json_ld({'@context': 'https://schema.org', '@graph': datos_estructurados})}</head>
'''


def cabecera(volver_url, volver_texto, destino_salto):
    return f'''<body>
  <a class="skip-link" href="#{destino_salto}">Saltar al contenido</a>
  <div class="announcement">Catálogo artesanal · Consultas y pedidos directamente con SH Esotéricos</div>
  <header class="site-header">
    <div class="product-page-header container">
      <a class="brand" href="/" aria-label="SH Esotéricos, volver al inicio"><img class="brand-mark" src="/assets/branding/logo-header.webp" alt="" width="48" height="48"><span><strong>SH Esotéricos</strong><small>Productos, rituales y servicios</small></span></a>
      <div class="product-header-actions"><button class="theme-toggle" type="button" data-theme-toggle aria-pressed="false" aria-label="Encender la vela y activar el modo oscuro" title="Encender la vela y activar el modo oscuro"><span class="candle-icon" aria-hidden="true"><span class="candle-flame"></span><span class="candle-wick"></span><span class="candle-wax"></span></span></button><a class="back-link" href="{volver_url}">← {e(volver_texto)}</a></div>
    </div>
  </header>
'''


def migas(elementos):
    partes = [f'<a href="{url}">{e(nombre)}</a>' for nombre, url in elementos[:-1]]
    partes.append(f'<span aria-current="page">{e(elementos[-1][0])}</span>')
    return '<nav class="breadcrumbs" aria-label="Migas de pan">' + '<span>/</span>'.join(partes) + '</nav>'


def pie(scripts):
    categorias = ''.join(
        f'<a href="/categoria/{datos["slug"]}/">{e(datos["nombre"])}</a>'
        for datos in CATEGORIAS.values()
    )
    etiquetas = ''.join(f'  <script src="{src}"></script>\n' for src in scripts)
    return f'''  <footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><img src="/assets/branding/logo-header.webp" alt="" width="56" height="56" loading="lazy"><div><strong>SH Esotéricos</strong><p>Productos artesanales, rituales y servicios. Barcelona.</p></div></div><nav aria-label="Enlaces del pie"><a href="/#categorias">Productos</a><a href="/#consultas">Consultas</a><a href="/#como-comprar">Cómo comprar</a><a href="/#contacto">Contacto</a></nav><nav class="footer-categories" aria-label="Categorías">{categorias}</nav>{PIE_LEGAL}</div></footer>
{etiquetas}</body>
</html>
'''


def tarjeta(producto):
    """Misma estructura que createCatalogCard() en catalogo-render.js."""
    url = enlace_tarjeta(producto)
    imagen, alt = producto['images'][0][0], producto['images'][0][1]
    sello = f'<span class="product-size-badge" aria-hidden="true">{e(producto["badge"])}</span>' if producto.get('badge') else ''
    return f'''<article class="product-card"><a class="product-image-link" href="{url}" aria-label="Ver {e(producto['name'])}"><img class="product-image product-photo" src="{ruta_imagen(imagen)}" alt="{e(alt)}" {atributos_tamano(imagen)} loading="lazy">{sello}</a><div class="product-body"><p class="product-category">{e(producto.get('collection') or producto['categoryLabel'])}</p><h3><a class="product-title-link" href="{url}">{e(producto['name'])}</a></h3><p class="product-description">{e(producto.get('summary') or producto['description'])}</p><div class="product-footer"><strong>{e(precio_visible(producto))}</strong><a href="{url}">Ver ficha</a></div></div></article>'''


def descripcion_meta(producto):
    base = producto.get('summary') or producto['description']
    if producto['category'] in ARTESANALES:
        coletilla = ' Hecho a mano en Barcelona por SH Esotéricos.'
    else:
        coletilla = ' SH Esotéricos, Barcelona: consulta directa con Manu.'
    return recortar(base + coletilla if len(base) < 120 else base)


def titulo_producto(producto):
    tipo = CATEGORIAS.get(producto['category'], {}).get('tipo', '')
    nombre = producto['name']
    primera = tipo.split(' ')[0].lower() if tipo else ''
    if tipo and primera not in nombre.lower() and len(nombre) + len(tipo) < 42:
        return f'{nombre} — {tipo} | SH Esotéricos'
    return f'{nombre} | SH Esotéricos'


def datos_producto(producto, url, elementos_migas):
    imagenes = [DOMINIO + ruta_imagen(imagen[0]) for imagen in producto['images'][:6]]
    grafo = [migas_ld(elementos_migas)]
    precio = precio_numerico(producto.get('price'))
    if producto['category'] in SERVICIOS:
        servicio = {
            '@type': 'Service',
            'name': producto['name'],
            'description': producto['description'].replace('\n\n', ' '),
            'url': DOMINIO + url,
            'image': imagenes[0],
            'provider': {'@id': TIENDA_ID},
            'areaServed': {'@type': 'City', 'name': 'Barcelona'},
        }
        if precio:
            servicio['offers'] = {'@type': 'Offer', 'price': precio, 'priceCurrency': 'EUR'}
        grafo.append(servicio)
    elif precio:
        # Google solo admite fichas Product con oferta; sin precio se omite.
        grafo.append({
            '@type': 'Product',
            'name': producto['name'],
            'description': producto['description'].replace('\n\n', ' '),
            'url': DOMINIO + url,
            'image': imagenes,
            'category': producto['categoryLabel'],
            'brand': {'@type': 'Brand', 'name': 'SH Esotéricos'},
            'offers': {
                '@type': 'Offer',
                'url': DOMINIO + url,
                'price': precio,
                'priceCurrency': 'EUR',
                'itemCondition': 'https://schema.org/NewCondition',
                'seller': {'@id': TIENDA_ID},
            },
        })
    return grafo


def galeria(producto):
    imagenes = producto['images']
    principal = imagenes[0]
    sello = f'<span class="product-size-badge detail-size-badge" aria-hidden="true">{e(producto["badge"])}</span>' if producto.get('badge') else ''
    bloque = [f'''        <div class="gallery-main"><img id="gallery-main-image" src="{ruta_imagen(principal[0])}" alt="{e(principal[1])}" {atributos_tamano(principal[0])} fetchpriority="high">{sello}<p class="image-label" id="gallery-label">{e(principal[2])}</p></div>''']
    if len(imagenes) > 1:
        clase = 'gallery-thumbs is-long' if len(imagenes) > 12 else 'gallery-thumbs'
        botones = []
        for indice, (ruta, alt, etiqueta) in enumerate(imagenes):
            perezosa = ' loading="lazy"' if indice else ''
            botones.append(
                f'<button class="gallery-thumb" type="button" aria-pressed="{str(indice == 0).lower()}" '
                f'aria-label="Ver imagen {indice + 1} de {e(producto["name"])}" data-image="{ruta_imagen(ruta)}" '
                f'data-alt="{e(alt)}" data-label="{e(etiqueta)}"><img src="{ruta_imagen(ruta)}" alt="" {atributos_tamano(ruta)}{perezosa}></button>'
            )
        bloque.append(f'        <div class="{clase}" aria-label="Seleccionar imagen">' + ''.join(botones) + '</div>')
    return '\n'.join(bloque)


def pagina_producto(producto, productos, css):
    url = url_producto(producto)
    nombre_padre, url_padre = padre(producto)
    elementos = [('Inicio', '/'), (nombre_padre, url_padre), (producto['name'], url)]
    precio = precio_visible(producto)
    puntos = ''.join(f'<li>{e(punto)}</li>' for punto in (producto.get('points') or PUNTOS_POR_DEFECTO))
    entradilla, *parrafos = producto['description'].split('\n\n')
    cuerpo = ''.join(f'\n        <p class="detail-text">{e(parrafo)}</p>' for parrafo in parrafos)
    if producto.get('pointsTitle'):
        cuerpo += f'\n        <h2 class="detail-points-title">{e(producto["pointsTitle"])}</h2>'
    mensaje = f"Hola Manu, quiero consultar: {producto['name']}"
    whatsapp = f'https://wa.me/{WHATSAPP}?text={quote(mensaje)}'
    datos_extra = ''
    if producto['category'] == 'pictografia':
        datos_extra = '<div><dt>Tipo</dt><dd>Pirograbado decorativo</dd></div><div><dt>Material</dt><dd>Madera</dd></div>'
    coleccion = producto.get('collection') or ''
    if coleccion in COLECCIONES:
        coleccion_html = f'<a href="/coleccion/{COLECCIONES[coleccion]["slug"]}/">{e(coleccion)}</a>'
    else:
        coleccion_html = e(coleccion)
    if producto['category'] == 'pictografia':
        aviso = 'Las fotografías reales muestran las piezas disponibles. Las imágenes ambientadas son representaciones visuales y no sustituyen la fotografía del producto.'
    else:
        aviso = 'Las imágenes marcadas como ambientadas son representaciones visuales. Consulta siempre disponibilidad, acabado y características de la pieza real.'

    relacionados = [p for p in productos if p is not producto and not p.get('hidden') and p.get('collection') == coleccion]
    relacionados += [p for p in productos if p is not producto and not p.get('hidden') and p['category'] == producto['category'] and p not in relacionados]
    relacionados = relacionados[:4]
    bloque_relacionados = ''
    if relacionados:
        bloque_relacionados = f'''
    <section class="section related-products" aria-labelledby="relacionados-titulo">
      <div class="section-heading"><div><p class="eyebrow">Sigue explorando</p><h2 id="relacionados-titulo">Más en {e(nombre_padre)}</h2></div><a href="{url_padre}">Ver todo</a></div>
      <div class="product-grid">{''.join(tarjeta(p) for p in relacionados)}</div>
    </section>'''

    return (
        cabeza(titulo_producto(producto), descripcion_meta(producto), url, producto['images'][0][0],
               producto['images'][0][1], datos_producto(producto, url, elementos), css)
        + cabecera(url_padre, f'Volver a {nombre_padre}', 'producto')
        + f'''  <main class="product-detail container" id="producto">
    {migas(elementos)}
    <div class="detail-grid">
      <section aria-label="Galería del producto">
{galeria(producto)}
        <p class="ai-notice">{aviso}</p>
      </section>
      <section class="detail-copy">
        <p class="eyebrow">{e(coleccion or 'Catálogo artesanal')}</p>
        <h1>{e(producto['name'])}</h1>
        <span class="product-state">{e(producto['state'])}</span>
        <p class="lead">{e(entradilla)}</p>
        <p class="detail-price">{e(precio)}</p>
        <p class="detail-note">Consulta disponibilidad, medidas, preparación y condiciones del pedido. Entrega en persona en Barcelona o envío bajo consulta.</p>{cuerpo}
        <ul class="detail-points">{puntos}</ul>
        <div class="detail-actions">
          <a class="button primary" href="{e(whatsapp)}" data-contact="whatsapp" data-message="{e(mensaje)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
          <a class="button secondary" href="{INSTAGRAM}" data-contact="instagram" target="_blank" rel="noopener">Consultar por Instagram</a>
        </div>
        <dl class="product-data"><div><dt>Categoría</dt><dd><a href="{url_padre}">{e(nombre_padre)}</a></dd></div><div><dt>Colección</dt><dd>{coleccion_html}</dd></div>{datos_extra}<div><dt>Formato</dt><dd>{e(producto['format'])}</dd></div><div><dt>Precio</dt><dd>{e(precio)}</dd></div></dl>
      </section>
    </div>{bloque_relacionados}
  </main>
'''
        + pie(['/contacto.js', f'/producto.js?v={css}'])
    )


def pagina_listado(titulo, nombre, h1, intro, url, grupos, eyebrow, css):
    """Página de categoría o colección: grupos es una lista de (subtítulo, productos)."""
    todos = [p for _, lista in grupos for p in lista]
    elementos = [('Inicio', '/'), (nombre, url)]
    grafo = [
        migas_ld(elementos),
        {
            '@type': 'CollectionPage',
            'name': h1,
            'description': intro,
            'url': DOMINIO + url,
            'isPartOf': {'@id': f'{DOMINIO}/#web'},
            'mainEntity': {
                '@type': 'ItemList',
                'numberOfItems': len(todos),
                'itemListElement': [
                    {'@type': 'ListItem', 'position': posicion, 'url': DOMINIO + enlace_tarjeta(p), 'name': p['name']}
                    for posicion, p in enumerate(todos, 1)
                ],
            },
        },
    ]
    secciones = []
    for subtitulo, lista in grupos:
        cabecera_grupo = ''
        if subtitulo and len(grupos) > 1:
            enlace = ''
            if subtitulo in COLECCIONES and COLECCIONES[subtitulo]['h1'] != h1:
                enlace = f'<a href="/coleccion/{COLECCIONES[subtitulo]["slug"]}/">Ver colección</a>'
            cabecera_grupo = f'<div class="section-heading"><div><h2>{e(subtitulo)}</h2><p>{len(lista)} {"producto" if len(lista) == 1 else "productos"}</p></div>{enlace}</div>'
        secciones.append(f'''    <section class="listing-group">
      {cabecera_grupo}
      <div class="product-grid">{''.join(tarjeta(p) for p in lista)}</div>
    </section>''')
    imagen = todos[0]['images'][0] if todos else (None, '')
    return (
        cabeza(titulo, recortar(intro), url, imagen[0], imagen[1], grafo, css)
        + cabecera('/#catalogo', 'Volver al catálogo', 'contenido')
        + f'''  <main class="section container listing-page" id="contenido">
    {migas(elementos)}
    <header class="listing-intro">
      <p class="eyebrow">{e(eyebrow)}</p>
      <h1>{e(h1)}</h1>
      <p class="lead">{e(intro)}</p>
    </header>
{chr(10).join(secciones)}
    <section class="listing-cta">
      <h2>¿Tienes dudas sobre algún producto?</h2>
      <p>Manu atiende directamente las consultas sobre disponibilidad, encargos y envíos. También puedes recoger tu pedido en persona en Barcelona.</p>
      <div class="actions"><a class="button primary" href="https://wa.me/{WHATSAPP}?text={quote('Hola Manu, quiero hacer una consulta sobre ' + h1)}" data-contact="whatsapp" data-message="{e('Hola Manu, quiero hacer una consulta sobre ' + h1)}" target="_blank" rel="noopener">Consultar por WhatsApp</a><a class="button secondary" href="{INSTAGRAM}" data-contact="instagram" target="_blank" rel="noopener">Consultar por Instagram</a></div>
    </section>
  </main>
'''
        + pie(['/contacto.js'])
    )


def pagina_legal(slug, h1, contenido, css):
    url = f'/{slug}/'
    elementos = [('Inicio', '/'), (h1, url)]
    descripcion = f'{h1} de SH Esotéricos, tienda esotérica artesanal de Barcelona.'
    return (
        cabeza(f'{h1} | SH Esotéricos', descripcion, url, None, 'SH Esotéricos', [migas_ld(elementos)], css, 'noindex, follow')
        + cabecera('/', 'Volver al inicio', 'contenido')
        + f'''  <main class="section container listing-page legal-page" id="contenido">
    {migas(elementos)}
    <header class="listing-intro">
      <p class="eyebrow">Información legal</p>
      <h1>{e(h1)}</h1>
    </header>
    <div class="legal-text">{contenido}
      <p class="legal-updated">Última actualización: {ACTUALIZACION_LEGAL}.</p>
    </div>
  </main>
'''
        + pie([])
    )


def agrupar(lista):
    grupos = {}
    for producto in lista:
        grupos.setdefault(producto.get('collection') or '', []).append(producto)
    return list(grupos.items())


def escribir(ruta, contenido):
    destino = RAIZ / ruta
    destino.parent.mkdir(parents=True, exist_ok=True)
    destino.write_text(contenido, encoding='utf-8')


def main():
    productos = cargar_productos()
    css = version_css()
    for carpeta in ('producto', 'categoria', 'coleccion'):
        shutil.rmtree(RAIZ / carpeta, ignore_errors=True)

    urls = ['/']
    visibles = [p for p in productos if not p.get('hidden')]

    for clave, datos in CATEGORIAS.items():
        lista = [p for p in visibles if p['category'] == clave]
        url = f"/categoria/{datos['slug']}/"
        escribir(f"categoria/{datos['slug']}/index.html",
                 pagina_listado(datos['titulo'], datos['nombre'], datos['h1'], datos['intro'], url, agrupar(lista), 'Categoría', css))
        urls.append(url)

    for nombre, datos in COLECCIONES.items():
        lista = [p for p in visibles if p.get('collection') == nombre]
        url = f"/coleccion/{datos['slug']}/"
        escribir(f"coleccion/{datos['slug']}/index.html",
                 pagina_listado(datos['titulo'], datos['nombre'], datos['h1'], datos['intro'], url, agrupar(lista), 'Colección de temporada', css))
        urls.append(url)

    avisos = []
    for producto in visibles:
        if not tiene_pagina(producto):
            continue
        if producto['detailUrl'] != url_producto(producto)[1:]:
            avisos.append(f"{producto['id']}: detailUrl debería ser {url_producto(producto)[1:]}")
        escribir(f"producto/{producto['id']}/index.html", pagina_producto(producto, productos, css))
        urls.append(url_producto(producto))

    for slug, _, h1, contenido in LEGALES:
        escribir(f'{slug}/index.html', pagina_legal(slug, h1, contenido, css))

    lineas = ['<?xml version="1.0" encoding="UTF-8"?>',
              '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    lineas += [f'  <url><loc>{DOMINIO}{url}</loc></url>' for url in urls]
    lineas.append('</urlset>')
    (RAIZ / 'sitemap.xml').write_text('\n'.join(lineas) + '\n', encoding='utf-8')

    print(f'{len(CATEGORIAS)} categorías, {len(COLECCIONES)} colecciones, '
          f'{len(urls) - 1 - len(CATEGORIAS) - len(COLECCIONES)} fichas y sitemap con {len(urls)} URL.')
    for aviso in avisos:
        print('Aviso:', aviso)


if __name__ == '__main__':
    main()
