const typeDefs = `

    type User {
        _id: ID
        name: String
        email: String
        password: String
        stocks: [Stock]

    }


    type Stock {
        _id: ID
        ticker: String
        name: String

    }

    type Auth {
        token: ID!
        user: User
        
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
    addStocktoPortfolio(ticker: String!, name: String!, quantity: Float): User
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
   }
 

`;

module.exports = typeDefs;
