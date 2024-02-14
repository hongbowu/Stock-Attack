import React from 'react';
import { Box, Typography } from '@mui/material';

// dummy data we will will replace this with data from backend
const stocks = [
  { ticker: 'AAPL', value: 15000 },
  { ticker: 'MSFT', value: 20000 },
  { ticker: 'GOOGL', value: 25000 },
];

const PortfolioValue = () => {
  const totalValue = stocks.reduce((acc, stock) => acc + stock.value, 0);

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <Typography variant="h6" component="h2">
        Total Portfolio Value
      </Typography>
      <Typography variant="h4" component="p">
        ${totalValue.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default PortfolioValue;
