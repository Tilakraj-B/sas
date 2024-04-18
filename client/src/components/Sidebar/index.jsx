import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";
import { useSidebar } from "./SidebarContext";
import { Link } from "react-router-dom";

import { IoLogOutOutline } from "react-icons/io5";
import { useLogoutMutation } from "../../state/api/auth";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../state/slices/auth";

const Sidebar = () => {
  const { items } = useSidebar();
  const [logout, { data }] = useLogoutMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(clearCredentials());
    }
  }, [data, dispatch]);

  return (
    <div className={styles.sidebar}>
      {items
        .filter((item) => item.show)
        .map((item, index) => (
          <Link
            key={`${index}-${item.label}`}
            className={styles.item + (item.active ? ` ${styles.active}` : "")}
            to={item.path}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.label}>{item.label}</div>
          </Link>
        ))}
      <div
        onClick={() => logout()}
        className={`${styles.item} ${styles.bottom}`}
      >
        <div className={styles.icon}>
          <IoLogOutOutline />
        </div>
        <div className={styles.label}>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
