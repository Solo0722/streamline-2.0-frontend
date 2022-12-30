import React, { createContext } from "react";

export const GlobalContext = createContext({});

const GlobalProvider = () => {
  return (
    <GlobalContext.Provider value={{}}>GlobalProvider</GlobalContext.Provider>
  );
};

export default GlobalProvider;
