import React from "react";
import styles from "./SalesTable.module.css";

import { useSales } from "../../context/SalesContext";
import Card from "../../../../../components/Card/Card";
import DataTable from "../../../../../components/DataTable/DataTable";
import { useGetSalesForItemQuery } from "../../../../../state/api/sales";

const SalesTable = () => {
  const { selectedItemId } = useSales();
  const { data: { sales = [] } = {} } = useGetSalesForItemQuery(selectedItemId);

  if (!selectedItemId)
    return <div className={styles.noSales}>Select an item to view sales</div>;

  return (
    <Card>
      <DataTable
        title={"Sales Stats"}
        columns={[
          {
            label: "Date",
            key: "createdAt",
            modifier: (date) =>
              Intl.DateTimeFormat("en-IN").format(new Date(date)),
          },
          { label: "Quantity", key: "quantity" },
          { label: "Discount", key: "discount" },
          { label: "Total", key: "totalPrice" },
          {
            label: "Profit",
            key: "totalPrice",
            modifier: (price, row) => {
              const discount = row.discount || 0;
              const profit = Math.round(0.1 * price - discount);
              if (profit < 0)
                return <span className={styles.loss}>{profit}</span>;
              return <span className={styles.profit}>{profit}</span>;
            },
          },
        ]}
        data={sales}
      />
    </Card>
  );
};

export default SalesTable;
