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
    setQuantity(event.target.value);
  };

  const handleAddClick = () => {
    onAddToPortfolio(stockData, Number(quantity));
  };

  return (
    <Card sx={{ margin: '16px auto', maxWidth: 600 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stockData.symbol} - {stockData.companyName}
        </Typography>
        <Typography variant="body1">
          Current Price: ${stockData.currentPrice}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <TextField
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 0 }}
            label="Quantity"
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

