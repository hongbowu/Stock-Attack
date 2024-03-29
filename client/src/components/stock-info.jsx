import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const StockInfo = ({ stockData, onAddToPortfolio }) => {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(0, event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddClick = () => {
    onAddToPortfolio(stockData, Number(quantity));
  };

  return (
    <Card sx={{ margin: '16px auto', maxWidth: '30%', width: '90vw', mt: 4, mb: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stockData.symbol} - {stockData.companyName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Previous Close: ${stockData?.prevClosePrice?.toFixed(2)}
        </Typography>
        <Typography variant="body1">
          Current Price: ${stockData?.currentPrice?.toFixed(2)}
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
          <Button variant="contained" color="primary" onClick={() => {
            onAddToPortfolio(stockData.symbol, stockData.companyName, quantity)
            navigate('/profile')
          }}>
            Add to Portfolio
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockInfo;

