// Die Filterlogik bleibt unabhängig vom DOM und kann deshalb direkt getestet werden.
function filterProducts(products, searchTerm, category) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return products.filter((product) => {
    const matchesSearch =
      normalizedSearch === '' || product.name.toLowerCase().includes(normalizedSearch);
    const matchesCategory = category === 'all' || product.category === category;

    return matchesSearch && matchesCategory;
  });
}

function sortProducts(products, sortBy) {
  return [...products].sort((firstProduct, secondProduct) => {
    if (sortBy === 'price-asc') {
      return firstProduct.price - secondProduct.price;
    }

    if (sortBy === 'price-desc') {
      return secondProduct.price - firstProduct.price;
    }

    return firstProduct.name.localeCompare(secondProduct.name, 'de');
  });
}

if (typeof module !== 'undefined') {
  module.exports = { filterProducts, sortProducts };
}

if (typeof window !== 'undefined') {
  window.ProductUtils = { filterProducts, sortProducts };
}
