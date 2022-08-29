import React from 'react';
import styles from './headline.module.css';
import videoBg from '../../assets/stars-headline-bg.mp4';

const HeadLine = () => {
  return (
    <section className={styles['head-section']}>
    <video className={styles['head__video']} autoPlay loop muted>
        <source src={videoBg} type="video/mp4"/>
    </video>
    <div>HeadLine</div>
    
    </section>
  )
}

export default HeadLine;