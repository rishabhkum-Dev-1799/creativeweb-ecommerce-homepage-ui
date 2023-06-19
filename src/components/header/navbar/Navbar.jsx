import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Styles/Navbar.module.css';
import logo from '../../../assests/logo.png';
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
          <img src={logo} className={styles.logo} />
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
