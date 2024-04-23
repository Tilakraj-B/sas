import React from "react";
import styles from "./Sales.module.css";

import SalesProvider from "./context/SalesContext";
import ItemSelector from "./components/ItemSelector";
import SalesTable from "./components/SalesTable";

const Sales = () => {
  return (
    <SalesProvider>
      <div className={styles.container}>
        <ItemSelector />
        <SalesTable />
      </div>
    </SalesProvider>
  );
};

export default Sales;
