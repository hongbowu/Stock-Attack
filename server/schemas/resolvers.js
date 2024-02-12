const { Stock, User } = require('../models');


const resolvers = {

  Query: {

      stocks: async () => {
        return await Stock 
          .find({});

      },   

      users: async () => {
        return await User
          .find({})
          .populate('stocks');
      },

      user: async (parent, { id }) => {
        return await User 
          .findOne({_id: id })
          .populate('stocks');
      }

  },



};

module.exports = resolvers;