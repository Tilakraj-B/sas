import { useSideBar } from "../../context/SideBarContext.jsx";
import ItemDetail from "../ItemDetails";
import NewItem from "../NewItem";

const SideBar = () => {
  const { isAddingNewItem, isEditingItem, viewItem } = useSideBar();

  if (isAddingNewItem) {
    return <NewItem></NewItem>;
  } else if (viewItem) {
    return <ItemDetail></ItemDetail>;
  } else if (isEditingItem) {
    return <NewItem></NewItem>;
  }
};

export default SideBar;
