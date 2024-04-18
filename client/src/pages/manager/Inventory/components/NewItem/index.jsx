import styles from "./NewItem.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";

const NewItem = () => {
  const { isEditingItem, selectedItem, updateImageUrl, newItem, handleSubmit } =
    useSideBar();

  return (
    <div className={styles.sidebar}>
      <h2>{isEditingItem ? "Update Item" : "Add Item"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image" className={styles.imageLabel}>
          <input
            type="file"
            id="image"
            name="image"
            onChange={updateImageUrl}
            accept="image/*"
          />
          {selectedItem?.imageUrl || newItem?.imageUrl ? (
            <img
              src={isEditingItem ? selectedItem.imageUrl : newItem.imageUrl}
              alt="item"
              className={styles.image}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>Upload Image</span>
            </div>
          )}
        </label>
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
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="food">Food</option>
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
