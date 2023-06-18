import React from 'react';
import Navbar from '../components/header/navbar/Navbar';
import Categories from '../components/homepage/categories/Categories';
import NewsLetter from '../components/homepage/newsletter/NewsLetter';
import Products from '../components/homepage/product-list/Products';
import RotatingBanner from '../components/homepage/rotating-banner/RotatingBanner';

const Home = () => {
  return (
    <div>
      <Navbar />
      <RotatingBanner />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
