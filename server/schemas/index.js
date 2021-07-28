// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// create our typeDefs
const typeDefs = gql``;

// export the typeDefs
module.exports ={ typeDefs, resolvers };