import React from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState();

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
