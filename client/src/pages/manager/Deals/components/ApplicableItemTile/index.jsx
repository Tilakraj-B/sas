import React from "react";
import styles from "./ApplicableItemTile.module.css";

import { MdDeleteOutline } from "react-icons/md";

import { useSideBar } from "../../context/SideBarContext";

const ApplicableItemTile = ({ item }) => {
  const { removeFromApplicableItem } = useSideBar();

  const preventPropagation = (func) => (e) => {
    e.stopPropagation();
    func();
  };

  return (
    <div className={styles.tile}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{item.name}</div>
        </div>
      </div>
      <div className={styles.price}>₹{item.pricePerItem}</div>

      <div
        className={styles.remove}
        onClick={preventPropagation(() => removeFromApplicableItem(item._id))}
      >
        <MdDeleteOutline />
      </div>
    </div>
  );
};

export default ApplicableItemTile;
