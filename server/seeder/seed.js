const db = require('../config/connection');
const { User, Stock } = require('../models');
const  userSeeds = require('./userSeeds.json');
const stockSeeds = require('./stockSeeds.json')

db.once('open', async () => {
  try {
    await User.create(userSeeds);
    await Stock.create(stockSeeds);

    console.log('seeding complete');
    process.exit(0);

  }
  catch (err) {
    throw err;
  }

});