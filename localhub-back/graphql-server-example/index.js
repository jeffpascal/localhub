const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

let books;

//Saving books to db
const { saveOne, findAll } = require("./mongo-db/mongo");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Listing {
    name: String
    author: String
    description: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    listings: [Listing]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    listings: () => {
      return findAll()
        .then(res => {
          return res;
        })
        .catch(err => {
          console.warn("Error occured on findAll");
        });
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

//With your server still running, visit http://localhost:4000 in your browser to open GraphQL Playground. (Apollo Server hosts GraphQL Playground automatically when you run it in development.)

// Query string in http://localhost:4000 for the above schema
// # Write your query or mutation here
// {
//   books {
//     title
//     author
//   }
// }
