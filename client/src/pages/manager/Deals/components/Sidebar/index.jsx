import { useSideBar } from "../../context/SideBarContext.jsx";
import DealDetails from "../DealDetails/index.jsx";
import NewDeal from "../NewDeal/index.jsx";

const SideBar = () => {
  const { isAddingNewDeal, viewDeal } = useSideBar();

  if (isAddingNewDeal) {
    return <NewDeal />;
  } else if (viewDeal) {
    return <DealDetails />;
  }
};

export default SideBar;
