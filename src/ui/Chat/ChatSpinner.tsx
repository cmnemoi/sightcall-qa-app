import React from "react";
import styles from "./ChatSpinner.module.css";

const ChatSpinner: React.FC = () => (
  <div className={styles.spinnerWrapper}>
    <div className={styles.spinner}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  </div>
);

export default ChatSpinner;
