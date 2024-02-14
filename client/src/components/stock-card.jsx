import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { AddIcon, RemoveIcon } from '@mui/icons-material';

function StockCard({ stock }) {
  const handleAddToPortfolio = () => {
    console.log(`Adding ${stock.name} to portfolio`);
    // add update state or make an API call)
  };
  const handleRemoveFromPortfolio = () => {
    console.log(`Removing ${stock.name} from portfolio`);
    // add update state or make an API call)
  };
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stock.name} ({stock.ticker})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current Price: ${stock.price}
        </Typography>
        <IconButton
          aria-label="add to portfolio"
          onClick={handleAddToPortfolio}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          aria-label="remove from portfolio"
          onClick={handleRemoveFromPortfolio}
        >
          <RemoveIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default StockCard;
