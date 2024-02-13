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

    type Auth {
        token: ID!
        user: User
    }



    type Query {
        stocks: [Stock]
        users: [User]
        user(id: ID!): User
    }


   type Mutation {

    addStock(ticker: String! name: String!): Stock
    deleteStock(ticker: String!): Stock

    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
   }
 

`;

module.exports = typeDefs;
