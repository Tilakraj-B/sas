import React from "react";
import styles from "./DealsInput.module.css";
import { useCart } from "../../context/CartContext";

const DealsInput = () => {
  const { deals } = useCart();

  return (
    <div className={styles.deals}>
      <datalist className={styles.datalist} id="deals">
        {deals.map((deal) => (
          <option key={deal._id} value={deal.name} className={styles.option} />
        ))}
      </datalist>
      <input
        className={styles.input}
        list="deals"
        placeholder="Select a deal"
      />
    </div>
  );
};

export default DealsInput;
