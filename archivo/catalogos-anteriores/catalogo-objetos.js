function objectGallery(folder, prefix, count, labels) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    return [
      `productos/objetos/${folder}/${prefix}-${number}.jpeg`,
      `${prefix.replaceAll('-', ' ')}, imagen ${index + 1}`,
      labels[index] || `Imagen ${index + 1}`
    ];
  });
}

const objectProducts = [
  {
    id: 'balsamo-limon', name: 'Bálsamo natural de limón', category: 'objetos', categoryLabel: 'Objetos', collection: 'Bálsamos',
    state: 'Consultar disponibilidad', format: 'Envase metálico', price: '12 €',
    description: 'Bálsamo natural de limón para manos y brazos. Consulta composición, contenido y recomendaciones de uso.',
    images: objectGallery('balsamos/limon', 'balsamo-limon', 4, ['Envase y etiqueta', 'Presentación del envase', 'Imagen de uso', 'Información del producto'])
  },
  {
    id: 'balsamo-menta', name: 'Bálsamo natural de menta', category: 'objetos', categoryLabel: 'Objetos', collection: 'Bálsamos',
    state: 'Consultar disponibilidad', format: 'Envase metálico', price: '12 €',
    description: 'Bálsamo natural de menta para manos y brazos. Consulta composición, contenido y recomendaciones de uso.',
    images: objectGallery('balsamos/menta', 'balsamo-menta', 4, ['Envase y etiqueta', 'Presentación del envase', 'Imagen de uso', 'Información del producto'])
  },
  {
    id: 'balsamo-romero', name: 'Bálsamo natural de romero', category: 'objetos', categoryLabel: 'Objetos', collection: 'Bálsamos',
    state: 'Consultar disponibilidad', format: 'Envase metálico', price: '12 €',
    description: 'Bálsamo natural de romero para manos y brazos. Consulta composición, contenido y recomendaciones de uso.',
    images: objectGallery('balsamos/romero', 'balsamo-romero', 4, ['Envase y etiqueta', 'Presentación del envase', 'Imagen de uso', 'Información del producto'])
  },
  {
    id: 'balsamo-tomillo', name: 'Bálsamo natural de tomillo', category: 'objetos', categoryLabel: 'Objetos', collection: 'Bálsamos',
    state: 'Consultar disponibilidad', format: 'Envase metálico', price: '12 €',
    description: 'Bálsamo natural de tomillo para manos y brazos. Consulta composición, contenido y recomendaciones de uso.',
    images: objectGallery('balsamos/tomillo', 'balsamo-tomillo', 4, ['Envase y etiqueta', 'Presentación del envase', 'Imagen de uso', 'Información del producto'])
  },
  {
    id: 'pulseras-siete-nudos', name: 'Pulseras de 7 nudos', category: 'objetos', categoryLabel: 'Objetos', collection: 'Pulseras',
    state: 'Nueve colores', format: 'Pulsera ajustable y ritualizada', price: '5 €',
    description: 'Pulsera ajustable de siete nudos disponible en amarillo, azul, blanco, morado, naranja, negro, rojo, rosa y verde.',
    images: ['amarilla', 'azul', 'blanca', 'morada', 'naranja', 'negra', 'roja', 'rosa', 'verde'].flatMap((color) =>
      objectGallery(`pulsera/pulsera-7-nudos/${color}`, `pulsera-${color}`, 4, [
        `${color} · Fotografía del producto`,
        `${color} · Colocación en muñeca`,
        `${color} · Colocación alternativa`,
        `${color} · Información de la pulsera`
      ])
    )
  }
];

window.CATALOGO_ADICIONAL = [...(window.CATALOGO_ADICIONAL || []), ...objectProducts];

const objectProductsGrid = document.querySelector('#product-grid');

if (objectProductsGrid) {
  objectProducts.forEach((product) => {
    const detailUrl = `producto-catalogo.html?id=${encodeURIComponent(product.id)}`;
    const card = document.createElement('article');
    card.className = 'product-card'; card.dataset.category = product.category; card.dataset.name = `${product.name} ${product.collection}`; card.dataset.price = product.price.replace(',', '.').replace(/[^\d.]/g, '') || '0';
    const imageLink = document.createElement('a'); imageLink.className = 'product-image-link'; imageLink.href = detailUrl; imageLink.setAttribute('aria-label', `Ver ${product.name}`);
    const image = document.createElement('img'); image.className = 'product-image product-photo'; image.src = product.images[0][0]; image.alt = product.images[0][1]; image.loading = 'lazy'; imageLink.appendChild(image);
    const body = document.createElement('div'); body.className = 'product-body';
    const category = document.createElement('p'); category.className = 'product-category'; category.textContent = product.collection;
    const title = document.createElement('h3'); const titleLink = document.createElement('a'); titleLink.className = 'product-title-link'; titleLink.href = detailUrl; titleLink.textContent = product.name; title.appendChild(titleLink);
    const description = document.createElement('p'); description.className = 'product-description'; description.textContent = product.description;
    const footer = document.createElement('div'); footer.className = 'product-footer'; const price = document.createElement('strong'); price.textContent = product.price;
    const link = document.createElement('a'); link.href = detailUrl; link.textContent = 'Ver ficha'; footer.append(price, link);
    body.append(category, title, description, footer); card.append(imageLink, body); objectProductsGrid.appendChild(card);
  });
}
