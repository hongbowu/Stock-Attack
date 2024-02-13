const { Stock, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


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
      }

  },

  Mutation: {
    addStock: async (parent, { ticker, name }) => {
      return Stock.create({ ticker, name });
    },

    deleteStock: async (parent, { ticker }) => {
      return Stock.findOneAndDelete({ ticker: ticker });
    },

    //JWT
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, profile }
      
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