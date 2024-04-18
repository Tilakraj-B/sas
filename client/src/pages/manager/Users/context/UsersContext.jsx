import { createContext, useContext } from "react";
import { useGetUsersQuery } from "../../../../state/api/users";

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
  const { data: { users = [] } = {} } = useGetUsersQuery();

  const value = {
    users: users,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
