const db = require('../config/connection');
const { User, Stock } = require('../models');
const  userSeeds = require('./userSeeds.json');
const stockSeeds = require('./stockSeeds.json')
const cleanDB = require('./cleanDB')

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Stock', 'stocks');

    await User.create(userSeeds);
    await Stock.create(stockSeeds);

    console.log('seeding complete');
    process.exit(0);

  }
  catch (err) {
    throw err;
  }

});