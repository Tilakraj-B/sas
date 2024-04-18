import React from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={styles.primary}>
      {title}
    </button>
  );
};

export default PrimaryButton;
