const typeDefs = `

    type Stock {
        _id: ID
        ticker: String
        name: String

    }

    type User {
        _id: ID
        name: String
        email: String
        stocks: [Stock]

    }




    type Query {
        stocks: Stock
        users: User
        user(id: ID!): User
    }

 

`;

module.exports = typeDefs;