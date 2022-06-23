import React from "react";
import assets from "../../assets";
import styles from "../../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={`${styles.featureCard}`}>
    <img src={iconUrl} alt="img" className={`${styles.featureImg}`}></img>
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            You can purchase our network tokens ESAT withlightning network
            payment. Make sure the address you want to receive tokens is correct
            before pressing the button. Minimum amount is 100.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.first} iconText="React js" />
          <FeatureCard iconUrl={assets.second} iconText="solidity" />
        </div>
      </div>
    </div>
  );
};

export default Features;
