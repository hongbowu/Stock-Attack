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





    type Query {
        stocks: Stock
        users: User
        user(id: ID!): User
    }

 

`;

module.exports = typeDefs;