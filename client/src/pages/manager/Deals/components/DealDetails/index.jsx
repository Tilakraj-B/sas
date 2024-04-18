import styles from "./DealDetails.module.css";
import { useSideBar } from "../../context/SideBarContext.jsx";
import ApplicableItemTile from "../ApplicableItemTile/index.jsx";
import { useDeals } from "../../context/DealsContext.jsx";
import { IoChevronBackOutline } from "react-icons/io5";
import { useGetDealQuery, useGetDealsQuery } from "../../../../../state/api/deals.js";

const DealDetails = () => {
  const { addNewDeal,selectedDealId, deleteDeal } = useSideBar();
  const { items } = useDeals();

  const getItem = (itemId) => {
    return items.find((item) => item._id === itemId);
  };

  const {
    data: { deal } = {},
    isLoading,
    isError,
    error,
  } = useGetDealQuery(selectedDealId);

  return (
    <div className={styles.sidebar}>
      <div className={styles.back} onClick={addNewDeal}>
        <IoChevronBackOutline />
        Back
      </div>
      <h2>{deal?.name}</h2>
      <div className={styles.textInfo}>
        <p>Deal Type: {deal?.type}</p>
        <p>Deal Value: {deal?.value}</p>
      </div>

      <div className={styles.items}>
        {deal?.applicableItems?.length > 0 ? (
          deal?.applicableItems?.map((itemId, index) => (
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
