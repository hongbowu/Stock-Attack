// REQUIREMENTS/ DEPENDENCIES______________________________________
// REQUIREMENTS/ DEPENDENCIES_________________________
require('dotenv').config({ path: "../.env"})

const express = require('express');
  const { ApolloServer } = require('@apollo/server');
  const { expressMiddleware } = require('@apollo/server/express4');
  const path = require('path');
  const { authMiddleware } = require('./utils/auth');


// SCHEMAS AND CONNECTIONS________________________________________
  const { typeDefs, resolvers } = require('./schemas');
  const db = require('./config/connection');


// APP/PORT/SERVER PAS____________________________________________  
  const PORT = process.env.PORT || 3001;
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  
// FUNCTION TO START APOLLO SERVER WIHIN EXPRESSJS _______________  
  const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
      
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }

    app.use('/graphql', expressMiddleware(server, {
      context: authMiddleware
    }));

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  };


// START SERVER __________________________________________________  
  startApolloServer();
  