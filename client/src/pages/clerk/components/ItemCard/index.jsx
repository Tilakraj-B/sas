import React from "react";
import styles from "./ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.price}>₹{item.pricePerItem}</div>
      </div>
    </div>
  );
};

export default ItemCard;
