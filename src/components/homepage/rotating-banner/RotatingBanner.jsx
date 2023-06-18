import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../../../data/cms';
import styles from './Styles/RotatingBanner.module.css';

const RotatingBanner = () => {
  const [current, setCurrent] = useState(0);
  const itemsLength = sliderItems.length;

  //functionHandler
  const prevClick = () => {
    setCurrent((prevValue) =>
      prevValue === 0 ? itemsLength - 1 : prevValue - 1
    );
  };

  const nextClick = () => {
    setCurrent((prevValue) =>
      prevValue === itemsLength - 1 ? 0 : prevValue + 1
    );
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.arrow} ${styles.leftarrow}`}
        onClick={prevClick}
      >
        <ArrowLeftOutlined />
      </div>
      <div className={styles.wrapper}>
        {sliderItems.map((slide, index) => {
          return (
            <React.Fragment key={index}>
              {index === current && (
                <>
                  <div
                    style={{ backgroundColor: `${slide.bg}` }}
                    className={styles.slide}
                  >
                    <div className={styles.imgcontainer}>
                      <img src={slide.img} alt={slide.title} />
                    </div>
                    <div className={styles.infocontainer}>
                      <h1>{slide.title}</h1>
                      <p>{slide.desc}</p>
                      <button>Shop Now</button>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div
        className={`${styles.arrow} ${styles.rightarrow}`}
        onClick={nextClick}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default RotatingBanner;
