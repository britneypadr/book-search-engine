const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Add auth context here
  },
});

await server.start();
server.applyMiddleware({ app });