import React, { useState, createContext, useContext } from 'react';
const Context = createContext();
export const Conx = ({ children }) => {
  const [num, setNum] = useState(0);
  return (
    <>
      <Context.Provider value={{ num, setNum }}>{children}</Context.Provider>
    </>
  );
};

export const useStateContext = () => useContext(Context);
