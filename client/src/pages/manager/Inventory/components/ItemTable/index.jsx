import DataTable from "../../../components/DataTable/DataTable";
import { useItems } from "../../context/ItemsContext";
import ItemRow from "../ItemRow";
import styles from "./ItemTable.module.css";
import Card from "../../../components/Card/Card";

const ItemTable = () => {
  const { items } = useItems();

  return (
    <Card>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "category", label: "Category" },
          { key: "pricePerItem", label: "Price" },
          { key: "quantity", label: "Quantity" },
        ]}
        data={items}
      />
    </Card>
  );
};

export default ItemTable;
