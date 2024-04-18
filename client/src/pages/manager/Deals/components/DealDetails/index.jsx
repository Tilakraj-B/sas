import styles from "./DealDetails.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";
import ApplicableItemTile from "../ApplicableItemTile/index.jsx";
import { useDeals } from "../../context/DealsContext.jsx";
import { IoChevronBackOutline } from "react-icons/io5";

const DealDetails = () => {
  const { addNewDeal, selectedDeal, deleteDeal } = useSideBar();
  const { items } = useDeals();

  const getItem = (itemId) => {
    return items.find((item) => item._id === itemId);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.back} onClick={addNewDeal}>
        <IoChevronBackOutline />
        Back
      </div>
      <h2>{selectedDeal.name}</h2>
      <div className={styles.textInfo}>
        <p>Deal Type: {selectedDeal.type}</p>
        <p>Deal Value: {selectedDeal.value}</p>
      </div>

      <div className={styles.items}>
        {selectedDeal.applicableItems.length > 0 ? (
          selectedDeal.applicableItems.map((itemId, index) => (
            <ApplicableItemTile key={itemId} item={getItem(itemId)} />
          ))
        ) : (
          <div className={styles.empty}>No Items added</div>
        )}
      </div>
      <button className={styles.button} onClick={deleteDeal}>
        Delete Deal
      </button>
    </div>
  );
};

export default DealDetails;
