const productData = window.ProductData;
const productUtils = window.ProductUtils;

const SEARCH_DELAY_MS = 300;
const FALLBACK_IMAGE_URL =
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&h=300&q=80';
const priceFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const elements = {
  controls: document.querySelector('.controls'),
  searchInput: document.querySelector('#search'),
  categorySelect: document.querySelector('#category'),
  sortSelect: document.querySelector('#sort'),
  showAllButton: document.querySelector('#show-all-button'),
  productList: document.querySelector('#product-list'),
  resultCount: document.querySelector('#result-count'),
  searchFeedback: document.querySelector('#search-feedback'),
  themeToggle: document.querySelector('#theme-toggle'),
};

const state = {
  searchTerm: '',
  category: 'all',
  sortBy: 'name-asc',
};

function populateCategories() {
  const categories = [
    ...new Set(productData.products.map((product) => product.category)),
  ].sort();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    elements.categorySelect.append(option);
  });
}

function updateStateFromControls() {
  state.searchTerm = elements.searchInput.value;
  state.category = elements.categorySelect.value;
  state.sortBy = elements.sortSelect.value;
}

function createProductCard(product) {
  const card = document.createElement('article');
  const productArt = document.createElement('div');
  const image = document.createElement('img');
  const category = document.createElement('span');
  const productInfo = document.createElement('div');
  const name = document.createElement('h2');
  const price = document.createElement('p');

  card.className = 'product-card';
  productArt.className = 'product-art';
  productArt.style.setProperty('--product-color', product.color);

  image.className = 'product-image';
  image.src = product.imageUrl || FALLBACK_IMAGE_URL;
  image.alt = product.name;
  image.loading = 'lazy';

  category.textContent = product.category;
  productInfo.className = 'product-info';
  name.textContent = product.name;
  price.textContent = priceFormatter.format(product.price);

  productArt.append(image, category);
  productInfo.append(name, price);
  card.append(productArt, productInfo);

  return card;
}

function renderProducts() {
  const filteredProducts = productUtils.filterProducts(
    productData.products,
    state.searchTerm,
    state.category,
  );
  const visibleProducts = productUtils.sortProducts(filteredProducts, state.sortBy);

  elements.productList.replaceChildren();
  elements.resultCount.textContent = `${visibleProducts.length} von ${productData.products.length} Produkten`;
  elements.searchFeedback.textContent = state.searchTerm.trim()
    ? `Suche nach „${state.searchTerm.trim()}“: ${visibleProducts.length} Treffer`
    : 'Alle Produkte werden angezeigt.';

  if (visibleProducts.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-state';
    emptyMessage.textContent = 'Keine passenden Produkte gefunden.';
    elements.productList.append(emptyMessage);
    return;
  }

  elements.productList.append(...visibleProducts.map(createProductCard));
}

function updateAndRender() {
  updateStateFromControls();
  renderProducts();
}

function resetFilters() {
  elements.searchInput.value = '';
  elements.categorySelect.value = 'all';
  elements.sortSelect.value = 'name-asc';
  updateAndRender();
}

function debounce(callback, delay = SEARCH_DELAY_MS) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

function setTheme(theme) {
  const isDarkMode = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDarkMode);
  elements.themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
  elements.themeToggle.setAttribute('aria-pressed', String(isDarkMode));
  localStorage.setItem('theme', theme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
}

function initializeEvents() {
  elements.controls.addEventListener('submit', (event) => {
    event.preventDefault();
    updateAndRender();
  });
  elements.showAllButton.addEventListener('click', resetFilters);
  elements.searchInput.addEventListener('input', debounce(updateAndRender));
  elements.categorySelect.addEventListener('change', updateAndRender);
  elements.sortSelect.addEventListener('change', updateAndRender);
  elements.themeToggle.addEventListener('click', () => {
    setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
  });
}

function initializeApp() {
  populateCategories();
  initializeTheme();
  initializeEvents();
  updateAndRender();
}

initializeApp();
