const Stock = require('../models');

const resolvers = {

  Query: {

      stocks: async () => {
        return await Stock 
          .find();
      }

  },





};

module.exports = resolvers;