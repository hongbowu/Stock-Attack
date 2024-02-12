const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    let modelExists = await models[modelName].db.db.listCollection({
      name: collectionName
    }).toArray()

    if (modelExist.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }

}
