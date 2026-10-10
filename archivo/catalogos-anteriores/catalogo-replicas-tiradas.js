const replicasYTiradas = [
  {
    id: 'dados-insidious', name: 'Dados de Insidious', category: 'replicas', categoryLabel: 'Réplicas', collection: 'Colección Insidious',
    state: 'Dos modelos', format: 'Réplicas decorativas', description: 'Pareja de dados inspirados en Insidious, mostrados en fotografías de producto y composiciones ambientadas.',
    images: [
      ['productos/replicas/dados-de-insidious/dados-de-insidious-01.jpeg', 'Primer dado inspirado en Insidious', 'Modelo 1 · Fotografía del producto'],
      ['productos/replicas/dados-de-insidious/dados-de-insidious-02.jpeg', 'Segundo dado inspirado en Insidious', 'Modelo 2 · Fotografía del producto'],
      ['productos/replicas/dados-de-insidious/dados-de-insidious-01-amb-01.jpeg', 'Dados de Insidious en una composición ambientada', 'Imagen ambientada 1'],
      ['productos/replicas/dados-de-insidious/dados-de-insidious-01-amb-02.jpeg', 'Dados de Insidious en una segunda composición ambientada', 'Imagen ambientada 2']
    ]
  },
  {
    id: 'carteles-dados-insidious', name: 'Carteles Dados de Insidious', category: 'replicas', categoryLabel: 'Réplicas', collection: 'Colección Insidious',
    state: 'Dos diseños', format: 'Cartel decorativo', description: 'Dos carteles decorativos inspirados en los dados de Insidious.',
    images: [
      ['productos/replicas/dados-de-insidious/cartel-dados-de-insidious-01.png', 'Primer cartel inspirado en los dados de Insidious', 'Diseño 1'],
      ['productos/replicas/dados-de-insidious/cartel-dados-de-insidious-02.jpeg', 'Segundo cartel inspirado en los dados de Insidious', 'Diseño 2']
    ]
  },
  {
    id: 'vaso-dados-insidious', name: 'Vaso Dados de Insidious', category: 'replicas', categoryLabel: 'Réplicas', collection: 'Colección Insidious',
    state: 'Modelo único', format: 'Vaso decorativo', description: 'Vaso decorativo inspirado en los dados de Insidious.',
    images: [
      ['productos/replicas/dados-de-insidious/vaso-dados-de-insidious-01.jpeg', 'Vaso inspirado en los dados de Insidious', 'Fotografía del producto'],
      ['productos/replicas/dados-de-insidious/vaso-dados-de-insidious-01-amb-01.jpeg', 'Vaso de los dados de Insidious en una composición ambientada', 'Imagen ambientada']
    ]
  },
  {
    id: 'oraculo-maria-aranguren', name: 'Oráculo de María Aranguren', category: 'tiradas', categoryLabel: 'Tiradas', collection: 'Oráculo',
    state: 'Tirada de Oráculo 1', format: 'Tirada sencilla', description: 'Tirada sencilla con el Oráculo de María Aranguren, orientada a preguntas sencillas.',
    images: [['productos/tirada/oraculo/oraculo-01.png', 'Presentación de la tirada con Oráculo de María Aranguren', 'Tirada de Oráculo 1']]
  },
  {
    id: 'oraculo-santa-muerte', name: 'Oráculo de la Santa Muerte', category: 'tiradas', categoryLabel: 'Tiradas', collection: 'Oráculo',
    state: 'Tirada de Oráculo 2', format: 'Tirada sencilla', description: 'Tirada sencilla con el Oráculo de la Santa Muerte, orientada a preguntas sencillas.',
    images: [['productos/tirada/oraculo/oraculo-02.jpg', 'Presentación de la tirada con Oráculo de la Santa Muerte', 'Tirada de Oráculo 2']]
  },
  {
    id: 'oraculo-bruja-verde-caseta', name: 'Oráculo de la Bruja Verde · Caseta de Jardín', category: 'tiradas', categoryLabel: 'Tiradas', collection: 'Oráculo',
    state: 'Tirada de Oráculo 3', format: 'Tirada temática', description: 'Tirada Caseta de Jardín realizada con el Oráculo de la Bruja Verde.',
    images: [['productos/tirada/oraculo/oraculo-03.jpg', 'Presentación de la tirada Caseta de Jardín', 'Tirada de Oráculo 3']]
  },
  {
    id: 'oraculo-bruja-verde-ano', name: 'Oráculo de la Bruja Verde · Año del Jardín', category: 'tiradas', categoryLabel: 'Tiradas', collection: 'Oráculo',
    state: 'Tirada de Oráculo 4', format: 'Tirada temática', description: 'Tirada Año del Jardín realizada con el Oráculo de la Bruja Verde.',
    images: [['productos/tirada/oraculo/oraculo-04.png', 'Presentación de la tirada Año del Jardín', 'Tirada de Oráculo 4']]
  },
  {
    id: 'tiradas-tarot', name: 'Tiradas de Tarot', category: 'tiradas', categoryLabel: 'Tiradas', collection: 'Tarot',
    state: 'Siete modalidades', format: 'Consulta personalizada bajo cita previa',
    description: 'Lecturas de tarot bajo cita previa: tirada sencilla, Cruz Celta, Año Nuevo, Amor, Si piensa en ti, Toma de decisión y Salud.',
    images: [
      ['productos/tirada/tarot/tarot-01.jpeg', 'Portada de las tiradas de tarot', 'Tiradas de Tarot'],
      ['productos/tirada/tarot/tarot-02.jpeg', 'Información de las lecturas de tarot bajo cita previa', 'Información de consulta'],
      ['productos/tirada/tarot/tarot-03.jpg', 'Presentación de la tirada sencilla', '1 · Tirada sencilla'],
      ['productos/tirada/tarot/tarot-04.jpg', 'Presentación de la tirada Cruz Celta', '2 · Cruz Celta'],
      ['productos/tirada/tarot/tarot-05.png', 'Presentación de la tirada del Año Nuevo', '3 · Año Nuevo'],
      ['productos/tirada/tarot/tarot-06.png', 'Presentación de la tirada sencilla de Amor', '4 · Amor'],
      ['productos/tirada/tarot/tarot-07.png', 'Presentación de la tirada para saber si una persona piensa en ti', '5 · Si piensa en ti'],
      ['productos/tirada/tarot/tarot-08.png', 'Presentación de la tirada para tomar una decisión', '6 · Toma de decisión'],
      ['productos/tirada/tarot/tarot-09.png', 'Presentación de la tirada sobre la salud', '7 · Salud']
    ]
  }
];

window.CATALOGO_ADICIONAL = [...(window.CATALOGO_ADICIONAL || []), ...replicasYTiradas];

const replicasTiradasGrid = document.querySelector('#product-grid');

if (replicasTiradasGrid) {
  replicasYTiradas.forEach((product) => {
    const detailUrl = `producto-catalogo.html?id=${encodeURIComponent(product.id)}`;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.name = `${product.name} ${product.collection}`;
    card.dataset.price = '0';
    const imageLink = document.createElement('a');
    imageLink.className = 'product-image-link'; imageLink.href = detailUrl; imageLink.setAttribute('aria-label', `Ver ${product.name}`);
    const image = document.createElement('img');
    image.className = 'product-image product-photo'; image.src = product.images[0][0]; image.alt = product.images[0][1]; image.loading = 'lazy'; imageLink.appendChild(image);
    const body = document.createElement('div'); body.className = 'product-body';
    const category = document.createElement('p'); category.className = 'product-category'; category.textContent = product.collection;
    const title = document.createElement('h3'); const titleLink = document.createElement('a'); titleLink.className = 'product-title-link'; titleLink.href = detailUrl; titleLink.textContent = product.name; title.appendChild(titleLink);
    const description = document.createElement('p'); description.className = 'product-description'; description.textContent = product.description;
    const footer = document.createElement('div'); footer.className = 'product-footer';
    const price = document.createElement('strong'); price.textContent = product.category === 'tiradas' ? 'Consultar tarifa' : 'Consultar precio';
    const link = document.createElement('a'); link.href = detailUrl; link.textContent = 'Ver ficha'; footer.append(price, link);
    body.append(category, title, description, footer); card.append(imageLink, body); replicasTiradasGrid.appendChild(card);
  });
}
