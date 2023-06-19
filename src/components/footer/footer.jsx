import React from 'react';
import logo from '../../assests/logo.png';
import styles from './Styles/footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Link } from '@mui/material';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detailsslot}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt='Shopperzz' />
            <p className>Creative Web 🌏 -by rishabh</p>
          </div>
          <div className={styles.disclaimercontainer}>
            <p>
              Shopperzz, a fashion-forward online destination, brings you the
              latest trends and styles right at your fingertips. Created by
              Creative Web by Rishabh, we strive to provide a seamless shopping
              experience, where style meets convenience. With our curated
              collection of high-quality clothing and accessories, we aim to
              inspire your personal style and elevate your fashion game.
              Discover a world of endless possibilities. Start your fashion
              journey with us and let Shopperzz be your ultimate style companion
            </p>
          </div>
          <div className={styles.socialcontainer}>
            <div className={styles['social-icon']}>
              <Link href=''>
                <LinkedInIcon style={{ width: '100%', height: '100%' }} />
              </Link>
            </div>
            <div className={styles['social-icon']}>
              <Link href='https://github.com/rishabhkum-Dev-1799'>
                <GitHubIcon style={{ width: '100%', height: '100%' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footernavigationslot}>
        <p className={styles['footer-title']}>Useful Links</p>
        <ul className={styles[`footer-list`]}>
          <li className={styles[`footer-listitem`]}>Home</li>
          <li className={styles[`footer-listitem`]}>Cart</li>
          <li className={styles[`footer-listitem`]}>Man Fashion</li>
          <li className={styles[`footer-listitem`]}>Woman Fashion</li>
          <li className={styles[`footer-listitem`]}>Accessories</li>
          <li className={styles[`footer-listitem`]}>About</li>
          <li className={styles[`footer-listitem`]}>Order tracking</li>
          <li className={styles[`footer-listitem`]}>Wishlist</li>
          <li className={styles[`footer-listitem`]}>Terms</li>
          <li className={styles[`footer-listitem`]}>Privacy Statement</li>
        </ul>
      </div>
      <div className={styles.contactslot}>
        <p className={styles['footer-title']}>Contact</p>
        <div className={styles.contactitem}>
          <LocationOnIcon style={{ marginRight: '10px' }} /> New Delhi , India
        </div>
        <div className={styles.contactitem}>
          <CallIcon style={{ marginRight: '10px' }} /> +1 234 56 78
        </div>
        <div className={styles.contactitem}>
          <img
            src='https://i.ibb.co/Qfvn4z6/payment.png'
            className={styles.paymentsvg}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
