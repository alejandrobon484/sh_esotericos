const mainImage = document.querySelector('#gallery-main-image');
const imageLabel = document.querySelector('#gallery-label');
const thumbnails = [...document.querySelectorAll('.gallery-thumb')];

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.dataset.image;
    mainImage.alt = thumbnail.dataset.alt;
    imageLabel.textContent = thumbnail.dataset.label;

    thumbnails.forEach((item) => {
      item.setAttribute('aria-pressed', String(item === thumbnail));
    });
  });
});
