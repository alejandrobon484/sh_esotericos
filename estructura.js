'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#site-search');
const filterButtons = [...document.querySelectorAll('[data-filter]:not([hidden])')];
const categoryLinks = [...document.querySelectorAll('[data-category-link]:not([hidden])')];
const collectionLinks = [...document.querySelectorAll('[data-collection-link]')];
const serviceFilterButtons = [...document.querySelectorAll('[data-service-filter]')];
const serviceLinks = [...document.querySelectorAll('[data-service-link]')];
const productGrid = document.querySelector('#product-grid');
const serviceGrid = document.querySelector('#service-product-grid');
let products = [...productGrid.querySelectorAll('.product-card')];
const services = [...serviceGrid.querySelectorAll('.product-card')];
const catalogStatus = document.querySelector('#catalog-status');
const serviceStatus = document.querySelector('#service-status');
const emptyState = document.querySelector('#empty-state');
const serviceEmptyState = document.querySelector('#service-empty-state');
const sortSelect = document.querySelector('#catalog-sort');
const subfilterBlock = document.querySelector('#subfilter-block');
const subfilterCategory = document.querySelector('#subfilter-category');
const subfilterRow = document.querySelector('#subfilter-row');
const loadMoreButton = document.querySelector('#load-more');
const loadMoreRow = loadMoreButton.parentElement;

const categorySubcategories = {
  jabones: ['Jabones naturales', 'Jabones ritualizados'],
  tinturas: ['Tinturas naturales', 'Tinturas ritualizadas']
};

const PAGE_SIZE = 12;
let visibleLimit = PAGE_SIZE;
let activeCategory = 'all';
let activeCollection = '';
let activeService = 'all';
let searchTerm = '';

products.forEach((product, index) => { product.dataset.order = String(index); });

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mainNav.classList.toggle('open', !isOpen);
});

mainNav.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mainNav.classList.remove('open');
});

function normalizeText(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function slugify(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function searchableText(card) {
  return normalizeText(`${card.dataset.name} ${card.dataset.collection} ${card.textContent}`);
}

function matchesSearch(card) {
  return !searchTerm || searchableText(card).includes(normalizeText(searchTerm));
}

function collectionNames() {
  return [...new Set([
    ...Object.values(categorySubcategories).flat(),
    ...products.map((product) => product.dataset.collection).filter(Boolean),
    ...services.map((service) => service.dataset.collection).filter(Boolean)
  ])];
}

function resolveCollection(slug) {
  return collectionNames().find((collection) => slugify(collection) === slug) || '';
}

function updateUrl() {
  const url = new URL(window.location.href);
  activeCategory === 'all' ? url.searchParams.delete('categoria') : url.searchParams.set('categoria', activeCategory);
  activeCollection ? url.searchParams.set('coleccion', slugify(activeCollection)) : url.searchParams.delete('coleccion');
  searchTerm ? url.searchParams.set('buscar', searchTerm) : url.searchParams.delete('buscar');
  activeService === 'all' ? url.searchParams.delete('servicio') : url.searchParams.set('servicio', activeService);
  sortSelect.value === 'featured' ? url.searchParams.delete('orden') : url.searchParams.set('orden', sortSelect.value);
  if (url.href === window.location.href) return;
  try { window.history.pushState({}, '', url); } catch (error) { /* La vista local puede limitar el historial. */ }
}

function updateCategoryCounts() {
  filterButtons.forEach((button) => {
    const count = button.dataset.filter === 'all'
      ? products.length
      : products.filter((product) => product.dataset.category === button.dataset.filter).length;
    button.textContent = `${button.dataset.label} · ${count}`;
  });
  serviceFilterButtons.forEach((button) => {
    const count = button.dataset.serviceFilter === 'all'
      ? services.length
      : services.filter((service) => service.dataset.category === button.dataset.serviceFilter).length;
    button.textContent = `${button.dataset.label} · ${count}`;
  });
}

function renderSubfilters() {
  subfilterRow.replaceChildren();
  if (activeCategory === 'all') {
    subfilterBlock.hidden = true;
    return;
  }

  const categoryProducts = products.filter((product) => product.dataset.category === activeCategory);
  const counts = new Map();
  (categorySubcategories[activeCategory] || []).forEach((subcategory) => counts.set(subcategory, 0));
  categoryProducts.forEach((product) => counts.set(product.dataset.collection, (counts.get(product.dataset.collection) || 0) + 1));
  if (activeCollection && !counts.has(activeCollection)) activeCollection = '';
  if (counts.size <= 1) {
    activeCollection = '';
    subfilterBlock.hidden = true;
    return;
  }

  const categoryLabel = filterButtons.find((button) => button.dataset.filter === activeCategory)?.dataset.label || activeCategory;
  subfilterCategory.textContent = categoryLabel;
  const options = [['', `Todo · ${categoryProducts.length}`], ...[...counts].map(([name, count]) => [name, `${name} · ${count}`])];
  options.forEach(([collection, label]) => {
    const button = document.createElement('button');
    button.className = 'filter';
    button.type = 'button';
    button.textContent = label;
    button.dataset.collectionFilter = collection;
    const isActive = activeCollection === collection;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
    button.addEventListener('click', () => {
      activeCollection = collection;
      visibleLimit = PAGE_SIZE;
      renderSubfilters();
      applyAllFilters();
      updateUrl();
    });
    subfilterRow.appendChild(button);
  });
  subfilterBlock.hidden = false;
}

function applyProductFilters() {
  const matches = products.filter((product) => {
    const categoryMatch = activeCategory === 'all' || product.dataset.category === activeCategory;
    const collectionMatch = !activeCollection || product.dataset.collection === activeCollection;
    return categoryMatch && collectionMatch && matchesSearch(product);
  });

  const visible = new Set(matches.slice(0, visibleLimit));
  products.forEach((product) => { product.hidden = !visible.has(product); });

  const shown = Math.min(matches.length, visibleLimit);
  const categoryLabel = activeCategory === 'all'
    ? 'todas las categorías'
    : filterButtons.find((button) => button.dataset.filter === activeCategory)?.dataset.label || activeCategory;
  const collectionLabel = activeCollection ? ` · ${activeCollection}` : '';
  const searchLabel = searchTerm ? ` para “${searchTerm}”` : '';
  catalogStatus.textContent = `Mostrando ${shown} de ${matches.length} ${matches.length === 1 ? 'producto' : 'productos'} en ${categoryLabel}${collectionLabel}${searchLabel}`;
  emptyState.hidden = matches.length !== 0;
  loadMoreRow.hidden = shown >= matches.length;
  return matches.length;
}

function applyServiceFilters() {
  const matches = services.filter((service) => {
    const categoryMatch = activeService === 'all' || service.dataset.category === activeService;
    const collectionMatch = activeService === 'all' || !activeCollection || service.dataset.collection === activeCollection;
    return categoryMatch && collectionMatch && matchesSearch(service);
  });
  const visible = new Set(matches);
  services.forEach((service) => { service.hidden = !visible.has(service); });
  const label = activeService === 'all'
    ? 'todas las consultas'
    : serviceFilterButtons.find((button) => button.dataset.serviceFilter === activeService)?.dataset.label || activeService;
  const collectionLabel = activeService !== 'all' && activeCollection ? ` · ${activeCollection}` : '';
  const searchLabel = searchTerm ? ` para “${searchTerm}”` : '';
  serviceStatus.textContent = `${matches.length} ${matches.length === 1 ? 'resultado' : 'resultados'} en ${label}${collectionLabel}${searchLabel}`;
  serviceEmptyState.hidden = matches.length !== 0;
  return matches.length;
}

function applyAllFilters() {
  return { productMatches: applyProductFilters(), serviceMatches: applyServiceFilters() };
}

function selectCategory(category) {
  activeCategory = filterButtons.some((button) => button.dataset.filter === category) ? category : 'all';
  activeCollection = '';
  visibleLimit = PAGE_SIZE;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeCategory;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderSubfilters();
  applyAllFilters();
  updateUrl();
}

function selectGlobalCollection(collection) {
  activeCategory = 'all';
  activeCollection = collection;
  visibleLimit = PAGE_SIZE;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === 'all';
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderSubfilters();
  applyAllFilters();
  updateUrl();
}

function selectService(category) {
  activeService = serviceFilterButtons.some((button) => button.dataset.serviceFilter === category) ? category : 'all';
  activeCollection = '';
  serviceFilterButtons.forEach((button) => {
    const isActive = button.dataset.serviceFilter === activeService;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  applyServiceFilters();
  updateUrl();
}

filterButtons.forEach((button) => button.addEventListener('click', () => selectCategory(button.dataset.filter)));
// Los enlaces apuntan a páginas estáticas indexables; en la portada filtran sin salir de ella.
function filterInPlace(event, select) {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  select();
  document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth' });
}

categoryLinks.forEach((link) => link.addEventListener('click', (event) => filterInPlace(event, () => selectCategory(link.dataset.categoryLink))));
collectionLinks.forEach((link) => link.addEventListener('click', (event) => filterInPlace(event, () => selectGlobalCollection(link.dataset.collectionLink))));
serviceFilterButtons.forEach((button) => button.addEventListener('click', () => selectService(button.dataset.serviceFilter)));
serviceLinks.forEach((link) => link.addEventListener('click', () => selectService(link.dataset.serviceLink)));

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchTerm = searchInput.value.trim();
  visibleLimit = PAGE_SIZE;
  const result = applyAllFilters();
  updateUrl();
  document.querySelector(result.productMatches ? '#catalogo' : '#service-catalog').scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') return;
  searchTerm = '';
  visibleLimit = PAGE_SIZE;
  applyAllFilters();
  updateUrl();
});

function sortProductCards() {
  products.sort((a, b) => sortSelect.value === 'name'
    ? a.dataset.name.localeCompare(b.dataset.name, 'es')
    : Number(a.dataset.order) - Number(b.dataset.order));
  products.forEach((product) => productGrid.appendChild(product));
}

sortSelect.addEventListener('change', () => {
  sortProductCards();
  visibleLimit = PAGE_SIZE;
  applyProductFilters();
  updateUrl();
});

loadMoreButton.addEventListener('click', () => {
  visibleLimit += PAGE_SIZE;
  applyProductFilters();
});

function loadStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get('categoria') || 'all';
  activeCategory = filterButtons.some((button) => button.dataset.filter === requestedCategory) ? requestedCategory : 'all';
  activeCollection = resolveCollection(params.get('coleccion') || '');
  const requestedService = params.get('servicio') || 'all';
  activeService = serviceFilterButtons.some((button) => button.dataset.serviceFilter === requestedService) ? requestedService : 'all';
  searchTerm = params.get('buscar') || '';
  searchInput.value = searchTerm;
  sortSelect.value = params.get('orden') === 'name' ? 'name' : 'featured';

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeCategory;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  serviceFilterButtons.forEach((button) => {
    const isActive = button.dataset.serviceFilter === activeService;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

window.addEventListener('popstate', () => {
  visibleLimit = PAGE_SIZE;
  loadStateFromUrl();
  sortProductCards();
  renderSubfilters();
  applyAllFilters();
});

updateCategoryCounts();
loadStateFromUrl();
sortProductCards();
renderSubfilters();
applyAllFilters();
