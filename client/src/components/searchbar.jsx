
import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_STOCK } from '../utils/queries';
import { useStockContext } from '../utils/stockContext';




function SearchBar({ setStockSearchResult }) {
  const [symbol, setSymbol] = useState('');
  const { updateStockData } = useStockContext();
  const [getAPIStockData, {loading, error, data}] = useLazyQuery(QUERY_SINGLE_STOCK)



  const handleSubmit = async (event) => {
    event.preventDefault();
    getAPIStockData({ variables: { symbol: symbol } });
    // Call fetchStockData function with the symbol input
    
  };

  React.useEffect(() => {
    if (data) {
      console.log('stock data', data)
      updateStockData(data);
      setStockSearchResult(data.getStockAPIData);
    }
  }, [data, updateStockData, setStockSearchResult]);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {/* Form Fields */}
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-basic" 
                  label="Enter Stock Ticker Here" 
                  variant="outlined"
                  value={symbol}
                  onChange={(event) => setSymbol(event.target.value.toUpperCase())}
                />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Search Stock
              </Button>
            </Box>


  );
}

export default SearchBar;