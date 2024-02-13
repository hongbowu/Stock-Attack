import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function StockCard({ stock }) {
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
          onClick={() => {
            // handles the add to portfolio
          }}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          aria-label="remove from portfolio"
          onClick={() => {
            // handles the remove from portfolio
          }}
        >
          <RemoveIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default StockCard;