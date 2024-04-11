import styles from "./NewDeal.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";
import ItemsSelector from "../ItemsSelector/index.jsx";
import ApplicableItemTile from "../ApplicableItemTile/index.jsx";

const NewDeal = () => {
  const { newDeal, handleSubmit, applicableItemsList } = useSideBar();
  return (
    <div className={styles.sidebar}>
      <h2>{"Add Deal"}</h2>
      <form
        action="/submit"
        method="post"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          defaultValue={newDeal.name}
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="number"
          id="value"
          name="value"
          defaultValue={newDeal.value}
          placeholder="Value"
        />
        <select id="type" name="type" className={styles.input}>
          <option value="fixed">Fixed</option>
          <option value="percentage">Percantage</option>
        </select>
        <ItemsSelector />
        <div className={styles.items}>
          {applicableItemsList.length > 0 ? (
            applicableItemsList.map((item, index) => (
              <ApplicableItemTile key={item._id} item={item} />
            ))
          ) : (
            <div className={styles.empty}>No Items added</div>
          )}
        </div>
        <div className={styles.divider}></div>
        <button className={styles.button} type="submit">
          {"Add Deal"}
        </button>
      </form>
    </div>
  );
};

export default NewDeal;
