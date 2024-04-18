import DataTable from "../../../components/DataTable/DataTable";
import { useItems } from "../../context/ItemsContext";
import { useSideBar } from "../../context/SideBarContext";
import Card from "../../../components/Card/Card";

const ItemTable = () => {
  const { items } = useItems();
  const { viewItemDetails, handleDelete } = useSideBar();

  const actions = {
    view: {
      label: "View",
      action: (itemId) => {
        viewItemDetails(itemId);
        console.log(`Viewing row with id ${itemId}`);
      },
    },
    delete: (item) => {
      handleDelete(item);
      console.log(`Deleting row with id ${item._id}`);
    },
  };

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
        actions={actions}
      />
    </Card>
  );
};

export default ItemTable;
