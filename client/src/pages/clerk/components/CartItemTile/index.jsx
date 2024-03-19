import React from "react";
import styles from "./CartItemTile.module.css";

import { MdDeleteOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";

import { useCart } from "../../context/CartContext";

const CartItemRow = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const preventPropagation = (func) => (e) => {
    e.stopPropagation();
    func();
  };

  return (
    <div className={styles.tile} onClick={() => increaseQuantity(item)}>
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
      <div
        className={styles.remove}
        onClick={
          item.quantity > 1
            ? preventPropagation(() => decreaseQuantity(item))
            : preventPropagation(() => removeFromCart(item))
        }
      >
        {item.quantity > 1 ? <FiMinusCircle /> : <MdDeleteOutline />}
      </div>
    </div>
  );
};

export default CartItemRow;
