import React from "react";
import styles from "./DealsInput.module.css";
import { useCart } from "../../context/CartContext";

const DealsInput = () => {
  const { deals, selectDeal } = useCart();

  return (
    <div className={styles.deals}>
      <select
        className={styles.select}
        id="deals"
        name="deals"
        defaultValue="Select Deal"
        onChange={(e) => selectDeal(e.target.selectedOptions[0].dataset.id)}
      >
        <option value="Select Deal" className={styles.option}>
          Select Deal
        </option>
        {deals.map((deal) => (
          <option
            key={deal._id}
            data-id={deal._id}
            value={deal.name}
            className={styles.option}
          >
            {deal.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DealsInput;
