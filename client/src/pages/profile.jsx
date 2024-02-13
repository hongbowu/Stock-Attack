import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StockList from '../components/stock-list';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_STOCKS } from '../utils/queries';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ALL_STOCKS);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredStocks(data.stocks);
    }
  }, [data]);

  const handleFilter = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = data.stocks.filter((stock) =>
      stock.name.toLowerCase().includes(query) ||
      stock.ticker.toLowerCase().includes(query)
    );
    setFilteredStocks(filtered);
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        My Portfolio
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 4 }}>
        <TextField
          label="Search Stocks"
          variant="outlined"
          fullWidth
          onChange={handleFilter}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" sx={{ py: 2 }}>Search</Button>
      </Box>
      <StockList stocks={filteredStocks} />
    </Container>
  );
};

export default Profile;
