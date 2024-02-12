const Stock = require('../models');
const User = require('../models/User');

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