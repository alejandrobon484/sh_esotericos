window.PIROGRABADOS_CATALOGO = [
  {
    id: 'brujula-nordica',
    name: 'Brújulas nórdicas',
    state: 'Dos modelos disponibles',
    description: 'Dos composiciones de inspiración nórdica pirograbadas sobre piezas circulares de madera.',
    format: 'Dos diseños circulares',
    points: ['Dos composiciones diferentes.', 'Fotografías reales y ejemplos ambientados.', 'Pieza decorativa artesanal.'],
    images: [
      ['productos/pirograbados/brujula-nordica-01.jpg', 'Brújula nórdica con runas alrededor', 'Modelo con runas · Fotografía real'],
      ['productos/pirograbados/brujula-nordica-01-ambiente.jpg', 'Representación ambientada de una brújula nórdica con runas', 'Modelo con runas · Imagen ambientada'],
      ['productos/pirograbados/brujula-nordica-02.jpg', 'Brújula nórdica de líneas limpias sobre madera', 'Modelo lineal · Fotografía real'],
      ['productos/pirograbados/brujula-nordica-02-ambiente.jpg', 'Representación ambientada de una brújula nórdica lineal', 'Modelo lineal · Imagen ambientada']
    ]
  },
  {
    id: 'colibri', name: 'Colibrí', state: 'Modelo único',
    description: 'Colibrí de trazo ornamental pirograbado sobre una pieza circular de madera.',
    format: 'Pieza circular', points: ['Motivo de colibrí.', 'Trabajo artesanal sobre madera.', 'Adecuado para decoración o regalo.'],
    images: [
      ['productos/pirograbados/colibri-01.jpg', 'Pirograbado artesanal de un colibrí ornamental', 'Fotografía del producto real'],
      ['productos/pirograbados/colibri-01-ambiente.png', 'Representación ambientada del pirograbado de colibrí', 'Imagen ambientada']
    ]
  },
  {
    id: 'runas-nordicas', name: 'Conjunto de runas nórdicas', state: 'Conjunto de piezas',
    description: 'Conjunto de símbolos pirograbados individualmente sobre pequeñas piezas naturales de madera.',
    format: 'Conjunto de piezas irregulares', points: ['Cada pieza presenta un símbolo distinto.', 'Se conserva el contorno natural de la madera.', 'Galería con fotografías generales y detalles individuales.'],
    images: [
      ['productos/pirograbados/conjunto-de-runas-02.jpg', 'Conjunto de runas nórdicas pirograbadas sobre madera', 'Vista general · Fotografía real'],
      ['productos/pirograbados/conjunto-de-runas-03.jpg', 'Detalle del conjunto de runas nórdicas', 'Detalle del conjunto · Fotografía real'],
      ...Array.from({ length: 13 }, (_, index) => {
        const number = String(index + 1).padStart(2, '0');
        return [`productos/pirograbados/runa-nordica-${number}.jpg`, `Detalle ${index + 1} del conjunto de runas nórdicas`, `Pieza ${index + 1} · Fotografía real`];
      }),
      ['productos/pirograbados/conjunto-de-runas-01.png', 'Vista general del conjunto de runas nórdicas sobre madera', 'Vista general del conjunto']
    ]
  },
  {
    id: 'cruz-celta', name: 'Cruz celta', state: 'Modelo único',
    description: 'Cruz celta ornamental pirograbada sobre una pieza circular de madera.',
    format: 'Pieza circular', points: ['Motivo de cruz celta.', 'Acabado artesanal.', 'Fotografía real y ejemplo ambientado.'],
    images: [
      ['productos/pirograbados/cruz-celta-01.jpg', 'Pirograbado artesanal de una cruz celta', 'Fotografía del producto real'],
      ['productos/pirograbados/cruz-celta-01-ambiente.jpg', 'Representación ambientada del pirograbado de cruz celta', 'Imagen ambientada']
    ]
  },
  {
    id: 'cruz-lazos', name: 'Cruz de lazos', state: 'Modelo único',
    description: 'Composición de cruz entrelazada pirograbada sobre madera.',
    format: 'Pieza circular', points: ['Diseño de líneas entrelazadas.', 'Pirograbado artesanal.', 'Pieza decorativa.'],
    images: [
      ['productos/pirograbados/cruz--de-lazos-01.jpg', 'Pirograbado artesanal de una cruz de lazos', 'Fotografía del producto real'],
      ['productos/pirograbados/cruz-de-lazos-01-ambiente.png', 'Representación ambientada del pirograbado de cruz de lazos', 'Imagen ambientada']
    ]
  },
  {
    id: 'cuervo', name: 'Cuervo', state: 'Modelo único',
    description: 'Figura de cuervo pirograbada sobre una pieza circular de madera.',
    format: 'Pieza circular', points: ['Motivo de cuervo.', 'Trabajo artesanal en madera.', 'Fotografía real y ejemplo ambientado.'],
    images: [
      ['productos/pirograbados/cuervo-01.jpg', 'Pirograbado artesanal de un cuervo', 'Fotografía del producto real'],
      ['productos/pirograbados/cuervo-01-ambiente.png', 'Representación ambientada del pirograbado de cuervo', 'Imagen ambientada']
    ]
  },
  {
    id: 'dibujo-esoterico', name: 'Dibujo esotérico', state: 'Modelo único',
    description: 'Escena esotérica con elementos simbólicos pirograbada sobre madera.',
    format: 'Pieza circular', points: ['Composición con varios elementos simbólicos.', 'Diseño detallado.', 'Pieza decorativa artesanal.'],
    images: [
      ['productos/pirograbados/dibujo-esoterico-01.jpg', 'Pirograbado de una composición esotérica', 'Fotografía del producto real'],
      ['productos/pirograbados/dibujo-esoterico-01-ambiente.png', 'Representación ambientada del dibujo esotérico', 'Imagen ambientada']
    ]
  },
  {
    id: 'nudo-celta', name: 'Nudo celta', state: 'Modelo único',
    description: 'Nudo celta triangular de líneas entrelazadas pirograbado sobre madera.',
    format: 'Pieza circular', points: ['Composición triangular.', 'Diseño de líneas entrelazadas.', 'Trabajo artesanal en madera.'],
    images: [
      ['productos/pirograbados/nudo-celta-01.jpg', 'Pirograbado artesanal de un nudo celta triangular', 'Fotografía del producto real'],
      ['productos/pirograbados/nudo-celta-01-ambiente.jpg', 'Representación ambientada del pirograbado de nudo celta', 'Imagen ambientada']
    ]
  },
  {
    id: 'nudo-celta-corazon', name: 'Nudo celta corazón', state: 'Modelo único',
    description: 'Diseño de nudo celta con composición de corazón pirograbado sobre madera.',
    format: 'Pieza circular', points: ['Motivo celta en forma de corazón.', 'Diseño entrelazado.', 'Pieza decorativa artesanal.'],
    images: [
      ['productos/pirograbados/nudo-celta-01-corazon.jpg', 'Pirograbado de un nudo celta en forma de corazón', 'Fotografía del producto real'],
      ['productos/pirograbados/nudo-celta-01-corazon-ambiente.png', 'Representación ambientada del nudo celta en forma de corazón', 'Imagen ambientada']
    ]
  },
  {
    id: 'valknut', name: 'Valknut', state: 'Modelo único',
    description: 'Símbolo Valknut pirograbado sobre una pieza circular de madera.',
    format: 'Pieza circular', points: ['Motivo geométrico Valknut.', 'Pirograbado artesanal.', 'Fotografía real y ejemplo ambientado.'],
    images: [
      ['productos/pirograbados/valknut-01.jpg', 'Pirograbado artesanal del símbolo Valknut', 'Fotografía del producto real'],
      ['productos/pirograbados/valknut-01-ambiente.png', 'Representación ambientada del pirograbado Valknut', 'Imagen ambientada']
    ]
  },
  {
    id: 'coleccion-arboles', name: 'Colección Árboles', state: 'Tres modelos disponibles',
    description: 'Tres interpretaciones del árbol realizadas mediante pirograbado sobre piezas circulares de madera.',
    format: 'Tres diseños circulares', points: ['Árbol de ramas fluidas.', 'Árbol ornamental.', 'Árbol con marco de inspiración celta.'],
    images: [
      ['productos/pirograbados/arbol-01.jpg', 'Pirograbado de árbol con ramas fluidas', 'Ramas fluidas · Fotografía real'],
      ['productos/pirograbados/arbol-01-ambiente.png', 'Representación ambientada del árbol con ramas fluidas', 'Ramas fluidas · Imagen ambientada'],
      ['productos/pirograbados/arbol-02.jpg', 'Pirograbado de árbol ornamental', 'Árbol ornamental · Fotografía real'],
      ['productos/pirograbados/arbol-02-ambiente.png', 'Representación ambientada del árbol ornamental', 'Árbol ornamental · Imagen ambientada'],
      ['productos/pirograbados/arbol-03.jpg', 'Pirograbado de árbol con marco celta', 'Árbol celta · Fotografía real'],
      ['productos/pirograbados/arbol-03-ambiente.png', 'Representación ambientada del árbol con marco celta', 'Árbol celta · Imagen ambientada']
    ]
  },
  {
    id: 'arbol-vida', name: 'Árbol de la vida', state: 'Modelo único',
    description: 'Árbol de la vida pirograbado sobre una rodaja de madera con borde natural.',
    format: 'Rodaja de madera natural', points: ['Motivo del árbol de la vida.', 'Contorno natural visible.', 'Pieza decorativa artesanal.'],
    images: [
      ['productos/pirograbados/arbol-de-la-vida01.jpg', 'Pirograbado del árbol de la vida sobre una rodaja de madera', 'Fotografía del producto real'],
      ['productos/pirograbados/arbol-de-la-vida-01-ambiente.jpg', 'Representación ambientada del pirograbado árbol de la vida', 'Imagen ambientada']
    ]
  },
  {
    id: 'mitsudomoe', name: 'Mitsudomoe', state: 'Modelo único',
    description: 'Símbolo Mitsudomoe pirograbado sobre una pieza circular de madera.',
    format: 'Pieza circular', points: ['Motivo tradicional de tres formas.', 'Composición geométrica.', 'Trabajo artesanal en madera.'],
    images: [
      ['productos/pirograbados/mitsudomoe-01.jpg', 'Pirograbado artesanal del símbolo Mitsudomoe', 'Fotografía del producto real'],
      ['productos/pirograbados/mitsudomoe-01-ambiente.png', 'Representación ambientada del pirograbado Mitsudomoe', 'Imagen ambientada']
    ]
  },
  {
    id: 'trisqueta', name: 'Trisqueta', state: 'Modelo único',
    description: 'Trisqueta de líneas entrelazadas pirograbada sobre una pieza circular de madera.',
    format: 'Pieza circular', points: ['Motivo de trisqueta.', 'Diseño entrelazado.', 'Pirograbado artesanal.'],
    images: [
      ['productos/pirograbados/trisqueta-01.jpg', 'Pirograbado artesanal de una trisqueta', 'Fotografía del producto real'],
      ['productos/pirograbados/trisqueta-01-ambiente.jpg', 'Representación ambientada del pirograbado de trisqueta', 'Imagen ambientada']
    ]
  }
];

const pirograbadosGrid = document.querySelector('#product-grid');

if (pirograbadosGrid) {
  window.PIROGRABADOS_CATALOGO.forEach((product) => {
    const detailUrl = `producto-pirograbado.html?id=${encodeURIComponent(product.id)}`;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = 'pictografia';
    card.dataset.name = `${product.name} pirograbado`;
    card.dataset.price = '0';

    const imageLink = document.createElement('a');
    imageLink.className = 'product-image-link';
    imageLink.href = detailUrl;
    imageLink.setAttribute('aria-label', `Ver ${product.name}`);

    const image = document.createElement('img');
    image.className = 'product-image product-photo';
    image.src = product.images[0][0];
    image.alt = product.images[0][1];
    image.loading = 'lazy';
    imageLink.appendChild(image);

    const body = document.createElement('div');
    body.className = 'product-body';

    const category = document.createElement('p');
    category.className = 'product-category';
    category.textContent = 'Pirograbados';

    const title = document.createElement('h3');
    const titleLink = document.createElement('a');
    titleLink.className = 'product-title-link';
    titleLink.href = detailUrl;
    titleLink.textContent = product.name;
    title.appendChild(titleLink);

    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;

    const footer = document.createElement('div');
    footer.className = 'product-footer';
    const price = document.createElement('strong');
    price.textContent = 'Consultar precio';
    const link = document.createElement('a');
    link.href = detailUrl;
    link.textContent = 'Ver ficha';
    footer.append(price, link);

    body.append(category, title, description, footer);
    card.append(imageLink, body);
    pirograbadosGrid.appendChild(card);
  });
}
