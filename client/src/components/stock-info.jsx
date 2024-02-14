import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, TextField } from '@mui/material';

const StockInfo = ({ stockData, onAddToPortfolio }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(0, event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddClick = () => {
    onAddToPortfolio(stockData, quantity);
  };

  return (
    <Card sx={{ margin: '16px auto', maxWidth: '30%', width: '90vw', mt: 4, mb: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stockData.symbol} - {stockData.companyName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Previous Close: ${stockData.prevClosePrice.toFixed(2)}
        </Typography>
        <Typography variant="body1">
          Current Price: ${stockData.currentPrice.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <TextField
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 0 }}
            label="Quantity"
            sx={{ width: '100px' }}
          />
          <Button variant="contained" color="primary" onClick={handleAddClick}>
            Add to Portfolio
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockInfo;

