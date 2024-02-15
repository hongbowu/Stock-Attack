import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function StockCard({ stock: stockInfo, price }) {
  const { stock, quantity } = stockInfo;
  const handleAddToPortfolio = () => {
    console.log(`Adding ${stock.name} to portfolio`);
    // add update state or make an API call)
  };
  const handleRemoveFromPortfolio = () => {
    console.log(`Removing ${stock.name} from portfolio`);
    // add update state or make an API call)
  };
  return (
    <>
      {stock && (
        <Card sx={{ maxWidth: 345, margin: '1rem' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {stock.name} {stock.ticker}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {`Quantity: ${quantity}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Current Price: ${price}
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

      )}
    </>
  );
}

export default StockCard;
