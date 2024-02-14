import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StockList from '../components/stock-list';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_STOCKS } from '../utils/queries';
import { useNavigate } from 'react-router-dom';
import StockCard from '../components/stock-card';
import { useStockContext } from '../utils/stockContext';

// placeholder for the stocks data and would be replaced with your API call
const dummyStocks = [
  { name: 'Apple', ticker: 'AAPL', value: 15000 },
  { name: 'Microsoft', ticker: 'MSFT', value: 20000 },
  { name: 'Google', ticker: 'GOOGL', value: 25000 },
];

const Profile = () => {
  const navigate = useNavigate(); 
  const { loading, data } = useQuery(QUERY_ALL_STOCKS);
  const [filteredStocks, setFilteredStocks] = useState(dummyStocks); // dummy data for now

  const { stockData } = useStockContext();
  console.log('stockData', stockData);

  useEffect(() => {
    if (data) {
      setFilteredStocks(data.stocks);
    }
  }, [data]);

  const handleSearch = () => {
    navigate('/search');
  };

  const calculateTotalValue = () => {
    return filteredStocks.reduce((total, stock) => total + stock.value, 0);
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        My Portfolio
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2">
          Total Portfolio Value: ${calculateTotalValue().toLocaleString()}
        </Typography>
        <Button variant="contained" onClick={handleSearch}>
          Search Stocks
        </Button>
      </Box>
      <Grid container spacing={2}>
        {filteredStocks.map((stock, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StockCard stock={stock} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;

