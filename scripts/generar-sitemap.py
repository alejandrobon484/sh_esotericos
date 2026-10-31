#!/usr/bin/env python3
"""Genera sitemap.xml a partir de catalogo-productos.js.

Uso, desde la raíz del proyecto:
    python3 scripts/generar-sitemap.py

Incluye la portada y las fichas visibles. Omite los productos ocultos y los
accesos que apuntan a la propia portada (por ejemplo, filtros de servicios).
"""

import json
import re
from pathlib import Path
from xml.sax.saxutils import escape

DOMINIO = 'https://sh-esotericos.com/'
RAIZ = Path(__file__).resolve().parent.parent
CATALOGO = RAIZ / 'catalogo-productos.js'
SALIDA = RAIZ / 'sitemap.xml'


def cargar_productos():
    texto = CATALOGO.read_text(encoding='utf-8')
    coincidencia = re.search(r'window\.CATALOGO_PRODUCTOS\s*=\s*(\[.*?\n\]);', texto, re.S)
    if not coincidencia:
        raise SystemExit('No se encontró window.CATALOGO_PRODUCTOS en catalogo-productos.js')
    return json.loads(coincidencia.group(1))


def main():
    urls = [DOMINIO]
    for producto in cargar_productos():
        destino = producto.get('detailUrl', '')
        if producto.get('hidden') or not destino or destino.startswith('index.html'):
            continue
        url = DOMINIO + destino.split('#')[0]
        if url not in urls:
            urls.append(url)

    lineas = ['<?xml version="1.0" encoding="UTF-8"?>',
              '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    lineas += [f'  <url><loc>{escape(url)}</loc></url>' for url in urls]
    lineas.append('</urlset>')
    SALIDA.write_text('\n'.join(lineas) + '\n', encoding='utf-8')
    print(f'sitemap.xml generado con {len(urls)} URL.')


if __name__ == '__main__':
    main()
