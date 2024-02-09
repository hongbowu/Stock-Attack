const { Schema, model } = require ('mongoose');

const stockSchema = new Schema ({


});

const Stock = model('Stock', stockSchema);

module.exports = Stock;
