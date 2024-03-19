import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";
import CartItemRow from "../CartItemTile";

const Cart = () => {
  const { items } = useCart();

  return (
    <div className={styles.sidebar}>
      <h2>
        Order <span>Cart</span>
      </h2>
      <div className={styles.items}>
        {items.length > 0 ? (
          items.map((item, index) => <CartItemRow key={item._id} item={item} />)
        ) : (
          <div className={styles.empty}>Cart is empty</div>
        )}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottom}>
        <div className={styles.total}>
          <span>Sub Total</span>
          <span>
            ₹
            {items.reduce(
              (total, item) => total + item.pricePerItem * item.quantity,
              0
            )}
          </span>
        </div>
        <div className={styles.total}>
          <span>Discount</span>
          <span>₹0</span>
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <span>
            ₹
            {items.reduce(
              (total, item) => total + item.pricePerItem * item.quantity,
              0
            )}
          </span>
        </div>
        <button className={styles.checkout}>
          Charge{" "}
          <span>
            ₹
            {items.reduce(
              (total, item) => total + item.pricePerItem * item.quantity,
              0
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
