import React from "react";
import styles from "./CartItemTile.module.css";

import { MdDeleteOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { useItems } from "../../context/ItemsContext";

const CartItemRow = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useItems();

  return (
    <div className={styles.tile}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.price}>₹{item.pricePerItem}</div>
        </div>
      </div>
      <div className={styles.quantity}>x{item.quantity}</div>
      <div className={styles.total}>₹{item.pricePerItem * item.quantity}</div>
      <div className={styles.remove}>
        {item.quantity > 1 ? (
          <FiMinusCircle onClick={decreaseQuantity} />
        ) : (
          <MdDeleteOutline onClick={removeFromCart} />
        )}
      </div>
    </div>
  );
};

export default CartItemRow;
