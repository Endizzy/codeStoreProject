import React from 'react';
import styles from "./WelcomeContent.module.css"

const WelcomeContent = () => {
  return (
      <div>
          <div className={styles.welcome__content}>
              <div className={styles.container}>
                  <h1 className="welcome__head-text">Looking something new for your projects?</h1>
                  <p className="welcome__desc-text">Then this place is definitely for you, have a good time</p>
              </div>
          </div>
      </div>
  );
};

export default WelcomeContent;
