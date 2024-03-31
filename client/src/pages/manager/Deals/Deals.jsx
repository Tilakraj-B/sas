import React from "react";
import AllDealProvider from "./context/AllDealContext";
import CreateDeal from "./components/CreateDeal";
import AllDeal from "./components/AllDeal";
import styles from "./Deals.module.css";

const Deals = () => {
  return (
    <AllDealProvider>
      <div>
        <div >
          <h1>Create Deal</h1>
          <CreateDeal />
        </div>
        <div >
          <h1>All Deals</h1>
          <AllDeal />
        </div>
      </div>
    </AllDealProvider>
  );
};

export default Deals;
