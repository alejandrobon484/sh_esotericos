const catalogProductId = new URLSearchParams(window.location.search).get('id');
const catalogItem = window.CATALOGO_ADICIONAL.find((item) => item.id === catalogProductId);
const catalogDetail = document.querySelector('#detail-content');
const catalogNotFound = document.querySelector('#product-not-found');

if (!catalogItem) {
  catalogDetail.hidden = true;
  catalogNotFound.hidden = false;
} else {
  function categoryReturnUrl(product) {
    if (product.category === 'tiradas' || product.category === 'trabajos') {
      return `index.html?servicio=${encodeURIComponent(product.category)}#service-catalog`;
    }
    if (product.collection === 'Halloween') {
      return 'index.html?coleccion=halloween#catalogo';
    }
    if (product.category === 'san-valentin') {
      return 'index.html?coleccion=san-valentin#catalogo';
    }
    return `index.html?categoria=${encodeURIComponent(product.category)}#catalogo`;
  }

  const returnUrl = categoryReturnUrl(catalogItem);
  document.title = `${catalogItem.name} — SH Esotéricos`;
  document.querySelector('meta[name="description"]').content = catalogItem.summary || catalogItem.description;
  const breadcrumbCategory = document.querySelector('#breadcrumb-category');
  breadcrumbCategory.textContent = catalogItem.categoryLabel;
  breadcrumbCategory.href = returnUrl;
  document.querySelector('#back-to-category').href = returnUrl;
  document.querySelector('#breadcrumb-name').textContent = catalogItem.name;
  document.querySelector('#product-collection').textContent = catalogItem.collection;
  document.querySelector('#product-name').textContent = catalogItem.name;
  document.querySelector('#product-state').textContent = catalogItem.state;
  document.querySelector('#product-description').textContent = catalogItem.description;
  document.querySelector('#product-category').textContent = catalogItem.categoryLabel;
  document.querySelector('#product-collection-data').textContent = catalogItem.collection;
  document.querySelector('#product-format').textContent = catalogItem.format;
  const sizeBadge = document.querySelector('#product-size-badge');
  if (catalogItem.badge) {
    sizeBadge.textContent = catalogItem.badge;
    sizeBadge.hidden = false;
  }
  const displayedPrice = catalogItem.price || (catalogItem.category === 'tiradas' ? 'Consultar tarifa' : 'Consultar precio');
  document.querySelector('#product-price').textContent = displayedPrice;
  document.querySelector('#product-price-data').textContent = displayedPrice;
  document.querySelector('#whatsapp-link').href = window.SH_CONTACTO.whatsappUrl(`Hola Manu, quiero consultar: ${catalogItem.name}`);

  const mainImage = document.querySelector('#gallery-main-image');
  const imageLabel = document.querySelector('#gallery-label');
  const thumbnails = document.querySelector('#gallery-thumbs');
  if (catalogItem.images.length > 12) thumbnails.classList.add('is-long');
  function selectCatalogImage(image, selectedButton) {
    mainImage.src = image[0]; mainImage.alt = image[1]; imageLabel.textContent = image[2];
    [...thumbnails.children].forEach((button) => button.setAttribute('aria-pressed', String(button === selectedButton)));
  }
  if (catalogItem.images.length === 1) {
    thumbnails.hidden = true;
    selectCatalogImage(catalogItem.images[0], null);
  } else {
    catalogItem.images.forEach((image, index) => {
      const button = document.createElement('button'); button.className = 'gallery-thumb'; button.type = 'button';
      button.setAttribute('aria-pressed', String(index === 0)); button.setAttribute('aria-label', `Ver imagen ${index + 1} de ${catalogItem.name}`);
      const thumbnail = document.createElement('img'); thumbnail.src = image[0]; thumbnail.alt = image[1]; if (index > 0) thumbnail.loading = 'lazy';
      button.appendChild(thumbnail); button.addEventListener('click', () => selectCatalogImage(image, button)); thumbnails.appendChild(button);
    });
    selectCatalogImage(catalogItem.images[0], thumbnails.firstElementChild);
  }
}
