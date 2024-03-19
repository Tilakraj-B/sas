import React from "react";
import styles from "./ItemCard.module.css";
import { useCart } from "../../context/CartContext";

const ItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.card} onClick={() => addToCart(item)}>
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
