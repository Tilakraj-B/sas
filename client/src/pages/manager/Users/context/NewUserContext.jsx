import React, { createContext, useContext, useState } from "react";
import {
  useCreateClerkMutation,
  useDeleteUserMutation,
} from "../../../../state/api/users";
const NewUserContext = createContext();

export const useNewUser = () => useContext(NewUserContext);

const NewUserProvider = ({ children }) => {
  const [createClerk] = useCreateClerkMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newClerkData = {
      name: formData.get("name") || "",
      email: formData.get("email") || 0,
      role: "Clerk",
    };
    console.log("hi");
    console.log(newClerkData);
    createClerk(newClerkData);
    e.target.reset();
  };

  const handleDelete = (user) => {
    console.log(user._id);
    console.log(user);
    deleteUser(user._id);
  };

  const value = {
    handleSubmit,
    handleDelete,
  };

  return (
    <NewUserContext.Provider value={value}>{children}</NewUserContext.Provider>
  );
};

export default NewUserProvider;
