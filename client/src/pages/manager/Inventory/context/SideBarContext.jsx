import React, { createContext, useContext, useState } from "react";
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from "../../../../state/api/items";
const { createCanvas } = require("canvas");
const JsBarcode = require("jsbarcode");

const SideBarContext = createContext();

export const useSideBar = () => useContext(SideBarContext);

const SideBarProvider = ({ children }) => {
  const [isAddingNewItem, setIsAddingNewItem] = useState(true);

  const [createItem, { isLoading, isError, isSuccess, data, error }] =
    useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [selectedItemId, setSelectedItemId] = useState(null);

  const addNewItem = () => {
    setSelectedItemId(null);
    setIsEditingItem(false);
    setViewItem(false);
    setIsAddingNewItem(true);
  };

  const [viewItem, setViewItem] = useState(false, null);

  const viewItemDetails = (itemId) => {
    setSelectedItemId(itemId);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Gather all form inputs
    const formData = new FormData(e.target);
    const newItemData = {
      name: formData.get("name") || "",
      imageUrl: formData.get("imageUrl") || "",
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
      const data = await createItem(newItemData);
      const newItem = data?.["data"]?.["item"];
      console.log(newItem);
      createBarcode(newItem);
    }
    e.target.reset();
  };

  const createBarcode = (item) => {
    const canvas = createCanvas(200, 100);

    // Generate the barcode
    JsBarcode(canvas, item._id, {
      format: "CODE128",
      displayValue: true,
      fontSize: 20,
      textMargin: 10,
    });

    // Convert the canvas to a base64 encoded image
    const barcodeImage = canvas.toDataURL();

    const link = document.createElement("a");
    link.href = barcodeImage;
    link.download = item.name + ".png";
    link.click();
  };

  const handleDelete = (itemId) => {
    console.log("deleting item");
    deleteItem(itemId);
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
    handleSubmit,
    handleDelete,
    selectedItemId,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};

export default SideBarProvider;
