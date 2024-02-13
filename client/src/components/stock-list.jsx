import React from 'react';
import Grid from '@mui/material/Grid';
import StockCard from '../components/stock-card';

const StockList = ({ stocks }) => {
  return (
    <Grid container>
      {stocks.map((stock) => (
        <Grid item key={stock.ticker} xs={12} sm={6} md={4} lg={3}>
          <StockCard stock={stock} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StockList;
