import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styles from './Styles/NewsLetter.module.css';

const NewsLetter = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles['newsletter-title']}>NewsLetter</h1>
        <p className={styles['newsletter-label']}>
          Get timely updates of your favorite products.
        </p>
        <div className={styles['newsletter-info']}>
          <input
            placeholder='Enter your Email'
            className={styles['newsletter-input']}
          />
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
