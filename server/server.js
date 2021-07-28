// Express
const express = require('express');
// Apollo
const { ApolloServer } = require('apollo-server-express');

// typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

// database connection
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// integrate Apollo w/ express as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Congrats Bud, looks like the API server is running on port ${PORT}!`);
    console.log(`Now you can use GraphQL at http://localhost:${PORT}${server.graphqlPath}, bro!`);
  });
});
