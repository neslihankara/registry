const { ApolloServer } = require('apollo-server');
const { Neo4jGraphQL } = require('@neo4j/graphql');
const neo4j = require('neo4j-driver');
const typeDefs = require('./schemas/user');

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

async function main() {
  const schema = await neoSchema.getSchema();

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
  });

  await server.listen(4000);

  console.log('Online');
}

main();

/*
https://neo4j.com/developer/graphql/
EXAMPLE TYPE DEFINITION WITH RELATIONS

const typeDefs = gql`
  type Movie {
    title: String!
    year: Int
    plot: String
    actors: [Person] @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
    movies: [Movie] @relationship(type: "ACTED_IN", direction: OUT)
  }
`;
 */
