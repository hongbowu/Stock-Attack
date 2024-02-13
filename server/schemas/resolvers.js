const { Stock, User } = require('../models');


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



};

module.exports = resolvers;