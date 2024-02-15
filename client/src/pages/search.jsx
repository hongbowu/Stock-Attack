import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import SearchBar from '../components/searchbar';
import StockInfo from '../components/stock-info';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Typography, Container, CssBaseline, Paper } from '@mui/material';
import LogoutButton from '../components/logout';
// import logo from '../assets/sa-logo-white-sm.svg';

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

        // dummy function to simulate adding to portfolio
        const handleAddToPortfolio = (stock, quantity) => {
          console.log(`Adding ${quantity} of ${stock.symbol} to portfolio`);
          //make an API call to add the stock to the user portfolio
      };

      return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />
          <LogoutButton />
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
              {/* <img src={logo} alt="logo" /> */}
              <Typography component="h1" variant="h3">
                Search
              </Typography>
              <SearchBar /> {/* onSubmit={handleSubmit} */}
              <StockInfo stockData={dummyStockData} onAddToPortfolio={handleAddToPortfolio} />
            </Box>
          </Container>
          <Footer />
        </ThemeProvider>
      );    
    }

export default Search;