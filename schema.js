const { sql } = require("graphql-tag");

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

module.exports = typeDefs;