import React from 'react';
import logo from '../assets/sa-logo-white-sm.svg';
import SearchBar from '../components/searchbar';
import StockInfo from '../components/stock-info';
import { Box, Button, Typography, Container, CssBaseline, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ADD_STOCK_TO_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const Search = () => {
      // dummy stock data
      const dummyStockData = {
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        prevClosePrice: 146.92,
        currentPrice: 149.64
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // const data = new FormData(event.currentTarget);
    // };
    const [addStockToUser, { data: newStockData}] = useMutation(ADD_STOCK_TO_USER);
  
    
    const clickHandler = async (ticker, name, quantity) => {
      console.log("Adding a stock")
    try {
      await addStockToUser({ variables: { ticker, name, quantity } });
      console.log(newStockData)
      // Optionally, you can handle success here
    } catch (error) {
      // Handle errors if needed
      console.error('Error adding stock to user:', error);
    }
  }
        // dummy function to simulate adding to portfolio
        const handleAddToPortfolio = (stock, quantity) => {
          console.log(`Adding ${quantity} of ${stock.symbol} to portfolio`);
          //make an API call to add the stock to the user portfolio
      };

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container component="main" maxWidth="xs" sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          marginTop: '-64px',
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="logo" />
            <Typography component="h1" variant="h3">
              Search
            </Typography>
            <SearchBar /> {/* onSubmit={handleSubmit} */}
            <StockInfo stockData={dummyStockData} onAddToPortfolio={clickHandler} />
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 5 }}

            >
              <img src={logo} alt="logo" />
              <Typography component="h1" variant="h3">
                Search
              </Typography>
              <SearchBar />
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 5 }}
              >
                {'Copyright © '}
                Stock Attack 
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Typography>
          </Box>
        </Container>
    </ThemeProvider>
  );    
}

export default Search;