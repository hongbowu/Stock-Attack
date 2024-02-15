const { Stock, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
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
      },

      me: async (parent, args, context) => {

        const user = await User.findById(context.user._id).populate({
          path: 'stocks.stock'
        });
      
        return user;
      },

      getPrices: async (parent, args, context) => {
        const user = await User.findById(context.user._id).populate({
          path: 'stocks.stock'
        });

        const stocks = user.stocks;
        const prices = {};
        for (let i = 0; i < stocks.length; i++) {
          const stock = stocks[i];
          const ticker = stock.stock.ticker;
          if (!prices[ticker]) {
            const stockData = await fetchStockData(ticker);
            prices[ticker] = stockData.currentPrice;
          }
        }

        console.log('prices', prices);

        return JSON.stringify(prices);
      },

  },

  Mutation: {
    addStock: async (parent, { ticker, name }) => {
      return Stock.create({ ticker, name });
    },

    addStocktoPortfolio: async (_, { ticker, name, quantity}, context) => {
      try {
        if (context.user) {
        // is the ticker in the database
        let stock = await Stock.findOne({ ticker });
        let stockId; 
        if (stock) {
          // yes? get it's id
          stockId = stock._id;
        } else {
          // no? create it in the database and get it's id
          stock = await Stock.create({ ticker, name })
          stockId = stock._id
        }

        // TO DO: get the user object 
        let user = await User.findById(context.user._id).populate({ path: "stocks", populate: "stock"});

        
        // is the stock in the users stocks array?
        console.log("user stocks", user.stocks)
        console.log(stockId)
        const stockFound = user.stocks.filter(stock => stock.stock?._id.equals(stockId)).length > 0;
    
        console.log("Stock found?", stockFound)
        if (stockFound) {
          // // const updatedStocks = user.stocks.toJSON().map(stock => {
          // //   const updatedStock = { ...stock }
          // //   console.log(updatedStock)
          // //   if (updatedStock.stock.ticker === ticker) {
          // //     updatedStock.quantity = stock.quantity + quantity
          // //   }
            
          // //   return updatedStock;
          // // })
          // // console.log("updated stocks", updatedStocks)
          // // //Find the user 
          // // await user.updateOne({$set: {stocks: updatedStocks}})
          // const updatedUser = await User.findOneAndUpdate({ _id: context.user._id, 'stocks.stock._id': stockId}, {
          //   $set: {
          //     "stocks.$.quantity": 57
          //   }
          // }).populate({path: "stocks", populate: "stock"})
          // return user.populate({path: "stocks", populate: "stock"})
        } else {
          const newPortfolioStock = {
            stock: stockId,
            quantity
          }
          await user.updateOne({$push: {stocks: newPortfolioStock}})
        }

        user.save()
        console.log(user.stocks)

        console.log(await user.populate({path: 'stocks', populate: 'stock'}))
        return await User.findById(context.user._id).populate({path: 'stocks', populate: 'stock'})

        // // Check if the stock is already in the user's portfolio
        // let portfolioStock = user.stocks.find(stock => stock.stock.equals(stock._id));

        // if (portfolioStock) {
        //   // If the stock exists in the portfolio, update the quantity
        //   portfolioStock.quantity += quantity;
        // } else {
        //   // If the stock doesn't exist in the portfolio, add it
        //   user.stocks.push({ stock: stock._id, quantity });
        // }
        // //save user object
        // user = await user.save();

        // //populate stock field 
        
    
        
        
        // console.error('Error adding stock to portfolio:', error);
        // // make an object with stockId property and a quanity
        // const newPortfolioStock = {
        //   stock: stockId,
        //   quantity
        // }
        // console.log(newPortfolioStock)
        


        // add the object to logged in user's list of stocks
        // const user = await User.findByIdAndUpdate(context.user._id, 
        //   {
        //   $push: {
        //     stocks: newPortfolioStock
        //           },
        //   }, {new: true}

        // );
  
      }
    } catch (error) {
      console.error(error)
    }
  },

    deleteStock: async (parent, { ticker }) => {
      return Stock.findOneAndDelete({ ticker: ticker });
    },

    //JWT
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      // return { token, profile } ////generating error in graphql to add user, no profile
      return { token, user } // changed to this one instead

      
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError
      }

      const token = signToken(user);
      return { token, user };


    }

  }



};

module.exports = resolvers;