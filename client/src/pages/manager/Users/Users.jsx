import React from "react";
import styles from "./Users.module.css";
import UsersProvider from "./context/UsersContext";
import UsersTable from "./components/UsersTable";
import NewUser from "./components/NewUser";
import NewUserProvider from "./context/NewUserContext";

const Users = () => {
  return (
    <UsersProvider>
      <NewUserProvider>
        <div className={styles.container}>
          <div className={styles.left}>
            <UsersTable />
          </div>
          <div className={styles.right}>
            <NewUser />
          </div>
        </div>
      </NewUserProvider>
    </UsersProvider>
  );
};

export default Users;
