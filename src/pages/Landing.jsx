import React from 'react'
import styles from '../styles/Global'; 

const Landing = ({title,
    description,
    mockupImg,
    reverse,}) => {
  return (
        <div
    className={`min-h-screen ${styles.section} ${styles.bgWhite}
  `}
  >
    <div
      className={`flex items-center ${
        reverse ? styles.boxReverseClass : styles.boxClass
      } w-11/12 sm:w-full minmd:w-3/4`}
    >
      <div
        className={`${styles.descDiv}
    ${reverse ? "fadeRightMini" : "fadeLeftMini"}        
    ${reverse ? styles.textRight : styles.textLeft}        
     `}
      >
        <h1
          className={`${styles.h1Text} ${
            reverse ? styles.blackText : styles.whiteText
          }`}
        >
          {title}
        </h1>
        <p
          className={`${styles.descriptionText} ${
            reverse ? styles.blackText : styles.whiteText
          }`}
        >
          {description}
        </p>
         
      </div>

      <div className={`flex-1 ${styles.flexCenter} p-40 sm:px-0`}>
        <img
          src={mockupImg}
          className={`
            ${reverse ? "fadeLeftMini" : "fadeRightMini"}, 
            ${styles.sectionImg}`}
          alt="mockup"
        ></img>
      </div>
    </div>
  </div>
  )
}

export default Landing