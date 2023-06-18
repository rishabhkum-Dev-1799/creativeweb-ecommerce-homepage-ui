import React from 'react';
import CategoriesItems from './CategoriesItems';
import { categories } from '../../../data/cms';
import styles from './Styles/Categories.module.css';

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item, i) => {
        return <CategoriesItems item={item} key={i} />;
      })}
    </div>
  );
};

export default Categories;
