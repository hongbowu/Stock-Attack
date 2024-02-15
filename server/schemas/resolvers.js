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
      }

  },

  Mutation: {
    addStock: async (parent, { ticker, name }) => {
      return Stock.create({ ticker, name });
    },

    addStocktoPortfolio: async (_, { ticker, name, quantity}, context) => {
      if (context.user) {
        // is the ticker in the database
        let stock = await User.findOne({ ticker });
        let stockId; 
        if (stock) {
          // yes? get it's id
          stockId = stock._id;
        } else {
          // no? create it in the database and get it's id
          stock = await Stock.create({ ticker, name })
          stockId = stock._id
        }
        
        // make an object with stockId property and a quanity
        const newPortfolioStock = {
          stock: stockId,
          quantity
        }
        console.log(newPortfolioStock)
        
        // add the object to logged in user's list of stocks
        const user = await User.findByIdAndUpdate(context.user._id, 
          {
          $push: {
            stocks: newPortfolioStock
                  },
          }, {new: true}

        );
  
        return await user.populate({ path: "stocks", populate: "stock"});
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