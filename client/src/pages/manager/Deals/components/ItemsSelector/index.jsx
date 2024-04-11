import React from "react";
import styles from "./ItemsSelector.module.css";
import { useDeals } from "../../context/DealsContext";
import { useSideBar } from "../../context/SideBarContext";
const ItemsSelector = () => {
  const { items } = useDeals();
  const { addApplicableItem } = useSideBar();

  return (
    <div className={styles.items}>
      <datalist className={styles.datalist} id="items">
        {items.map((item) => (
          <option
            key={item._id}
            value={item.name}
            item_id={item._id}
            className={styles.option}
          />
        ))}
      </datalist>
      <input
        className={styles.input}
        list="items"
        placeholder="Select Items"
        onChange={addApplicableItem}
      />
    </div>
  );
};

export default ItemsSelector;
