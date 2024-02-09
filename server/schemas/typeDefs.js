const typeDefs = `

    type Stock {
        _id: ID
        name: String

    }


    type Query {
        stocks: Stock
    }

 

`;

module.exports = typeDefs;