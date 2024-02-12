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

    }




    type Query {
        stocks: Stock
        users: User
    }

 

`;

module.exports = typeDefs;