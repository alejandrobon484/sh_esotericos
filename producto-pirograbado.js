const productId = new URLSearchParams(window.location.search).get('id');
const product = window.PIROGRABADOS_CATALOGO.find((item) => item.id === productId);
const detailContent = document.querySelector('#detail-content');
const notFound = document.querySelector('#product-not-found');
const story = document.querySelector('#product-story');

if (!product) {
  detailContent.hidden = true;
  story.hidden = true;
  notFound.hidden = false;
} else {
  document.title = `${product.name} — SH Esotéricos`;
  document.querySelector('meta[name="description"]').content = product.description;
  document.querySelector('#breadcrumb-name').textContent = product.name;
  document.querySelector('#product-name').textContent = product.name;
  document.querySelector('#product-state').textContent = product.state;
  document.querySelector('#product-description').textContent = product.description;
  document.querySelector('#product-format').textContent = product.format;
  document.querySelector('#whatsapp-link').href = window.SH_CONTACTO.whatsappUrl(`Hola Manu, quiero consultar el pirograbado ${product.name}`);

  const points = document.querySelector('#product-points');
  product.points.forEach((point) => {
    const item = document.createElement('li');
    item.textContent = point;
    points.appendChild(item);
  });

  const mainImage = document.querySelector('#gallery-main-image');
  const imageLabel = document.querySelector('#gallery-label');
  const thumbnails = document.querySelector('#gallery-thumbs');

  function selectImage(image, selectedButton) {
    mainImage.src = image[0];
    mainImage.alt = image[1];
    imageLabel.textContent = image[2];
    [...thumbnails.children].forEach((button) => {
      button.setAttribute('aria-pressed', String(button === selectedButton));
    });
  }

  product.images.forEach((image, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-thumb';
    button.type = 'button';
    button.setAttribute('aria-pressed', String(index === 0));
    button.setAttribute('aria-label', `Ver ${image[2]}`);

    const thumbnail = document.createElement('img');
    thumbnail.src = image[0];
    thumbnail.alt = image[1];
    if (index > 0) thumbnail.loading = 'lazy';
    button.appendChild(thumbnail);
    button.addEventListener('click', () => selectImage(image, button));
    thumbnails.appendChild(button);
  });

  selectImage(product.images[0], thumbnails.firstElementChild);
}
