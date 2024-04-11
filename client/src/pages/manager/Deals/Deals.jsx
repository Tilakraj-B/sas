import React from "react";
import DealsProvider from "./context/DealsContext";
import DealsTable from "./components/DealsTable";
import styles from "./Deals.module.css";
import SideBar from "./components/Sidebar";
import SideBarProvider from "./context/SideBarContext";
const Deals = () => {
  return (
    <DealsProvider>
      <SideBarProvider>
        <div className={styles.container}>
          <div className={styles.left}>
            <DealsTable />
          </div>
          <div className={styles.right}>
            <SideBar />
          </div>
        </div>
      </SideBarProvider>
    </DealsProvider>
  );
};

export default Deals;
