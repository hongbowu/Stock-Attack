const { Schema, model } = require ('mongoose');

const stockSchema = new Schema({

  ticker: {
    type: String,
    required: true,

  },

  name: {
    type: String,
    // required: true,

  },

 

});

const Stock = model('Stock', stockSchema);

module.exports = Stock;
