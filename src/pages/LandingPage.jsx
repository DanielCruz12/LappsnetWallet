import styles from "../styles/Global";
import "../styles/App.css";
import Button from "../components/button/Button";
import Helmet from "react-helmet";


const LandingPage = ({
  title,
  description,
  mockupImg,
  showBtn,
  banner,
  reverse,
}) => {
  const Link = "https://web.lappsnet.io/";

  return (
    <>
    <Helmet>
    <title>Wallet</title>
    </Helmet>

      <div
        className={`min-h-screen ${styles.section} ${styles.bgWhite}
      ${banner}`}
      >
        <div
          className={`flex items-center ${styles.boxClass
          } w-10/12 sm:w-full minmd:w-3/4`}
        >
          <div
            className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}        
        ${styles.textLeft}        
         `}
          >
            <h1
              className={`${styles.h1Text} ${ styles.whiteText
              }`}
            >
              {title}
            </h1>
            <p
              className={`${styles.descriptionText} ${ styles.whiteText
              }`}
            >
              {description} <a href={Link} target="_blank" className={`${styles.a}`}rel="noreferrer" >the project website</a>
            </p>
              <Button/>
          </div>

          <div className={`flex-2 ${styles.flexCenter} p-12 sm:px-0`}>
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

{/*
            <h4>How does the wallet work?</h4>
            <p>
              The wallet generates a key, which is encrypted using a security
              device, such as your screen lock. The encrypted key is stored in
              the browser, and you can authenticate with our servers to decrypt
              the key, or recover from a password-protected backup.
            </p>
            <h4>Are there any requirements?</h4>
            <p>You will need one of the following browsers:</p>
            <ul>
              <li>Chrome 67+, Firefox 60+, Safari 13+, Edge 18+</li>
              <li>(Android) Chrome latest</li>
              <li>(iOS) Safari 14.4+, Firefox latest, Chrome latest</li>
            </ul>
          </div>
        </div>
      </div> */}
      
    </>
  );
};

export default LandingPage;
