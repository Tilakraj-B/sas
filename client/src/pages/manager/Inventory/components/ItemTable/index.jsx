import DataTable from "../../../components/DataTable/DataTable";
import { useItems } from "../../context/ItemsContext";
import { useSideBar } from "../../context/SideBarContext";
import Card from "../../../components/Card/Card";

const ItemTable = () => {
  const { items } = useItems();
  const { viewItemDetails, selectItem, handleDelete } = useSideBar();

  const actions = {
    edit: {
      label: "View",
      action: async (item) => {
        await selectItem({ item: item });
        viewItemDetails();
      },
    },
    delete: (id) => {
      handleDelete(id);
      console.log(`Deleting row with id ${id}`);
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
