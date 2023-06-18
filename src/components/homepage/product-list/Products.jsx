import React from 'react';
import { popularProducts } from '../../../data/cms';
import ProductItem from './ProductItem';
import styles from './Styles/Products.module.css';

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Featured Products</h1>
        </div>
        <div className={styles['product-wrapper']}>
          {popularProducts.map((product, i) => {
            return <ProductItem product={product} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
