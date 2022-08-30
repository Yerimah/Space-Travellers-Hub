import React from 'react';
import styles from './headline.module.css';
import videoBg from '../../assets/stars-headline-bg.mp4';

const HeadLine = () => (
  <section className={styles['head-section']}>
    <div className={styles['head-video']}>
      <video className={styles['head-video__content']} autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>

    <div className={styles['headline-text']}>
      <h1>Discover the beauty of space</h1>
    </div>
  </section>
);

export default HeadLine;
