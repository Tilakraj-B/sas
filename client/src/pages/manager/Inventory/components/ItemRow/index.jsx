import React from "react";
import styles from "./ItemRow.module.css";

const ItemRow = ({ item, columns }) => {
  return (
    <tr className={styles.row}>
      {columns.map((col, index) => (
        <td className={styles.data}>{item[col]}</td>
      ))}
    </tr>
  );
};

export default ItemRow;
