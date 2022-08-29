import React from 'react';
import styles from './headline.module.css';
import videoBg from '../../assets/stars-headline-bg.mp4';

const HeadLine = () => {
  return (
    <>
    <div>HeadLine</div>
    <video src ={videoBg} autoPlay loop muted/>
    </>
  )
}

export default HeadLine;