const { Stock, User } = require('../models');


const resolvers = {

  Query: {

      stocks: async () => {
        return await Stock 
          .find();
      },

      users: async () => {
        return User
          .find();
      }

  },





};

module.exports = resolvers;