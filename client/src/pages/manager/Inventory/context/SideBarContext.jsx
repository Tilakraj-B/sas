import React, { createContext, useContext, useState } from "react";
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from "../../../../state/api/items";
const SideBarContext = createContext();

export const useSideBar = () => useContext(SideBarContext);

const SideBarProvider = ({ children }) => {
  const [isAddingNewItem, setIsAddingNewItem] = useState(true);

  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  // const [deleteItem ] = useDeleteItemMutation();

  const addNewItem = () => {
    setIsEditingItem(false);
    setViewItem(false);
    setIsAddingNewItem(true);
  };

  const [viewItem, setViewItem] = useState(false, null);

  const viewItemDetails = () => {
    setIsAddingNewItem(false);
    setIsEditingItem(false);
    setViewItem(true);
    setNewItem({
      name: "",
      imageUrl: "",
      pricePerItem: 0,
      category: "electronics",
      quantity: 0,
    });
  };

  const [isEditingItem, setIsEditingItem] = useState(false);

  const editItem = () => {
    setIsAddingNewItem(false);
    setViewItem(false);
    setIsEditingItem(true);
    setNewItem({
      name: "",
      imageUrl: "",
      pricePerItem: 0,
      category: "electronics",
      quantity: 0,
    });
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = ({ item }) => {
    setSelectedItem(item);
  };

  const [newItem, setNewItem] = useState({
    name: "",
    imageUrl: "",
    pricePerItem: 0,
    category: "electronics",
    quantity: 0,
  });

  const updateImageUrl = (imageFile) => {
    const imageUrl = URL.createObjectURL(imageFile.target.files[0]);
    if (isEditingItem) {
      setSelectedItem((selectedItem) => ({
        ...selectItem,
        imageUrl: imageUrl,
      }));
    }
    setNewItem((prevItem) => ({
      ...prevItem,
      imageUrl: imageUrl,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather all form inputs
    const formData = new FormData(e.target);
    const newItemData = {
      name: formData.get("name") || "",
      imageUrl: newItem.imageUrl || "",
      pricePerItem: parseFloat(formData.get("pricePerItem")) || 0,
      category: formData.get("category") || "electronics",
      quantity: parseInt(formData.get("quantity")) || 0,
    };

    if (isEditingItem) {
      setSelectedItem((prevSelectedItem) => ({
        ...prevSelectedItem,
        ...newItemData,
      }));
      updateItem(selectItem._id, selectItem);
    } else {
      setNewItem(newItemData);
      createItem(newItemData);
    }
    e.target.reset();
  };

  const handleDelete = (item) => {
    console.log("deleting item");
    // deleteItem(item._id);
  };

  const value = {
    isAddingNewItem,
    isEditingItem,
    viewItem,
    selectedItem,
    newItem,
    addNewItem,
    viewItemDetails,
    editItem,
    selectItem,
    updateImageUrl,
    handleSubmit,
    handleDelete,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};

export default SideBarProvider;
