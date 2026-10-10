function soapProduct(id, name, collection, folder, files, format, description) {
  return {
    id: `jabon-${id}`,
    name,
    category: 'jabones',
    categoryLabel: 'Jabones',
    collection,
    state: 'Consultar disponibilidad',
    format,
    description,
    images: files.map((file, index) => [
      `productos/jabones/${folder}/${file}`,
      `${name}, imagen ${index + 1}`,
      index === 0 ? 'Fotografía del producto' : `Presentación del producto · Imagen ${index + 1}`
    ])
  };
}

const soapProducts = [
  soapProduct('plantas-eucalipto', 'Jabón con plantas de eucalipto', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-eucalipto-01.png', 'jab-plts-eucalipto-01b.png', 'jab-plts-eucalipto-01c.png', 'jab-plts-eucalipto-01d.jpeg'
  ], 'Pastilla artesanal', 'Jabón artesanal elaborado con eucalipto. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-lavanda', 'Jabón con plantas de lavanda', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-lavanda-01.jpg', 'jab-plts-lavanda-01b.jpg', 'jab-plts-lavanda-01c.jpg', 'jab-plts-lavanda-02.jpg', 'jab-plts-lavanda-02b.png', 'jab-plts-lavanda-02c.png', 'jab-plts-lavanda-02d.png'
  ], 'Pastilla artesanal', 'Jabón artesanal elaborado con lavanda. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-menta', 'Jabón con plantas de menta', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-menta-01.jpg', 'jab-plts-menta-01b.jpg', 'jab-plts-menta-01c.jpg', 'jab-plts-menta-01d.jpg', 'jab-plts-menta-01e.png',
    'jab-plts-menta2-01.jpg', 'jab-plts-menta2-01b.png', 'jab-plts-menta2-01c.png', 'jab-plts-menta2-01d.png'
  ], 'Pastilla artesanal', 'Jabón artesanal elaborado con menta. La galería reúne las dos presentaciones disponibles; consulta composición, peso y acabado.'),
  soapProduct('plantas-romero', 'Jabón con plantas de romero', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-romero-01.jpg', 'jab-plts-romero-01b.jpg', 'jab-plts-romero-01c.jpg', 'jab-plts-romero-01d.png'
  ], 'Pastilla artesanal', 'Jabón artesanal elaborado con romero en formato estándar. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-romero-grande', 'Jabón con plantas de romero grande', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-romero-grande-01.jpg', 'jab-plts-romero-grande-01.png', 'jab-plts-romero-grande-01c.png'
  ], 'Pastilla grande', 'Jabón artesanal elaborado con romero en formato grande. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-ruda', 'Jabón con plantas de ruda', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-ruda-01.jpg', 'jab-plts-ruda-01b.png', 'jab-plts-ruda-01c.png', 'jab-plts-ruda-01d.png', 'jab-plts-ruda-01e.png'
  ], 'Pastilla artesanal', 'Jabón artesanal elaborado con ruda en formato estándar. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-ruda-chico', 'Jabón con plantas de ruda chico', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-ruda-chico-01.png', 'jab-plts-ruda-chico-01b.png'
  ], 'Pastilla pequeña', 'Jabón artesanal elaborado con ruda en formato chico. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-tomillo', 'Jabón con plantas de tomillo', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-tomillo-01.jpg', 'jab-plts-tomillo-01b.png', 'jab-plts-tomillo-01c.png'
  ], 'Pastilla artesanal', 'Jabón artesanal elaborado con tomillo en formato estándar. Consulta composición, peso y recomendaciones de uso.'),
  soapProduct('plantas-tomillo-chico', 'Jabón con plantas de tomillo chico', 'Jabones con plantas', 'jabones-con-plantas', [
    'jab-plts-tomillo-chico-01.png', 'jab-plts-tomillo-chico-01b.png'
  ], 'Pastilla pequeña', 'Jabón artesanal elaborado con tomillo en formato chico. Consulta composición, peso y recomendaciones de uso.'),

  soapProduct('alepo', 'Jabón de Alepo', 'Jabones para piel atópica', 'jabones-de-piel-atopica', [
    'jabones-de-piel-atopica-alepo-01.jpeg', 'jabones-de-piel-atopica-alepo-02.jpeg', 'jabones-de-piel-atopica-alepo-03.jpeg', 'jabones-de-piel-atopica-alepo-04.png', 'jabones-de-piel-atopica-alepo-05.png', 'jabones-de-piel-atopica-alepo-06.png'
  ], 'Pastilla artesanal', 'Jabón artesanal de Alepo de la línea para piel atópica. Consulta ingredientes, peso y recomendaciones antes de usarlo.'),
  soapProduct('alepo-grande', 'Jabón de Alepo grande', 'Jabones para piel atópica', 'jabones-de-piel-atopica', [
    'jabones-de-piel-atopica-alepo-grande-01.jpeg', 'jabones-de-piel-atopica-alepo-grande-02.jpeg', 'jabones-de-piel-atopica-alepo-grande-03.png', 'jabones-de-piel-atopica-alepo-grande-04.png', 'jabones-de-piel-atopica-alepo-grande-05.png'
  ], 'Pastilla grande', 'Jabón artesanal de Alepo en formato grande, perteneciente a la línea para piel atópica. Consulta ingredientes, peso y recomendaciones antes de usarlo.'),
  soapProduct('calendula', 'Jabón de caléndula', 'Jabones para piel atópica', 'jabones-de-piel-atopica', [
    'jabones-de-piel-atopica-calendula-01.png', 'jabones-de-piel-atopica-calendula-02.png', 'jabones-de-piel-atopica-calendula-03.png', 'jabones-de-piel-atopica-calendula-04.png'
  ], 'Pastilla artesanal', 'Jabón artesanal de caléndula de la línea para piel atópica. Consulta ingredientes, peso y recomendaciones antes de usarlo.'),
  soapProduct('calendula-grande', 'Jabón de caléndula grande', 'Jabones para piel atópica', 'jabones-de-piel-atopica', [
    'jabones-de-piel-atopica-calendula-grande-01.jpeg', 'jabones-de-piel-atopica-calendula-grande-02.jpeg', 'jabones-de-piel-atopica-calendula-grande-03.jpeg', 'jabones-de-piel-atopica-calendula-grande-04.png', 'jabones-de-piel-atopica-calendula-grande-05.png', 'jabones-de-piel-atopica-calendula-grande-06.png'
  ], 'Pastilla grande', 'Jabón artesanal de caléndula en formato grande, perteneciente a la línea para piel atópica. Consulta ingredientes, peso y recomendaciones antes de usarlo.'),

  soapProduct('ritualizado-amor', 'Jabón ritualizado de Amor', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-de-amor-01.jpg', 'jabones-ritualizados-de-amor-02.png', 'jabones-ritualizados-de-amor-03.png', 'jabones-ritualizados-de-amor-04.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado para la intención de Amor. Consulta composición, preparación y modo de uso.'),
  soapProduct('ritualizado-bruja', 'Jabón ritualizado de Bruja', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-de-bruja-01.jpg', 'jabones-ritualizados-de-bruja-02.png', 'jabones-ritualizados-de-bruja-03.png', 'jabones-ritualizados-de-bruja-04.png', 'jabones-ritualizados-de-bruja-05.png', 'jabones-ritualizados-de-bruja-06.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado de Bruja. Consulta composición, preparación, intención y modo de uso.'),
  soapProduct('ritualizado-suerte', 'Jabón ritualizado de la Suerte', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-de-la-suerte-01.jpg', 'jabones-ritualizados-de-la-suerte-02.png', 'jabones-ritualizados-de-la-suerte-03.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado para la intención de Suerte. Consulta composición, preparación y modo de uso.'),
  soapProduct('ritualizado-dinero', 'Jabón ritualizado del Dinero', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-del-dinero-01.jpg', 'jabones-ritualizados-del-dinero-02.png', 'jabones-ritualizados-del-dinero-03.png', 'jabones-ritualizados-del-dinero-04.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado para la intención de Dinero. Consulta composición, preparación y modo de uso.'),
  soapProduct('ritualizado-protege', 'Jabón ritualizado Protege', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-protege-01.jpg', 'jabones-ritualizados-protege-02.png', 'jabones-ritualizados-protege-03.png', 'jabones-ritualizados-protege-04.png', 'jabones-ritualizados-protege-05.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado para una intención de protección. Consulta composición, preparación y modo de uso.'),
  soapProduct('ritualizado-psiquico', 'Jabón ritualizado Psíquico', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-psiquico-01.jpg', 'jabones-ritualizados-psiquico-02.jpg', 'jabones-ritualizados-psiquico-03.jpg', 'jabones-ritualizados-psiquico-04.jpg', 'jabones-ritualizados-psiquico-05.png', 'jabones-ritualizados-psiquico-06.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado Psíquico. Consulta composición, preparación, intención y modo de uso.'),
  soapProduct('ritualizado-purifica', 'Jabón ritualizado Purifica', 'Jabones ritualizados', 'jabones-ritualizados', [
    'jabones-ritualizados-purifica-01.jpg', 'jabones-ritualizados-purifica-02.png', 'jabones-ritualizados-purifica-03.png', 'jabones-ritualizados-purifica-04.png'
  ], 'Pastilla ritualizada', 'Jabón artesanal ritualizado para una intención de purificación. Consulta composición, preparación y modo de uso.')
];

window.CATALOGO_ADICIONAL = [...(window.CATALOGO_ADICIONAL || []), ...soapProducts];

const soapProductsGrid = document.querySelector('#product-grid');

if (soapProductsGrid) {
  soapProducts.forEach((product) => {
    const detailUrl = `producto-catalogo.html?id=${encodeURIComponent(product.id)}`;
    const card = document.createElement('article');
    card.className = 'product-card'; card.dataset.category = product.category; card.dataset.name = `${product.name} ${product.collection}`; card.dataset.price = '0';
    const imageLink = document.createElement('a'); imageLink.className = 'product-image-link'; imageLink.href = detailUrl; imageLink.setAttribute('aria-label', `Ver ${product.name}`);
    const image = document.createElement('img'); image.className = 'product-image product-photo'; image.src = product.images[0][0]; image.alt = product.images[0][1]; image.loading = 'lazy'; imageLink.appendChild(image);
    const body = document.createElement('div'); body.className = 'product-body';
    const category = document.createElement('p'); category.className = 'product-category'; category.textContent = product.collection;
    const title = document.createElement('h3'); const titleLink = document.createElement('a'); titleLink.className = 'product-title-link'; titleLink.href = detailUrl; titleLink.textContent = product.name; title.appendChild(titleLink);
    const description = document.createElement('p'); description.className = 'product-description'; description.textContent = product.description;
    const footer = document.createElement('div'); footer.className = 'product-footer'; const price = document.createElement('strong'); price.textContent = 'Consultar precio';
    const link = document.createElement('a'); link.href = detailUrl; link.textContent = 'Ver ficha'; footer.append(price, link);
    body.append(category, title, description, footer); card.append(imageLink, body); soapProductsGrid.appendChild(card);
  });
}
