import React from "react";
import styles from "./Home.module.css";

import CategoryList from "./components/CategoryList";
import Cart from "./components/Cart";
import ItemsGrid from "./components/ItemsGrid";

import ItemsProvider from "./context/ItemsContext";
import CartProvider from "./context/CartContext";

const Home = () => {
  return (
    <ItemsProvider>
      <CartProvider>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>
              Items <span>Category</span>
            </h2>
            <CategoryList />
            <h2>
              Choose <span>Order</span>
            </h2>
            <ItemsGrid />
          </div>
          <div className={styles.right}>
            <Cart />
          </div>
        </div>
      </CartProvider>
    </ItemsProvider>
  );
};

export default Home;
