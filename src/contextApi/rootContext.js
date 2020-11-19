import React, { createContext, useContext } from "react";
import { useProvideContact } from "./useContact";

const rootContext = createContext();

export const ProvideRoot = ({ children }) => {
  const rootValues = useProvideRoot();
  return (
    <rootContext.Provider value={rootValues}>{children}</rootContext.Provider>
  );
};

const useProvideRoot = () => {
  return {
    contactContext: useProvideContact(),
  };
};
export const useRootContext = () => {
  return useContext(rootContext);
};
