import { createContext, useContext } from "react";
import { useGetUsersQuery } from "../../../../state/api/users";

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

const allUsers = [
  {
    _id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    passwordHash: "e723a55c2e66a7756e7e7e8b9e27b6b0",
    role: "Manager",
  },
  {
    _id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    passwordHash: "f6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "Clerk",
  },
  {
    _id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    passwordHash: "d6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "Clerk",
  },
  {
    _id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    passwordHash: "c6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "Admin",
  },
  {
    _id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    passwordHash: "b6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "Manager",
  },
  {
    _id: 6,
    name: "David Miller",
    email: "david.miller@example.com",
    passwordHash: "a6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "Clerk",
  },
];

const UsersProvider = ({ children }) => {
  const { users = allUsers } = useGetUsersQuery();

  const value = {
    users: users,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
