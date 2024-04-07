import React from "react";
import ItemsProvider from "./context/ItemsContext";
import SideBarProvider from "./context/SideBarContext";
import styles from "./Inventory.module.css";
import ItemTable from "./components/ItemTable";
import SideBar from "./components/SideBar";

const Inventory = () => {
  return (
    <ItemsProvider>
      <SideBarProvider>
        <div className={styles.container}>
          <div className={styles.left}>
            <ItemTable />
          </div>
          <div className={styles.right}>
            <SideBar />
          </div>
        </div>
      </SideBarProvider>
    </ItemsProvider>
  );
};

export default Inventory;
