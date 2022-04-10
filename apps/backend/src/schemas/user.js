const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    email: String!
  }
`;

module.exports = typeDefs;
