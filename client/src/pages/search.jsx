import React, { useState } from 'react';
import logo from '../assets/sa-logo-white-sm.svg';
import Header from "../components/header";
import Footer from "../components/footer";
import SearchBar from '../components/searchbar';
import StockInfo from '../components/stock-info';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ADD_STOCK_TO_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { Box, Button, Typography, Container, CssBaseline, Paper } from '@mui/material';
// import logo from '../assets/sa-logo-white-sm.svg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const Search = () => {

  const [ stockSearchResult, setStockSearchResult ] = useState({})
      // dummy stock data
    //   const dummyStockData = {
    //     symbol: 'AAPL',
    //     companyName: 'Apple Inc.',
    //     prevClosePrice: 146.92,
    //     currentPrice: 149.64
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // const data = new FormData(event.currentTarget);
    // };
    const [addStockToUser, { data: newStockData}] = useMutation(ADD_STOCK_TO_USER);
  
    
    const clickHandler = async (ticker, name, quantity) => {
      console.log("Adding a stock")
    try {
      await addStockToUser({ variables: { ticker, name, quantity: Number(quantity) } });
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
        <Header />
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
            <Typography component="h1" variant="h3">
              Search
            </Typography>
            <SearchBar setStockSearchResult={setStockSearchResult}/> {/* onSubmit={handleSubmit} */}
            <StockInfo stockData={stockSearchResult} onAddToPortfolio={clickHandler} />
            
            </Box>
          </Container>
          <Footer />
        </ThemeProvider>
      );    
    }

export default Search;