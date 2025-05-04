import React, { createContext, useState } from "react";

// Create the context
export const PageTitleContext = createContext();

// Create a provider component
export const PageTitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Home"); // Default page title

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
