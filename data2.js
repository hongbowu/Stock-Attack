require('dotenv').config()
 // Replace 'YOUR_API_KEY' with your actual API key from Polygon.io

// Function to fetch previous day's close price, current stock price, ticker symbol, and company name of Apple (AAPL) stock
async function fetchStockData() {
  try {
    // Fetch previous day's close price and current stock price
    const prevCloseResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${process.env.API_KEY}`);
    const prevCloseData = await prevCloseResponse.json();
    const currentPriceResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/${getCurrentDate()}/${getCurrentDate()}?apiKey=${process.env.API_KEY}`);
    const currentPriceData = await currentPriceResponse.json();

    // Fetch ticker symbol and company name
    const infoResponse = await fetch(`https://api.polygon.io/v1/meta/symbols/AAPL/company?apiKey=${process.env.API_KEY}`);
    const infoData = await infoResponse.json();

    const prevClosePrice = prevCloseData.results && prevCloseData.results.length > 0 ? prevCloseData.results[0].c : null;
    const currentPrice = currentPriceData.results && currentPriceData.results.length > 0 ? currentPriceData.results[0].c : null;
    const symbol = infoData.symbol || null;
    const companyName = infoData.name || null;

    const stockData = {
        symbol,
        companyName,
        prevClosePrice,
        currentPrice
      };
  
      // Assuming you have a function to handle the stock data, you can call it here
      handleStockData(stockData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  }
  
  // Function to get current date in the format YYYY-MM-DD
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = now.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }
  
 
  