import Card from "../../../components/Card/Card";
import DataTable from "../../../components/DataTable/DataTable";
import { useDeals } from "../../context/DealsContext";
import { useSideBar } from "../../context/SideBarContext";

const DealsTable = () => {
  const { deals } = useDeals();
  const { viewDealDetails, handleDelete } = useSideBar();

  const actions = {
    view: {
      label: "View",
      action: (dealId) => {
        viewDealDetails(dealId);
      },
    },
    delete: (dealId) => {
      handleDelete(dealId);
      console.log(`Deleting row with id ${dealId}`);
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
