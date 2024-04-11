import Card from "../../../components/Card/Card";
import DataTable from "../../../components/DataTable/DataTable";
import { useDeals } from "../../context/DealsContext";
import { useSideBar } from "../../context/SideBarContext";

const DealsTable = () => {
  const { deals } = useDeals();
  const { viewDealDetails, selectDeal, handleDelete } = useSideBar();

  const actions = {
    edit: {
      label: "View",
      action: async (deal) => {
        await selectDeal({ deal: deal });
        viewDealDetails();
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
        title="Deals"
        columns={[
          { key: "name", label: "Name" },
          { key: "value", label: "Value" },
          { key: "type", label: "Type" },
        ]}
        data={deals}
        actions={actions}
      />
    </Card>
  );
};

export default DealsTable;
