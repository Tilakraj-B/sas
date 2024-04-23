import React from "react";
import styles from "./BarcodeScanner.module.css";

import { useCart } from "../../context/CartContext";

const BarCodeScanner = () => {
  const { isScanningBarcode } = useCart();
  return (
    <div>
      <div
        id="scanner-container"
        style={{
          visibility: isScanningBarcode ? "visible" : "hidden",
        }}
        className={styles.barcodeScanner}
      ></div>
    </div>
  );
};

export default BarCodeScanner;
