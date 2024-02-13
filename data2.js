require('dotenv').config()


// Function to fetch previous day's close price, current stock price, ticker symbol, and company name of Apple (AAPL) stock
async function fetchStockData() {
  try {
    // Fetch previous day's close price and current stock price
    const prevCloseResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${process.env.API_KEY}`);
    const prevCloseData = await prevCloseResponse.json();
   

    // Fetch ticker symbol and company name
    const infoResponse = await fetch(`https://api.polygon.io/v1/meta/symbols/${symbol}/company?apiKey=${process.env.API_KEY}`);
    const infoData = await infoResponse.json();

    // Fetch additional data from Finnhub API
    const finnhubResponse = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.API_KEY2}`);
    const finnhubData = await finnhubResponse.json();


    const prevClosePrice = prevCloseData.results && prevCloseData.results.length > 0 ? prevCloseData.results[0].c : null;
   
    const symbol = infoData.symbol || null;
    const companyName = infoData.name || null;
    const currentPrice = finnhubData.c || null;

    const stockData = {
        symbol,
        companyName,
        prevClosePrice,
        currentPrice
      };
  
      handleStockData(stockData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  }
  

   // Function to handle the stock data
   function handleStockData(data) {
    console.log('Symbol:', data.symbol);
    console.log('Company Name:', data.companyName);
    console.log('Previous day\'s close price:', data.prevClosePrice);
    console.log('Current stock price:', data.currentPrice);
  }
  
  // Call the function to fetch and handle stock data
  fetchStockData();

  module.exports = fetchStockData;