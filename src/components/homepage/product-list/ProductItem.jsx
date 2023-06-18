import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import styles from './Styles/ProductItem.module.css';
const ProductItem = ({ product }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={product.img} alt='trendingProduct' />
        <div className={styles.info}>
          <div className={styles.icon}>
            <ShoppingCartOutlined />
          </div>
          <div className={styles.icon}>
            <SearchOutlined />
          </div>
          <div className={styles.icon}>
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
