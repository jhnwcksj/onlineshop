import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.brand}, Цена: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
