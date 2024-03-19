import React from "react";
import styles from "./CategoryList.module.css";
import { useItems } from "../../context/ItemsContext";

const CategoryList = () => {
  const { categories, changeCategory } = useItems();

  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <div
          key={category.label}
          className={
            styles.category + (category.active ? " " + styles.active : "")
          }
          onClick={() => changeCategory(category.label)}
        >
          <div className={styles.icon}>{category.icon}</div>
          <div className={styles.label}>{category.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
