import React from 'react';
import styles from './Styles/CategoriesItems.module.css';

const CategoriesItems = ({ item }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={item.img} alt='Cateogry image' />
        <div className={styles.categoryinfo}>
          <h1>{item.title}</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default CategoriesItems;
