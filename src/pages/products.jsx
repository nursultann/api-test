import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './products';
import { caterories } from './categories';

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Категории</h1>
      <ul>
        {caterories.map((i) => (
          <li key={i.id} className="product-item" style={{ backgroundColor: i.color }}>
            <img src={i.img} alt={i.name} width={100} />
            <h2>{i.name}</h2>
          </li>
        ))}
      </ul>
      <h1>Список продуктов</h1>
      {/* <ul>
        {products.map((i) => (
          <li key={i.id} className="product-item">
            <h2>{i.name}</h2>
            <p>{i.description}</p>
            <p><strong>Цена:</strong> {i.price} руб.</p>
            <p><strong>Категория:</strong> {i.category}</p>
            <p><strong>Бренд:</strong> {i.brand}</p>
            <p><strong>На складе:</strong> {i.stock} шт.</p>
            <Link to={`/details/${i.id}`}>Подробнее</Link>
          </li>
        ))}
      </ul> */}
      <div className="row">
        {products.map((i) => 
            (
                <div className="col-3">
                    <div className="product-item">
                        <h2>{i.name}</h2>
                        <p>{i.description}</p>
                        <p><strong>Цена:</strong> {i.price} руб.</p>
                        <p><strong>Категория:</strong> {i.category}</p>
                        <p><strong>Бренд:</strong> {i.brand}</p>
                        <p><strong>На складе:</strong> {i.stock} шт.</p>
                        <Link to={`/details/${i.id}`}>Подробнее</Link>
                    </div>
                </div>
            )
        )

        }
      </div>
    </div>
  );
};

export default ProductList;