(() => {
  const products = [
    {
      name: 'Kabellose Kopfhörer',
      category: 'Audio',
      price: 79.99,
      color: '#e8d8c3',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Mechanische Tastatur',
      category: 'Zubehör',
      price: 119,
      color: '#cad8d0',
      imageUrl:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Smartwatch Active',
      category: 'Wearables',
      price: 149.99,
      color: '#d9c8d8',
      imageUrl:
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'USB-C Dockingstation',
      category: 'Zubehör',
      price: 89.5,
      color: '#d7d9c5',
      imageUrl:
        'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Bluetooth-Lautsprecher',
      category: 'Audio',
      price: 54.95,
      color: '#dfc9b7',
      imageUrl:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Fitness-Tracker',
      category: 'Wearables',
      price: 64.99,
      color: '#c6d6df',
      imageUrl:
        'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: '4K Monitor',
      category: 'Computer',
      price: 299.99,
      color: '#d2d5d8',
      imageUrl:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Gaming-Maus',
      category: 'Zubehör',
      price: 49.99,
      color: '#e1cdd2',
      imageUrl:
        'https://images.unsplash.com/photo-1632160871990-be30194885aa?q=80&w=765&auto=format&fit=crop',
    },
    {
      name: 'Noise-Cancelling Kopfhörer',
      category: 'Audio',
      price: 199.99,
      color: '#c8d9d2',
      imageUrl:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Ergonomische Maus',
      category: 'Zubehör',
      price: 39.99,
      color: '#d5d1c8',
      imageUrl:
        'https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?q=80&w=1229&auto=format&fit=crop',
    },
    {
      name: 'Smart Home Hub',
      category: 'Smart Home',
      price: 89,
      color: '#e6dfcc',
      imageUrl:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'WLAN-Router',
      category: 'Netzwerk',
      price: 129.5,
      color: '#ccd9e2',
      imageUrl:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Externe SSD 1TB',
      category: 'Speicher',
      price: 95,
      color: '#dac9cd',
      imageUrl:
        'https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?q=80&w=765&auto=format&fit=crop',
    },
    {
      name: 'Tablet Pro',
      category: 'Computer',
      price: 450,
      color: '#d9d9d9',
      imageUrl:
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Powerbank 20000mAh',
      category: 'Zubehör',
      price: 34.99,
      color: '#c3d2cd',
      imageUrl:
        'https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?q=80&w=1170&auto=format&fit=crop',
    },
    {
      name: 'Webcam 1080p',
      category: 'Zubehör',
      price: 59.99,
      color: '#e1d3c1',
      imageUrl:
        'https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=1170&auto=format&fit=crop',
    },
    {
      name: 'Smart-Lampe',
      category: 'Smart Home',
      price: 19.99,
      color: '#eee6d3',
      imageUrl:
        'https://images.unsplash.com/photo-1707733260992-73ff6dbed163?q=80&w=1170&auto=format&fit=crop',
    },
    {
      name: 'In-Ear Kopfhörer',
      category: 'Audio',
      price: 45,
      color: '#dcd1e0',
      imageUrl:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Laptop-Ständer',
      category: 'Zubehör',
      price: 24.99,
      color: '#c4cbd3',
      imageUrl:
        'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Gaming-Headset',
      category: 'Audio',
      price: 89.9,
      color: '#e0c8c8',
      imageUrl:
        'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Mikrofon für Podcasts',
      category: 'Audio',
      price: 110,
      color: '#d2d8ce',
      imageUrl:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'WLAN-Repeater',
      category: 'Netzwerk',
      price: 29.99,
      color: '#dce1eb',
      imageUrl:
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=1170&auto=format&fit=crop',
    },
    {
      name: 'USB-Stick 128GB',
      category: 'Speicher',
      price: 15.99,
      color: '#c9d5cc',
      imageUrl:
        'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'VR-Brille',
      category: 'Wearables',
      price: 349.99,
      color: '#e5d8e6',
      imageUrl:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Smart-Steckdose',
      category: 'Smart Home',
      price: 22.5,
      color: '#d9dfc2',
      imageUrl:
        'https://images.unsplash.com/photo-1726748480957-feccda9ba485?q=80&w=1332&auto=format&fit=crop',
    },
    {
      name: 'eBook-Reader',
      category: 'Computer',
      price: 119,
      color: '#d0cdc6',
      imageUrl:
        'https://images.unsplash.com/photo-1611328857214-a5aae689f21a?q=80&w=1169&auto=format&fit=crop',
    },
    {
      name: 'Ringlicht mit Stativ',
      category: 'Zubehör',
      price: 49,
      color: '#eee2d1',
      imageUrl:
        'https://images.unsplash.com/photo-1501699169021-3759ee435d66?q=80&w=719&auto=format&fit=crop',
    },
    {
      name: 'Netzwerkkabel 10m',
      category: 'Netzwerk',
      price: 9.99,
      color: '#cbd2d0',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1675024368160-5bacaa752300?q=80&w=687&auto=format&fit=crop',
    },
    {
      name: 'Soundbar',
      category: 'Audio',
      price: 159,
      color: '#d3c4d5',
      imageUrl:
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      name: 'Mauspad XXL',
      category: 'Zubehör',
      price: 19.99,
      color: '#c8ced1',
      imageUrl:
        'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=1170&auto=format&fit=crop',
    },
  ];

  window.ProductData = { products };
})();
