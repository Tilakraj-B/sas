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
            <CategoryList />
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
