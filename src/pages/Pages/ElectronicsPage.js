import React from 'react';
import ProductList from './ProductList';
import FilterSidebar from './FilterSidebar';
import './ElectronicsPage.css';

const ElectronicsPage = () => {
  const products = [
    { id: 1, name: 'Смартфон', price: 500, brand: 'Samsung' },
    { id: 2, name: 'Ноутбук', price: 1200, brand: 'HP' },
    { id: 3, name: 'Планшет', price: 300, brand: 'Apple' },
    { id: 4, name: 'Умные часы', price: 150, brand: 'Xiaomi' },
    { id: 5, name: 'Наушники', price: 100, brand: 'Sony' },
    // Добавьте другие продукты
  ];

  const filters = [
    { id: 1, name: 'Цена' },
    { id: 2, name: 'Бренд' },
    // Добавьте другие фильтры
  ];

  return (
    <div className="electronics-page">
      <h1>Онлайн магазин электроники</h1>

      <div className="page-content">
        <FilterSidebar filters={filters} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ElectronicsPage;
