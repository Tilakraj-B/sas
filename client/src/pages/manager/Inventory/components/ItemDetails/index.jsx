import styles from "./ItemDetails.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";
import { useGetItemQuery } from "../../../../../state/api/items.js";
import { IoChevronBackOutline } from "react-icons/io5";
const ItemDetail = () => {
  const { addNewItem, editItem, selectedItemId } = useSideBar();
  const {
    data: { item } = {},
    isLoading,
    isError,
    error,
  } = useGetItemQuery(selectedItemId);

  return (
    <div className={styles.sidebar}>
      <div className={styles.back} onClick={addNewItem}>
        <IoChevronBackOutline />
        Back
      </div>
      
      {isLoading ? (
        <div>Loading...</div>
      ) : item ? (
        <>
          <img
            src={item.imageUrl}
            alt={item.name}
            className={styles.itemImage}
          />
          <h2>{item.name}</h2>
          <p>Price: ${item.pricePerItem}</p>
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
          <button className={styles.button} onClick={editItem}>
            Edit Item
          </button>
        </>
      ) : isError ? (
        <div>Error fetching item: {error.data.message}</div>
      ) : (
        <div>Something Went Wrong!</div>
      )}
    </div>
  );
};

export default ItemDetail;
