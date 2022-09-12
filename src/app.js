const express = require("express");
const bodyParser = require("body-parser");
// const client = require("./connection/postgres");
// const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const port = 4000;
// load schema and resolver

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolve");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  playground: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
  );
});
