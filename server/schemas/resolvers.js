const { Stock, User } = require('../models');
const fetchStockData = require('../utils/stockapi');


const resolvers = {

  Query: {
    
      users: async () => {
        return await User
          .find({})
          .populate('stocks');
      },

      stocks: async () => {
        return await Stock 
          .find({});

      },   


      user: async (parent, { id }) => {
        return await User 
          .findOne({_id: id })
          .populate('stocks');
      },

      getStockAPIData: async(parent, {symbol}) => {
        console.log("The symbol", symbol)
        return await fetchStockData(symbol)
      }

  },

  Mutation: {
    addStock: async (parent, { ticker, name }) => {
      return Stock.create({ ticker, name });
    },

    deleteStock: async (parent, { ticker }) => {
      return Stock.findOneAndDelete({ ticker: ticker });
    },

    addUser: async (parent, { name, email }) => {
      return User.create({ name, email });
    }
  }



};

module.exports = resolvers;