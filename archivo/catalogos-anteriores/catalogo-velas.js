function catalogProduct(definition) {
  return {
    ...definition,
    images: definition.files.map((file, index) => {
      const isAmbient = /(?:amb|ambiente)/i.test(file);
      const mediaRoot = file.startsWith('velas/')
        ? 'productos/'
        : 'productos/trabajo-de-brujera/';
      return [
        `${mediaRoot}${file}`,
        `${definition.name}, imagen ${index + 1}`,
        isAmbient ? 'Imagen ambientada' : 'Fotografía del producto'
      ];
    })
  };
}

window.CATALOGO_ADICIONAL = [
  catalogProduct({
    id: 'endulzamiento', name: 'Endulzamiento', category: 'trabajos', categoryLabel: 'Trabajo de brujería', collection: 'Trabajos personalizados',
    state: 'Consulta previa necesaria', format: 'Trabajo preparado bajo consulta',
    description: 'Presentación visual de un trabajo de endulzamiento preparado de forma personalizada.',
    files: ['endulzamento/endulzamento-01.jpeg', 'endulzamento/endulzamento-01-ambiente-01.jpeg', 'endulzamento/endulzamento-01-ambiente-02.jpeg', 'endulzamento/endulzamento-01-ambiente-03.jpeg']
  }),
  catalogProduct({
    id: 'velas-aromaterapia-vaso', name: 'Velas de aromaterapia en vaso', category: 'velas', categoryLabel: 'Velas', collection: 'Aromaterapia',
    state: 'Seis variedades', format: 'Vela en vaso',
    description: 'Colección de velas en vaso con variedades de vainilla, menta, flores rojas, lavanda, romero y eucalipto.',
    files: [
      'velas/aromaterapia/aromaterapia-vela-vaso-vainilla-01.jpeg', 'velas/aromaterapia/aromaterapia-vela-vaso-vainilla-01-ambiente.png',
      'velas/aromaterapia/aromaterapia-vela-vaso-menta-02.png', 'velas/aromaterapia/aromaterapia-vela-vaso-menta-02-ambiente.jpeg',
      'velas/aromaterapia/aromaterapia-vela-vaso-f-rojos-03.png', 'velas/aromaterapia/aromaterapia-vela-vaso-f-rojos-03-ambiente.png',
      'velas/aromaterapia/aromaterapia-vela-vaso-lavanda-04.png', 'velas/aromaterapia/aromaterapia-vela-vaso-lavanda-04-lavanda.png',
      'velas/aromaterapia/aromaterapia-vela-vaso-romero-05.png', 'velas/aromaterapia/aromaterapia-vela-vaso-romero-05-romero.png',
      'velas/aromaterapia/aromaterapia-vela-vaso-eucalipto-06.png', 'velas/aromaterapia/aromaterapia-vela-vaso-eucalipto-06-ambiente.png'
    ]
  }),
  catalogProduct({
    id: 'vela-forma-lavanda', name: 'Vela con forma de lavanda', category: 'velas', categoryLabel: 'Velas', collection: 'Aromaterapia',
    state: 'Modelo único', format: 'Vela decorativa moldeada', description: 'Vela ornamental inspirada en flores de lavanda.',
    files: ['velas/aromaterapia/vela-forma-lavanda-01.jpeg', 'velas/aromaterapia/vela-forma-lavanda-01-lado.jpeg', 'velas/aromaterapia/vela-forma-lavanda-01-ambiente-01.png', 'velas/aromaterapia/vela con formas de lavanda 02-ambiente-02.png']
  }),
  catalogProduct({
    id: 'velas-calabaza', name: 'Colección Calabazas', category: 'velas', categoryLabel: 'Velas', collection: 'Halloween',
    state: 'Varios modelos', format: 'Velas decorativas moldeadas', description: 'Colección de velas de Halloween con diferentes modelos de calabaza.',
    files: ['velas/halloween/Calabaza/calabaza-01.png', 'velas/halloween/Calabaza/calabaza-01-amb-01.png', 'velas/halloween/Calabaza/calabaza-02.png', 'velas/halloween/Calabaza/calabaza-02-amb-01.png', 'velas/halloween/Calabaza/calabazas- 01-02.png', 'velas/halloween/Calabaza/calabazas- 01-02-amb-01.png', 'velas/halloween/Calabaza/calabazas- 01-02-amb-02.png']
  }),
  catalogProduct({
    id: 'adorno-craneo-realista', name: 'Adorno de cráneo realista', category: 'velas', categoryLabel: 'Velas', collection: 'Halloween',
    state: 'Modelo único', format: 'Pieza decorativa', description: 'Pieza decorativa con forma de cráneo y acabado realista.',
    files: ['velas/halloween/adorno-de-craneo-realista/adorno-de-craneo-realista-01.png', 'velas/halloween/adorno-de-craneo-realista/adorno-de-craneo-realista-01-amb-01.png', 'velas/halloween/adorno-de-craneo-realista/adorno-de-craneo-realista-amb-02.png']
  }),
  catalogProduct({
    id: 'velas-fantasmas-mascotas', name: 'Fantasmas mascota', category: 'velas', categoryLabel: 'Velas', collection: 'Halloween',
    state: 'Modelos gato y perro', format: 'Velas decorativas moldeadas', description: 'Colección de fantasmas inspirados en mascotas, con modelos de gato y perro.',
    files: ['velas/halloween/fantasmas-mascotas/vela-mascota-gato-01.png', 'velas/halloween/fantasmas-mascotas/vela-mascota-gato-01-amb-01.png', 'velas/halloween/fantasmas-mascotas/vela-mascota-perro-01.png', 'velas/halloween/fantasmas-mascotas/vela-mascota-perro-01-amb-01.png', 'velas/halloween/fantasmas-mascotas/vela-mascotas-perro-gato-01.png', 'velas/halloween/fantasmas-mascotas/vela-mascotas-perro-gato-01-amb-01.png', 'velas/halloween/fantasmas-mascotas/vela-mascotas-perro-gato-01-amb-02.png']
  }),
  catalogProduct({
    id: 'fantasmas-pequenos', name: 'Fantasmas pequeños', category: 'velas', categoryLabel: 'Velas', collection: 'Halloween',
    state: 'Dos modelos', format: 'Velas decorativas moldeadas', description: 'Pequeñas velas decorativas con forma de fantasma.',
    files: ['velas/halloween/fantasmas-pequenos/fantasma-pequeño-01.png', 'velas/halloween/fantasmas-pequenos/fantasma-pequeño-02.png', 'velas/halloween/fantasmas-pequenos/fantasma-pequeño-01-amb-01.png', 'velas/halloween/fantasmas-pequenos/fantasma-pequeño-01-amb-02.png']
  }),
  catalogProduct({
    id: 'fantasma-gorro-bruja', name: 'Fantasma con gorro de bruja', category: 'velas', categoryLabel: 'Velas', collection: 'Halloween',
    state: 'Dos variantes', format: 'Vela decorativa en vaso', description: 'Vela de fantasma disponible con y sin gorro de bruja.',
    files: ['velas/halloween/vaso-fantasma-con-gorro-de-bruja/fantasma-con-gorro-bruja-01.png', 'velas/halloween/vaso-fantasma-con-gorro-de-bruja/fantasma-sin-gorro-bruja-01.png', 'velas/halloween/vaso-fantasma-con-gorro-de-bruja/fantasma-con-gorro-bruja-01-amb01.png', 'velas/halloween/vaso-fantasma-con-gorro-de-bruja/fantasma-con-gorro-bruja-01-amb02.png', 'velas/halloween/vaso-fantasma-con-gorro-de-bruja/fantasma-con-gorro-bruja-01-amb03.png']
  }),
  catalogProduct({
    id: 'arboles-navidad', name: 'Árboles de Navidad', category: 'velas', categoryLabel: 'Velas', collection: 'Navidad',
    state: 'Tres colores', format: 'Velas decorativas moldeadas', description: 'Colección de velas con forma de árbol en blanco, rojo y verde.',
    files: ['velas/navidad/arbol-blanco-01.jpg', 'velas/navidad/arboles blanco 01.jpg', 'velas/navidad/arbol-blanco-01-amb-02.jpg', 'velas/navidad/arbol-rojo-01.jpg', 'velas/navidad/arbol-rojo-01-amb-01.jpg', 'velas/navidad/arbol-rojo-01-amb-02.jpg', 'velas/navidad/arbol-verde-01.jpg', 'velas/navidad/arbol-verde-01-amb-01.jpg', 'velas/navidad/arbol-verde-01-amb-02.jpg']
  }),
  catalogProduct({
    id: 'gnomos-navidad', name: 'Gnomos de Navidad', category: 'velas', categoryLabel: 'Velas', collection: 'Navidad',
    state: 'Colores azul y verde', format: 'Velas decorativas moldeadas', description: 'Colección navideña de gnomos en dos colores.',
    files: ['velas/navidad/gnomo-azul-01.jpg', 'velas/navidad/gnomo-azul-02.jpg', 'velas/navidad/gnomo-azul-01-amb-01.png', 'velas/navidad/gnomo-azul-01-amb-02.png', 'velas/navidad/gnomo-verde-01.jpg', 'velas/navidad/gnomo-verde-02.jpg', 'velas/navidad/gnomo-verde-01-amb-01.png', 'velas/navidad/gnomo-verde-01-amb-02.jpg']
  }),
  catalogProduct({
    id: 'velon-azul-navidad', name: 'Velón azul de Navidad', category: 'velas', categoryLabel: 'Velas', collection: 'Navidad',
    state: 'Modelo único', format: 'Velón decorativo', description: 'Velón azul de temática navideña.',
    files: ['velas/navidad/velon-azul-nav-01.jpg', 'velas/navidad/velon-azul-nav-01-amb-01.jpg', 'velas/navidad/velon-azul-nav-01-amb-02.jpg']
  }),
  catalogProduct({
    id: 'buhos-rituales', name: 'Colección Búhos', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Tres colores', format: 'Velas moldeadas', description: 'Velas con forma de búho disponibles en gris, lila y marrón.',
    files: ['velas/rituales/buho-gris-01.jpeg', 'velas/rituales/buho-gris-02.jpeg', 'velas/rituales/buho-gris-01-amb-01.png', 'velas/rituales/buho-gris-01-amb-02.png', 'velas/rituales/buho-lila-01.jpeg', 'velas/rituales/buho-lila-02.jpeg', 'velas/rituales/buho-lila-01-amb-01.png', 'velas/rituales/buho-lila-01-amb-02.png', 'velas/rituales/buho-marron-01.jpeg', 'velas/rituales/buho-marron-02.jpeg', 'velas/rituales/buho-marron-01-amb-01.png', 'velas/rituales/buho-marron-01-amb-02.png']
  }),
  catalogProduct({
    id: 'vela-chisme', name: 'Vela Chisme', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Consultar disponibilidad', format: 'Vela ritual', description: 'Vela ritual identificada por el cliente como Chisme.',
    files: ['velas/rituales/chisme-01.jpeg', 'velas/rituales/chisme-02.jpeg', 'velas/rituales/chisme-03.jpeg', 'velas/rituales/chisme-02-ambiente-01.jpeg', 'velas/rituales/chisme-02-ambiente-02.jpeg']
  }),
  catalogProduct({
    id: 'vela-gente-toxica', name: 'Vela Gente tóxica', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Consultar disponibilidad', format: 'Vela ritual', description: 'Vela ritual identificada por el cliente como Gente tóxica.',
    files: ['velas/rituales/gentetoxica-01.jpeg', 'velas/rituales/gentetoxica-02.jpeg', 'velas/rituales/gentetoxica-03.jpeg', 'velas/rituales/gentetoxica-01-amb-01.jpeg', 'velas/rituales/gentetoxica-01-amb-02.jpeg']
  }),
  catalogProduct({
    id: 'velas-llave', name: 'Colección Llaves', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Variantes amarilla y verde', format: 'Velas moldeadas', description: 'Velas rituales con forma de llave en diferentes colores y modelos.',
    files: ['velas/rituales/llave-amarilla-01.png', 'velas/rituales/llave-amarilla-02.png', 'velas/rituales/llave-amarilla-01-amb-01.png', 'velas/rituales/llave-amarilla-01-amb-02.png', 'velas/rituales/llave-verde-01.jpg', 'velas/rituales/llave-verde-02.jpg', 'velas/rituales/llave-verde-01-amb-01.jpg', 'velas/rituales/llave-verde-02-amb-02.jpg']
  }),
  catalogProduct({
    id: 'vela-limpieza', name: 'Vela de limpieza', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Modelo único', format: 'Vela ritual preparada', description: 'Vela ritual de limpieza con preparación exterior.',
    files: ['velas/rituales/vela-limieza-01.jpeg', 'velas/rituales/vela de limpieza 01.jpg']
  }),
  catalogProduct({
    id: 'vela-ritual-blanca', name: 'Vela ritual blanca', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Modelo único', format: 'Vela ritual', description: 'Vela ritual blanca de formato alargado.', files: ['velas/rituales/vela-blanca-01.jpeg']
  }),
  catalogProduct({
    id: 'vela-ritual-lavanda', name: 'Vela ritual lavanda', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Imagen provisional', format: 'Vela ritual preparada', description: 'Vela ritual en tono lavanda mostrada en una composición ambientada.', files: ['velas/rituales/vela-lavanda-amb-01.jpg']
  }),
  catalogProduct({
    id: 'vela-luna', name: 'Vela Luna', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Modelo único', format: 'Vela moldeada', description: 'Vela decorativa y ritual con forma de luna.',
    files: ['velas/rituales/vela-luna-01.png', 'velas/rituales/vela-luna-amb-01.png', 'velas/rituales/vela-luna-amb-02.png', 'velas/rituales/vela-luna-amb-03.png']
  }),
  catalogProduct({
    id: 'vela-ruda', name: 'Vela de ruda', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Modelo único', format: 'Vela ritual', description: 'Vela ritual blanca identificada como vela de ruda.',
    files: ['velas/rituales/vela-ruda-blanco-01.jpg', 'velas/rituales/vela-ruda-01-amb-01.jpg']
  }),
  catalogProduct({
    id: 'vela-salud', name: 'Vela Salud', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Modelo único', format: 'Vela ritual', description: 'Vela ritual identificada como Salud.',
    files: ['velas/rituales/vela-salud-01.jpg', 'velas/rituales/vela-salud-01-amb-01.jpg']
  }),
  catalogProduct({
    id: 'vela-sol', name: 'Vela Sol', category: 'velas', categoryLabel: 'Velas', collection: 'Rituales',
    state: 'Modelo único', format: 'Vela moldeada', description: 'Vela decorativa y ritual con forma de sol.',
    files: ['velas/rituales/vela-sol-01.png', 'velas/rituales/vela-sol-amb-01.png', 'velas/rituales/vela-sol-amb-02.png', 'velas/rituales/vela-sol-amb-03.png']
  }),
  catalogProduct({
    id: 'corazon-entre-manos', name: 'Corazón entre manos', category: 'velas', categoryLabel: 'Velas', collection: 'San Valentín',
    state: 'Modelo único', format: 'Vela moldeada', description: 'Vela decorativa con un corazón sostenido entre dos manos.',
    files: ['velas/san-valentin/corzon entre la mano 01.jpeg', 'velas/san-valentin/corazon-entre-manos-01-amb-02.jpeg', 'velas/san-valentin/corazon-entre-manos-01-amb-03.png']
  }),
  catalogProduct({
    id: 'cubo-corazones', name: 'Cubo de corazones', category: 'velas', categoryLabel: 'Velas', collection: 'San Valentín',
    state: 'Variantes roja y rosa', format: 'Vela moldeada', description: 'Vela cúbica formada por pequeños corazones, disponible en diferentes colores.',
    files: ['velas/san-valentin/cuadrado-corazones-rojos-01.jpeg', 'velas/san-valentin/cuadrado-corazones-roza-01.png', 'velas/san-valentin/cuadrado-corazones-rojos-01-amb-01.jpeg', 'velas/san-valentin/cuadrado-corazones-rojos-01-amb-01.png']
  }),
  catalogProduct({
    id: 'vela-pareja', name: 'Vela Pareja', category: 'velas', categoryLabel: 'Velas', collection: 'San Valentín',
    state: 'Modelo único', format: 'Vela moldeada', description: 'Vela decorativa con una composición de pareja.',
    files: ['velas/san-valentin/vela-pareja-01.jpeg', 'velas/san-valentin/vela-pareja-01-amb-01.png']
  }),
  catalogProduct({
    id: 'pareja-entre-alas', name: 'Pareja entre alas', category: 'velas', categoryLabel: 'Velas', collection: 'San Valentín',
    state: 'Modelo único', format: 'Vela moldeada', description: 'Vela decorativa de pareja enmarcada entre alas.',
    files: ['velas/san-valentin/vela-pareja-entre-alas-01.jpg', 'velas/san-valentin/vela-pareja-entre-alas-01-amb-01.png']
  }),
  catalogProduct({
    id: 'vela-ver-infidelidad', name: 'Vela Ver infidelidad', category: 'velas', categoryLabel: 'Velas', collection: 'San Valentín',
    state: 'Consultar disponibilidad', format: 'Vela ritual', description: 'Vela ritual identificada por el cliente como Ver infidelidad.',
    files: ['velas/san-valentin/vela-ver-infidelidad-01.jpeg', 'velas/san-valentin/vela-ver-infidelidad-01-amb-01.jpeg', 'velas/san-valentin/vela-ver-infidelidad-01-amb-02.png']
  }),
  catalogProduct({
    id: 'calavera-amor', name: 'Calavera Amor', category: 'velas', categoryLabel: 'Velas', collection: 'Santa Muerte',
    state: 'Modelo único', format: 'Vela ritual moldeada', description: 'Vela con forma de calavera identificada como Amor.',
    files: ['velas/santa-muerte/calavera-amor-01.jpg', 'velas/santa-muerte/calavera-amor-01-amb-02.jpg', 'velas/santa-muerte/calavera-amor-01-amb-02.png']
  }),
  catalogProduct({
    id: 'calavera-blanca', name: 'Calavera blanca', category: 'velas', categoryLabel: 'Velas', collection: 'Santa Muerte',
    state: 'Dos vistas', format: 'Vela ritual moldeada', description: 'Vela ritual blanca con forma de calavera.',
    files: ['velas/santa-muerte/calavera-blanca-01.jpg', 'velas/santa-muerte/calavera-blanca-02.jpg', 'velas/santa-muerte/calavera-blanca-01-amb-01.jpg']
  }),
  catalogProduct({
    id: 'calavera-dinero', name: 'Calavera Dinero', category: 'velas', categoryLabel: 'Velas', collection: 'Santa Muerte',
    state: 'Modelo único', format: 'Vela ritual moldeada', description: 'Vela con forma de calavera identificada como Dinero.',
    files: ['velas/santa-muerte/calavera-dinero-01.jpg', 'velas/santa-muerte/calavera-dinero-01-amb-01.png']
  }),
  catalogProduct({
    id: 'calavera-negra', name: 'Calavera negra', category: 'velas', categoryLabel: 'Velas', collection: 'Santa Muerte',
    state: 'Modelo único', format: 'Vela ritual moldeada', description: 'Vela ritual negra con forma de calavera.',
    files: ['velas/santa-muerte/calavera-negra-01.jpg', 'velas/santa-muerte/calavera-negra-01-amb-01.jpg']
  }),
  catalogProduct({
    id: 'calavera-abrir-intuicion', name: 'Calavera Abrir intuición', category: 'velas', categoryLabel: 'Velas', collection: 'Santa Muerte',
    state: 'Modelo único', format: 'Vela ritual moldeada', description: 'Vela con forma de calavera identificada como Abrir intuición.',
    files: ['velas/santa-muerte/calavera-open-intui-01.png', 'velas/santa-muerte/calavera-open-intui-01-amb-01.png', 'velas/santa-muerte/calavera-open-intui-01-amb-02.png', 'velas/santa-muerte/calavera-open-intui-01-amb-03.png', 'velas/santa-muerte/calavera-open-intui-01-amb-04.png']
  }),
  catalogProduct({
    id: 'calavera-salud', name: 'Calavera Salud', category: 'velas', categoryLabel: 'Velas', collection: 'Santa Muerte',
    state: 'Modelo único', format: 'Vela ritual moldeada', description: 'Vela con forma de calavera identificada como Salud.',
    files: ['velas/santa-muerte/calavera-salud-01.jpg', 'velas/santa-muerte/calavera-salud-01-amb-01.png']
  })
];

const additionalProductsGrid = document.querySelector('#product-grid');

if (additionalProductsGrid) {
  window.CATALOGO_ADICIONAL.forEach((product) => {
    const detailUrl = `producto-catalogo.html?id=${encodeURIComponent(product.id)}`;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.name = `${product.name} ${product.collection}`;
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
    category.textContent = product.collection;
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
    additionalProductsGrid.appendChild(card);
  });
}
