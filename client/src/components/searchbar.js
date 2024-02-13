
import React, { useState, useEffect, useRef } from 'react';
import fetchStockData from '../../../data2';



function SearchBar({ fetchStockData }) {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call fetchStockData function with the symbol input
    fetchStockData(symbol);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Stock Ticker Symbol:
        <input
          type="text"
          value={symbol}
          onChange={(event) => setSymbol(event.target.value)}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;