import React from 'react'
import styles from '../../styles/Global'

const Button = () => {

    const Link = "https://wallet.lappsnet.io/wallet";

  return (
    <div className={styles.btnBlack}
    onClick={() => window.open(Link, "_blank")}> 
        <div className=" flex-col justify-center ml-2 bg-transparent font-semibold py-2 px-5 hover:border-transparent rounded">
        <p className={`${styles.btnText} font-bold text-xs`}>try the wallet</p>
      </div>
    </div>
  )
}

export default Button