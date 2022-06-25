import React from 'react'
import styles from '../../styles/Global';
import assets from '../../assets'
import Button from '../../components/button/Button'

const Gallery = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
        <div className={`${styles.subSection} flex-col text-center`}>
          <div>
            <h1 className={`${styles.blackText} ${styles.h1Text}`}>See all the wallet</h1>
            <p className={`${styles.blackText} ${styles.pText}`}>Get a new free account and enjoy a lot here</p>
          </div>
         <Button />
          <div className={`${styles.flexCenter}`} >
            <img src={assets.scene} className={styles.fullImg} alt="gallery" ></img>
          </div>
        </div>
    </div>
  )
}

export default Gallery