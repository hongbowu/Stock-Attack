const { Schema, model } = require ('mongoose');

const stockSchema = new Schema({
  name: {
    type: String,
    required: true,

  },
  


});

const Stock = model('Stock', stockSchema);

module.exports = Stock;
