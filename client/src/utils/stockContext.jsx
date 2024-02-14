import React, { createContext, useState, useContext } from 'react';

const StockContext = createContext();
export const useStockContext = () => useContext(StockContext);

export const StockProvider = ({ children }) => {
  const [stockData, setStockData] = useState('');

  const updateStockData = (data) => {
    setStockData(data);
  };

  return (
    <StockContext.Provider value={{ stockData, updateStockData }}>
      {children}
    </StockContext.Provider>
  );
};
