import React, { createContext, useState, useContext } from 'react';

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stockData, setStockData] = useState(null);

  const updateStockData = (data) => {
    setStockData(data);
  };

  return (
    <StockContext.Provider value={{ stockData, updateStockData }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => useContext(StockContext);