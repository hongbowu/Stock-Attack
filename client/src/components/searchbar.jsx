
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_STOCK } from '../utils/queries';



function SearchBar() {
  const [symbol, setSymbol] = useState('');
  const [getAPIStockData, {loading, error, data}] = useLazyQuery(QUERY_SINGLE_STOCK)

  console.log(data);

  const handleSubmit = (event) => {

    event.preventDefault();
    getAPIStockData({ variables: { symbol: symbol } });
    // Call fetchStockData function with the symbol input

  };

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