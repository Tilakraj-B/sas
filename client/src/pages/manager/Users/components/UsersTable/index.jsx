import Card from "../../../components/Card/Card";
import DataTable from "../../../components/DataTable/DataTable";
import { useUsers } from "../../context/UsersContext";
import { useSideBar } from "../../context/NewUserContext";

const UsersTable = () => {
  const { users } = useUsers();
  const { handleSubmit, handleDelete } = useSideBar();

  const actions = {
    delete: (user) => {
      handleDelete(user);
      console.log(`Deleting row with id ${user._id}`);
    },
  };

  return (
    <Card>
      <DataTable
        title="Deals"
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "role", label: "Role" },
        ]}
        data={users}
        actions={actions}
      />
    </Card>
  );
};

export default UsersTable;
