import React from "react";
import styles from "../../styles/Global";

const Technologies = ({ title, description, mockupImg, reverse }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite}
  `}
    >
      <div
        className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}
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
            } text-center  `}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            } text-center`}
          >
            {description}
          </p>
        </div>

        <div className={`flex-1 ${styles.flexCenter}  sm:px-0`}>
          <img
            src={mockupImg}
            className={`
            ${reverse ? "fadeLeftMini" : "fadeRightMini"}, 
            ${styles.sectionImg} w-2/3 sm:w-10/12`}
            alt="mockup"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
