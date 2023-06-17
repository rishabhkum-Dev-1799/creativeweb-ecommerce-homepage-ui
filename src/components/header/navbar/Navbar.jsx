import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Styles/Navbar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles[`nav-child`]}>
          <p className={styles.language}>EN</p>
          <div className={styles.searchContainer}>
            <input />
            <SearchIcon />
          </div>
        </div>
        <div
          className={`${styles[`nav-child`]} ${styles[`nav-child-center`]} `}
        >
          <h1 className={styles.logo}>
            CW🌏
            <span className={styles.logoslogan}>-by rishabh</span>
          </h1>
        </div>
        <div className={`${styles[`nav-child`]} ${styles[`nav-child-right`]}`}>
          <div className={styles.headerlinks}>
            <p>Register</p>
            <p>Sign-In</p>
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
