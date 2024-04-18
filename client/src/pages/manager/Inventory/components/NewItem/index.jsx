import styles from "./NewItem.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";
import { useItems } from "../../context/ItemsContext.jsx";

const NewItem = () => {
  const { isEditingItem, selectedItem, newItem, handleSubmit } = useSideBar();

  const { categories } = useItems();

  return (
    <div className={styles.sidebar}>
      <h2>{isEditingItem ? "Update Item" : "Add Item"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          id="imageUrl"
          name="imageUrl"
          defaultValue={isEditingItem ? selectedItem.imageUrl : null}
          placeholder="Image Url"
        />
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          defaultValue={isEditingItem ? selectedItem.name : null}
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="number"
          id="pricePerItem"
          name="pricePerItem"
          defaultValue={isEditingItem ? selectedItem.pricePerItem : null}
          placeholder="Price Per Item"
        />
        <select id="category" name="category" className={styles.input}>
          {categories?.map((cat) => (
            <option value={cat.label}>{cat.label}</option>
          ))}
        </select>

        <input
          className={styles.input}
          type="number"
          id="quantity"
          name="quantity"
          defaultValue={isEditingItem ? selectedItem.quantity : null}
          placeholder="Quantity"
        />
        <div className={styles.divider}></div>
        <button className={styles.button} type="submit">
          {isEditingItem ? "Update" : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default NewItem;
