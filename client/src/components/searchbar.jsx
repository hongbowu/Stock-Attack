
import React, { useState, useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import fetchStockData from '../../../server/utils/stockapi';


function SearchBar({ fetchStockData }) {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call fetchStockData function with the symbol input
    const result = fetchStockData(symbol);
    console.log(result)
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
      <TextField
                  required
                  fullWidth
                  id="outlined-basic" 
                  label="Enter Stock Ticker Here" 
                  variant="outlined" 
                  onChange={(event) => setSymbol(event.target.value)}
                />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;