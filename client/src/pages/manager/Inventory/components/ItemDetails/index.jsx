import styles from "./ItemDetails.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";
const ItemDetail = () => {
  const { addNewItem, selectedItem, editItem } = useSideBar();

  return (
    <div className={styles.sidebar}>
      <button className={styles.button} onClick={addNewItem}>
        Add New Item
      </button>
      <div className={styles.divider}></div>
      <img
        src={selectedItem.imageUrl}
        alt={selectedItem.name}
        className={styles.itemImage}
      />
      <h2>{selectedItem.name}</h2>
      <p>Price: ${selectedItem.pricePerItem}</p>
      <p>Category: {selectedItem.category}</p>
      <p>Quantity: {selectedItem.quantity}</p>
      <button className={styles.button} onClick={editItem}>
        Edit Item
      </button>
    </div>
  );
};

export default ItemDetail;
