import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useCart } from "../../context/CartContext";
import styles from "./BarcodeScanner.module.css";
import { useGetItemQuery } from "../../../../state/api/items";
import { useZxing } from "react-zxing";

const BarcodeeScanner = () => {
  const qrReader = useRef(null);

  const [result, setResult] = useState("");
  const [scanDelay, setScanDelay] = useState(500);

  const { addToCart, stopScan } = useCart();
  const handleScan = async (data) => {
    if (data) {
      setResult(data);
      const itemId = result.substring(9);
      console.log(itemId);
      //    const {
      //      data: { item } = {},
      //      isLoading,
      //      isError,
      //      error,
      //    } = useGetItemQuery(itemId);
      //   addToCart(item);
      stopScan();
    }
  };

  const stopQrReader = () => {
    stopScan();
    setScanDelay(false);
    console.log("scan delay");
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={scanDelay}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>Scanned Barcode: {result}</p>
      <button className={styles.button} onClick={stopQrReader}>
        Stop Scan
      </button>
    </div>
  );
};

const BarcodeScanner = () => {
  const [result, setResult] = useState("");
  const { addToCart, stopScan } = useCart();

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(result);
    },
  });

  const stopQrReader = () => {
    stopScan();
  };

  return (
    <>
      <video ref={ref} width="300px" height="300px" />
      <p>Scanned Barcode: {result}</p>
      <button className={styles.button} onClick={stopQrReader}>
        Stop Scan
      </button>
    </>
  );
};

export default BarcodeScanner;
