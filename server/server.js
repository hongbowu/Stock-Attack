// REQUIREMENTS/ DEPENDENCIES_________________________
const express = require('express');
  const { ApolloServer } = require('@apollo/server');
  const { expressMiddleware } = require('@apollo/server/express4');
  const path = require('path');

// SCHEMAS AND CONNECTIONS
  const { typeDefs, resolvers } = require('./schemas');
  const db = require('./config/connection');