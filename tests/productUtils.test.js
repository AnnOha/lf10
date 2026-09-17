const { filterProducts, sortProducts } = require('../src/productUtils');

const products = [
  { name: 'Kopfhörer', category: 'Audio', price: 80 },
  { name: 'Tastatur', category: 'Zubehör', price: 120 },
  { name: 'Lautsprecher', category: 'Audio', price: 55 },
];

describe('filterProducts', () => {
  test('findet Produkte über einen Teil des Namens', () => {
    expect(filterProducts(products, 'hör', 'all')).toEqual([products[0]]);
  });

  test('filtert zusätzlich nach Kategorie', () => {
    expect(filterProducts(products, '', 'Audio')).toEqual([products[0], products[2]]);
  });

  test('liefert bei unbekannter Suche eine leere Liste', () => {
    expect(filterProducts(products, 'monitor', 'all')).toEqual([]);
  });
});

describe('sortProducts', () => {
  test('sortiert standardmäßig alphabetisch', () => {
    expect(sortProducts(products, 'name-asc').map((product) => product.name)).toEqual([
      'Kopfhörer',
      'Lautsprecher',
      'Tastatur',
    ]);
  });

  test('sortiert Preise aufsteigend und absteigend', () => {
    expect(sortProducts(products, 'price-asc')[0].price).toBe(55);
    expect(sortProducts(products, 'price-desc')[0].price).toBe(120);
  });
});
