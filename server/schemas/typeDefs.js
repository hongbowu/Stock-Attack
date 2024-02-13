const typeDefs = `

    type User {
        _id: ID
        name: String
        email: String
        stocks: [Stock]

    }


    type Stock {
        _id: ID
        ticker: String
        name: String

    }


    type APIStock {
        symbol: String
        companyName: String
        prevClosePrice: Float
        currentPrice: Float
    }



    type Query {
        stocks: [Stock]
        users: [User]
        user(id: ID!): User
        getStockAPIData(symbol: String!): APIStock 
    }


   type Mutation {

    addStock(ticker: String! name: String!): Stock
    deleteStock(ticker: String!): Stock
    addUser(name: String! email: String!): User
    
   }
 

`;

module.exports = typeDefs;
