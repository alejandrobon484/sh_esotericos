'use strict';

const catalogGrid = document.querySelector('#product-grid');
const serviceGrid = document.querySelector('#service-product-grid');
const serviceCategories = new Set(['tiradas', 'trabajos']);

function createCatalogCard(product) {
    const detailUrl = product.detailUrl;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.collection = product.collection || '';
    card.dataset.name = `${product.name} ${product.collection || product.categoryLabel}`;
    card.dataset.price = (product.price || '').replace(',', '.').replace(/[^\d.]/g, '') || '0';

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
    category.textContent = product.collection || product.categoryLabel;

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
    price.textContent = product.price || (product.category === 'tiradas' ? 'Consultar tarifa' : 'Consultar precio');
    const link = document.createElement('a');
    link.href = detailUrl;
    link.textContent = 'Ver ficha';
    footer.append(price, link);

    body.append(category, title, description, footer);
    card.append(imageLink, body);
    return card;
}

if (catalogGrid) {
  window.CATALOGO_PRODUCTOS
    .filter((product) => !serviceCategories.has(product.category))
    .forEach((product) => catalogGrid.appendChild(createCatalogCard(product)));
}

if (serviceGrid) {
  window.CATALOGO_PRODUCTOS
    .filter((product) => serviceCategories.has(product.category))
    .forEach((product) => serviceGrid.appendChild(createCatalogCard(product)));
}
