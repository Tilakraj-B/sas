import React from "react";
import styles from "./ItemsGrid.module.css";
import { useItems } from "../../context/ItemsContext";
import ItemCard from "../ItemCard";

const ItemsGrid = () => {
  const { items } = useItems();
  return (
    <div className={styles.items}>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemsGrid;
