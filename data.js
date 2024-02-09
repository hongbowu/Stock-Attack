
// const apiKey = '64tFQ3PBgE2yTRqLdfw80pVoLt5AGIJN'; // Replace 'YOUR_API_KEY' with your actual API key from Polygon.io
require('dotenv').config()
// Function to fetch previous day's close price of Apple (AAPL) stock
async function fetchPreviousClosePrice() {
  try {
    const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${process.env.API_KEY}`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const previousClosePrice = data.results[0].c;
      // Assuming you have a function to save the price, you can call it here
      saveStockPrice(previousClosePrice);
    } else {
      console.error('Error fetching previous day\'s close price data.');
    }
  } catch (error) {
    console.error('Error fetching previous day\'s close price:', error);
  }
}


function saveStockPrice(price) {
    // You can implement your saving logic here, for example:
    // Saving to localStorage
   
    console.log('Previous day\'s close price:', price);
  }
  
  // Call the function to fetch and save the previous day's close price
  fetchPreviousClosePrice();