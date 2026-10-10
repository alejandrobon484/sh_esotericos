function catalogImage(path, alt, label) {
  return [path, alt, label];
}

function tinturaProduct(id, name, files) {
  return {
    id: `tintura-${id}`,
    name: `Esencia de ${name}`,
    category: 'tinturas',
    categoryLabel: 'Tinturas',
    collection: 'Esencias en spray',
    state: 'Consultar disponibilidad',
    format: 'Spray de 30 ml',
    description: `Esencia de ${name.toLowerCase()} en formato spray de 30 ml. Consulta composición, indicaciones y modo de uso antes de realizar el pedido.`,
    images: files.map((file, index) => catalogImage(
      `productos/tintura/${file}`,
      `Esencia de ${name}, imagen ${index + 1}`,
      index === 0 ? 'Fotografía del producto' : `Presentación del producto · Imagen ${index + 1}`
    ))
  };
}

const tinturaProducts = [
  tinturaProduct('adivinacion', 'Adivinación', ['adivinacion-01.jpg', 'adivinacion-02.png']),
  tinturaProduct('amor', 'Amor', ['amor-01.jpg', 'amor-02.png']),
  tinturaProduct('dinero', 'Dinero', ['dinero-01.jpg', 'dinero-02.png']),
  tinturaProduct('espiritualidad', 'Espiritualidad', ['espiritualidad-01.jpg', 'espiritualidad-02.png']),
  tinturaProduct('eucalipto', 'Eucalipto', ['eucalipto-01.jpg', 'eucalipto-02.jpg', 'eucalipto-03.jpg']),
  tinturaProduct('felicidad', 'Felicidad', ['felicidad-01.jpg', 'felicidad-02.png']),
  tinturaProduct('hierbabuena', 'Hierbabuena', ['hierbabuena-01.jpg', 'hierbabuena-02.jpg']),
  tinturaProduct('lavanda', 'Lavanda', ['lavanda-01.jpg', 'lavanda-02.jpg']),
  tinturaProduct('lujuria', 'Lujuria', ['lujuria-01.jpg', 'lujuria-02.png']),
  tinturaProduct('menta-piperita', 'Menta piperita', ['menta-piperita-01.jpg', 'menta-piperita-02.png']),
  tinturaProduct('paz', 'Paz', ['paz-01.jpg', 'paz-02.png']),
  tinturaProduct('proteccion', 'Protección', ['proteccion-01.jpg', 'proteccion-02.png']),
  tinturaProduct('purificacion', 'Purificación', ['purificacion-01.jpg', 'purificacion-02.png']),
  tinturaProduct('romero', 'Romero', ['romero-01.jpg', 'romero-02.jpg', 'romero-03.png']),
  tinturaProduct('salud', 'Salud', ['salud-01.jpg', 'salud-02.png']),
  tinturaProduct('vainilla', 'Vainilla', ['vainilla-01.png', 'vainilla-02.png']),
  tinturaProduct('valor', 'Valor', ['valor-01.jpg', 'valor-02.png'])
];

function jabonBalsamoProduct(id, name, file) {
  return {
    id: `kit-jabon-balsamo-${id}`,
    name: `Kit jabón y bálsamo de ${name}`,
    category: 'kits',
    categoryLabel: 'Kits',
    collection: 'Jabón y bálsamo',
    state: 'Consultar disponibilidad',
    format: 'Jabón artesanal y bálsamo',
    price: '18 €',
    description: `Conjunto de jabón artesanal y bálsamo de ${name.toLowerCase()}. Consulta composición, contenido y recomendaciones de uso.`,
    images: [catalogImage(`productos/kits/jabon-y-balsamo/${file}`, `Kit de jabón y bálsamo de ${name}`, 'Presentación del conjunto')]
  };
}

const kitProducts = [
  jabonBalsamoProduct('menta', 'menta', 'jab-balsam-menta-01.jpeg'),
  jabonBalsamoProduct('romero', 'romero', 'jab-balsam-romero-01.jpeg'),
  jabonBalsamoProduct('tomillo', 'tomillo', 'jab-balsam-tomillo-01.jpeg'),
  {
    id: 'kit-noche-san-juan-1', name: 'Kit Noche de San Juan 1', category: 'kits', categoryLabel: 'Kits', collection: 'Noche de San Juan',
    state: 'Consultar disponibilidad', format: 'Kit ritual con instrucciones',
    description: 'Conjunto preparado para la Noche de San Juan con productos e instrucciones. Consulta el contenido exacto y la disponibilidad.',
    images: [
      catalogImage('productos/kits/kit-1-noche-sanjuan/kit-1-noche-sanjuan-kit-01.jpeg', 'Contenido del Kit Noche de San Juan 1', 'Contenido del kit'),
      catalogImage('productos/kits/kit-1-noche-sanjuan/kit-1-noche-sanjuan-velon-01.jpeg', 'Velón del Kit Noche de San Juan 1', 'Detalle del velón · Imagen 1'),
      catalogImage('productos/kits/kit-1-noche-sanjuan/kit-1-noche-sanjuan-velon-02.jpeg', 'Velón del Kit Noche de San Juan 1, segunda vista', 'Detalle del velón · Imagen 2'),
      catalogImage('productos/kits/kit-1-noche-sanjuan/kit-1-noche-sanjuan-amb-01.jpeg', 'Representación ambientada del Kit Noche de San Juan 1', 'Imagen ambientada · Representación visual'),
      catalogImage('productos/kits/kit-1-noche-sanjuan/kit-1-noche-sanjuan-amb-02.png', 'Presentación del Kit Noche de San Juan 1', 'Presentación promocional')
    ]
  },
  {
    id: 'kit-noche-san-juan-2', name: 'Kit Noche de San Juan 2', category: 'kits', categoryLabel: 'Kits', collection: 'Noche de San Juan',
    state: 'Consultar disponibilidad', format: 'Kit ritual con instrucciones',
    description: 'Conjunto de Noche de San Juan orientado a la estabilidad económica. Consulta el contenido exacto, las instrucciones y la disponibilidad.',
    images: [
      catalogImage('productos/kits/kit-2-noche-sanjuan/kit-2-noche-sanjuan-kit-01.jpeg', 'Contenido del Kit Noche de San Juan 2', 'Contenido del kit'),
      catalogImage('productos/kits/kit-2-noche-sanjuan/kit-2-noche-sanjuan-velon-01.jpeg', 'Velón del Kit Noche de San Juan 2', 'Detalle del velón · Imagen 1'),
      catalogImage('productos/kits/kit-2-noche-sanjuan/kit-2-noche-sanjuan-velon-02.jpeg', 'Velón del Kit Noche de San Juan 2, segunda vista', 'Detalle del velón · Imagen 2'),
      catalogImage('productos/kits/kit-2-noche-sanjuan/kit-2-noche-sanjuan-publi-01.jpeg', 'Presentación promocional del Kit Noche de San Juan 2', 'Presentación promocional · Imagen 1'),
      catalogImage('productos/kits/kit-2-noche-sanjuan/kit-2-noche-sanjuan-publi-02.png', 'Presentación del Kit Noche de San Juan 2', 'Presentación promocional · Imagen 2')
    ]
  },
  {
    id: 'kit-limpieza-energetica', name: 'Kit de limpieza energética', category: 'kits', categoryLabel: 'Kits', collection: 'Limpieza energética',
    state: 'Consultar disponibilidad', format: 'Kit ritual con instrucciones',
    description: 'Conjunto preparado para un trabajo de limpieza energética. Consulta el contenido exacto, las instrucciones y la disponibilidad.',
    images: [
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-01.jpeg', 'Kit de limpieza energética', 'Presentación del kit · Imagen 1'),
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-02.jpeg', 'Contenido del kit de limpieza energética', 'Presentación del kit · Imagen 2'),
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-jabon-01.jpeg', 'Jabón del kit de limpieza energética', 'Detalle del jabón'),
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-sobre-01.jpeg', 'Sobre del kit de limpieza energética', 'Detalle del contenido'),
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-amb-01.jpeg', 'Representación ambientada del kit de limpieza energética', 'Imagen ambientada · Representación visual 1'),
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-amb-02.jpeg', 'Representación ambientada del kit de limpieza energética, segunda imagen', 'Imagen ambientada · Representación visual 2'),
      catalogImage('productos/kits/kit-limpieza-energia/kit-limpieza-energia-amb-03.jpeg', 'Representación ambientada del kit de limpieza energética, tercera imagen', 'Imagen ambientada · Representación visual 3'),
      catalogImage('productos/kits/kit-limpieza-energia/WhatsApp Image 2026-05-25 at 21.47.14.jpeg', 'Información del kit de limpieza energética', 'Información del producto')
    ]
  },
  {
    id: 'kit-velas-suerte', name: 'Kit de velas de la suerte', category: 'kits', categoryLabel: 'Kits', collection: 'Velas preparadas',
    state: 'Consultar disponibilidad', format: 'Conjunto de tres velas',
    description: 'Conjunto de tres velas preparadas y presentadas en caja. Consulta colores, intención, instrucciones y disponibilidad.',
    images: [
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-01.jpeg', 'Kit de velas de la suerte', 'Presentación del kit · Imagen 1'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-02.jpeg', 'Kit de velas de la suerte, segunda vista', 'Presentación del kit · Imagen 2'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-3velas-01.jpeg', 'Tres velas del kit de la suerte', 'Conjunto de tres velas'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-amarilla-01.jpeg', 'Vela amarilla del kit de la suerte', 'Detalle de la vela amarilla'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-azul-01.jpeg', 'Vela azul del kit de la suerte', 'Detalle de la vela azul'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-roja-01.jpeg', 'Vela roja del kit de la suerte', 'Detalle de la vela roja'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-amb-01.jpeg', 'Representación ambientada del kit de velas de la suerte', 'Imagen ambientada · Representación visual 1'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-amb-02.jpeg', 'Representación ambientada del kit de velas de la suerte, segunda imagen', 'Imagen ambientada · Representación visual 2'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-amb-03.jpeg', 'Representación ambientada del kit de velas de la suerte, tercera imagen', 'Imagen ambientada · Representación visual 3'),
      catalogImage('productos/kits/kit-vela-suerte/kit-vela-suerte-amb-04.jpeg', 'Representación ambientada del kit de velas de la suerte, cuarta imagen', 'Imagen ambientada · Representación visual 4')
    ]
  },
  {
    id: 'kit-samhain', name: 'Kit Samhain', category: 'kits', categoryLabel: 'Kits', collection: 'Samhain',
    state: 'Consultar disponibilidad', format: 'Kit ritual',
    description: 'Conjunto de Samhain con velón, bolsa ritual y pieza pirograbada. La presentación incluye además una tirada de tres cartas para una pregunta concreta. Consulta el contenido y las condiciones.',
    images: [
      catalogImage('productos/kits/kit-shamain/kit-shamain-completo-01.png', 'Contenido del Kit Samhain', 'Presentación completa · Imagen 1'),
      catalogImage('productos/kits/kit-shamain/kit-shamain-completo-02.png', 'Contenido del Kit Samhain, segunda vista', 'Presentación completa · Imagen 2'),
      catalogImage('productos/kits/kit-shamain/kit-shamain-completo-03.png', 'Contenido del Kit Samhain, tercera vista', 'Presentación completa · Imagen 3'),
      catalogImage('productos/kits/kit-shamain/kit-shamain-bolsa-01.png', 'Bolsa ritual del Kit Samhain', 'Detalle de la bolsa ritual'),
      catalogImage('productos/kits/kit-shamain/kit-shamain-pirografo-01.png', 'Pieza pirograbada del Kit Samhain', 'Detalle de la pieza pirograbada'),
      catalogImage('productos/kits/kit-shamain/kit-shamain-velon-01.png', 'Velón del Kit Samhain', 'Detalle del velón')
    ]
  }
];

const sanValentinProducts = [
  {
    id: 'san-valentin-set-amor', name: 'Set Amor', category: 'san-valentin', categoryLabel: 'San Valentín', collection: 'San Valentín',
    state: 'Edición de temporada', format: 'Set individual', price: '34,99 €',
    description: 'Set individual con jabón Amor, baño de hierbas, difusor con esencia de Amor y vela ritualizada de Amor.',
    images: [catalogImage('productos/san-valentin/sv-set-amor-01.jpg', 'Set Amor de San Valentín', 'Contenido y precio del set')]
  },
  {
    id: 'san-valentin-set-amor-duo', name: 'Set Amor Dúo', category: 'san-valentin', categoryLabel: 'San Valentín', collection: 'San Valentín',
    state: 'Edición de temporada', format: 'Set para dos', price: '59,99 €',
    description: 'Set para dos con dos jabones Amor, dos baños de hierbas, dos difusores con esencia de Amor y dos velas ritualizadas de Amor.',
    images: [catalogImage('productos/san-valentin/sv-set-amor-duo-01.jpg', 'Set Amor Dúo de San Valentín', 'Contenido y precio del set para dos')]
  },
  {
    id: 'san-valentin-set-lujuria', name: 'Set Lujuria', category: 'san-valentin', categoryLabel: 'San Valentín', collection: 'San Valentín',
    state: 'Edición de temporada', format: 'Set individual', price: '39,99 €',
    description: 'Set individual con jabón Lujuria, baño de hierbas, difusor con esencia de Lujuria y vela ritualizada de Lujuria.',
    images: [catalogImage('productos/san-valentin/sv-set-lujuria-01.jpg', 'Set Lujuria de San Valentín', 'Contenido y precio del set')]
  },
  {
    id: 'san-valentin-set-lujuria-duo', name: 'Set Lujuria Dúo', category: 'san-valentin', categoryLabel: 'San Valentín', collection: 'San Valentín',
    state: 'Edición de temporada', format: 'Set para dos', price: '69,99 €',
    description: 'Set para dos con dos jabones Lujuria, dos baños de hierbas, dos difusores con esencia de Lujuria y dos velas ritualizadas de Lujuria.',
    images: [catalogImage('productos/san-valentin/sv-set-lujuria-duo-01.jpg', 'Set Lujuria Dúo de San Valentín', 'Contenido y precio del set para dos')]
  }
];

const tinturaKitProducts = [...tinturaProducts, ...kitProducts, ...sanValentinProducts];
window.CATALOGO_ADICIONAL = [...(window.CATALOGO_ADICIONAL || []), ...tinturaKitProducts];

const tinturaKitGrid = document.querySelector('#product-grid');

if (tinturaKitGrid) {
  tinturaKitProducts.forEach((product) => {
    const detailUrl = `producto-catalogo.html?id=${encodeURIComponent(product.id)}`;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.name = `${product.name} ${product.collection}`;
    card.dataset.price = (product.price || '').replace(',', '.').replace(/[^\d.]/g, '') || '0';

    const imageLink = document.createElement('a');
    imageLink.className = 'product-image-link'; imageLink.href = detailUrl; imageLink.setAttribute('aria-label', `Ver ${product.name}`);
    const image = document.createElement('img');
    image.className = 'product-image product-photo'; image.src = product.images[0][0]; image.alt = product.images[0][1]; image.loading = 'lazy'; imageLink.appendChild(image);

    const body = document.createElement('div'); body.className = 'product-body';
    const category = document.createElement('p'); category.className = 'product-category'; category.textContent = product.collection;
    const title = document.createElement('h3');
    const titleLink = document.createElement('a'); titleLink.className = 'product-title-link'; titleLink.href = detailUrl; titleLink.textContent = product.name; title.appendChild(titleLink);
    const description = document.createElement('p'); description.className = 'product-description'; description.textContent = product.description;
    const footer = document.createElement('div'); footer.className = 'product-footer';
    const price = document.createElement('strong'); price.textContent = product.price || 'Consultar precio';
    const link = document.createElement('a'); link.href = detailUrl; link.textContent = 'Ver ficha'; footer.append(price, link);
    body.append(category, title, description, footer); card.append(imageLink, body); tinturaKitGrid.appendChild(card);
  });
}
