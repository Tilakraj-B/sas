import React from "react";
import ItemsProvider from "./context/ItemsContext";
import styles from "./Inventory.module.css";
import ItemTable from "./components/ItemTable";

const Inventory = () => {
  return (
    <ItemsProvider>
      <div className={styles.container}>
        <ItemTable/>
      </div>
    </ItemsProvider>
  );
};

export default Inventory;
