const products = [
  { name: 'Kabellose Kopfhörer', category: 'Audio', price: 79.99, color: '#e8d8c3' },
  { name: 'Mechanische Tastatur', category: 'Zubehör', price: 119.0, color: '#cad8d0' },
  { name: 'Smartwatch Active', category: 'Wearables', price: 149.99, color: '#d9c8d8' },
  { name: 'USB-C Dockingstation', category: 'Zubehör', price: 89.5, color: '#d7d9c5' },
  { name: 'Bluetooth-Lautsprecher', category: 'Audio', price: 54.95, color: '#dfc9b7' },
  { name: 'Fitness-Tracker', category: 'Wearables', price: 64.99, color: '#c6d6df' },
  { name: '4K Monitor', category: 'Computer', price: 299.99, color: '#d2d5d8' },
  { name: 'Gaming-Maus', category: 'Zubehör', price: 49.99, color: '#e1cdd2' },
  { name: 'Noise-Cancelling Kopfhörer', category: 'Audio', price: 199.99, color: '#c8d9d2' },
  { name: 'Ergonomische Maus', category: 'Zubehör', price: 39.99, color: '#d5d1c8' },
  { name: 'Smart Home Hub', category: 'Smart Home', price: 89.0, color: '#e6dfcc' },
  { name: 'WLAN-Router', category: 'Netzwerk', price: 129.5, color: '#ccd9e2' },
  { name: 'Externe SSD 1TB', category: 'Speicher', price: 95.0, color: '#dac9cd' },
  { name: 'Tablet Pro', category: 'Computer', price: 450.0, color: '#d9d9d9' },
  { name: 'Powerbank 20000mAh', category: 'Zubehör', price: 34.99, color: '#c3d2cd' },
  { name: 'Webcam 1080p', category: 'Zubehör', price: 59.99, color: '#e1d3c1' },
  { name: 'Smart-Lampe', category: 'Smart Home', price: 19.99, color: '#eee6d3' },
  { name: 'In-Ear Kopfhörer', category: 'Audio', price: 45.0, color: '#dcd1e0' },
  { name: 'Laptop-Ständer', category: 'Zubehör', price: 24.99, color: '#c4cbd3' },
  { name: 'Gaming-Headset', category: 'Audio', price: 89.9, color: '#e0c8c8' },
  { name: 'Mikrofon für Podcasts', category: 'Audio', price: 110.0, color: '#d2d8ce' },
  { name: 'WLAN-Repeater', category: 'Netzwerk', price: 29.99, color: '#dce1eb' },
  { name: 'USB-Stick 128GB', category: 'Speicher', price: 15.99, color: '#c9d5cc' },
  { name: 'VR-Brille', category: 'Wearables', price: 349.99, color: '#e5d8e6' },
  { name: 'Smart-Steckdose', category: 'Smart Home', price: 22.5, color: '#d9dfc2' },
  { name: 'eBook-Reader', category: 'Computer', price: 119.0, color: '#d0cdc6' },
  { name: 'Ringlicht mit Stativ', category: 'Zubehör', price: 49.0, color: '#eee2d1' },
  { name: 'Netzwerkkabel 10m', category: 'Netzwerk', price: 9.99, color: '#cbd2d0' },
  { name: 'Soundbar', category: 'Audio', price: 159.0, color: '#d3c4d5' },
  { name: 'Mauspad XXL', category: 'Zubehör', price: 19.99, color: '#c8ced1' }
];

const productUtils = window.ProductUtils;
const searchInput = document.querySelector('#search');
const categorySelect = document.querySelector('#category');
const sortSelect = document.querySelector('#sort');
const searchButton = document.querySelector('#search-button');
const showAllButton = document.querySelector('#show-all-button');
const productList = document.querySelector('#product-list');
const resultCount = document.querySelector('#result-count');
const searchFeedback = document.querySelector('#search-feedback');

function populateCategories() {
  const categories = [...new Set(products.map((product) => product.category))].sort();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });
}

function renderProducts() {
  // Bei jeder Eingabe wird nur die Anzeige aktualisiert; die Seite lädt nicht neu.
  const filteredProducts = productUtils.filterProducts(
    products,
    searchInput.value,
    categorySelect.value,
  );
  const visibleProducts = productUtils.sortProducts(filteredProducts, sortSelect.value);

  productList.replaceChildren();
  resultCount.textContent = `${visibleProducts.length} von ${products.length} Produkten`;
  searchFeedback.textContent = searchInput.value.trim()
    ? `Suche nach „${searchInput.value.trim()}“: ${visibleProducts.length} Treffer`
    : 'Alle Produkte werden angezeigt.';

  if (visibleProducts.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-state';
    emptyMessage.textContent = 'Keine passenden Produkte gefunden.';
    productList.append(emptyMessage);
    return;
  }

  visibleProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-art" style="--product-color: ${product.color}">
        <span>${product.category}</span>
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.price.toFixed(2).replace('.', ',')} EUR</p>
      </div>
    `;
    productList.append(card);
  });
}

populateCategories();
renderProducts();
searchButton.addEventListener('click', renderProducts);
showAllButton.addEventListener('click', () => {
  searchInput.value = '';
  categorySelect.value = 'all';
  renderProducts();
});
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    renderProducts();
  }
});
categorySelect.addEventListener('change', renderProducts);
sortSelect.addEventListener('change', renderProducts);
