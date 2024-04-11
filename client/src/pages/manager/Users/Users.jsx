import React from "react";
import styles from "./Users.module.css";
import UsersProvider from "./context/UsersContext";
import SideBarProvider from "./context/NewUserContext";
import UsersTable from "./components/UsersTable";
import NewUser from "./components/NewUser";
const Users = () => {
  return (
    <UsersProvider>
      <SideBarProvider>
        <div className={styles.container}>
          <div className={styles.left}>
            <UsersTable />
          </div>
          <div className={styles.right}>
            <NewUser />
          </div>
        </div>
      </SideBarProvider>
    </UsersProvider>
  );
};

export default Users;
