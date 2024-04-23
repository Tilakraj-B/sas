import React from "react";
import styles from "./ItemSelector.module.css";

import { useSales } from "../../context/SalesContext";

const ItemSelector = () => {
  const { items, selectItem } = useSales();

  return (
    <div className={styles.container}>
      <select onChange={(e) => selectItem(e.target.value)}>
        <option value="">Select an item</option>
        {items.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemSelector;
