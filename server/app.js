import connect from './models/database.js';
import dotenv from 'dotenv'
dotenv.config();
connect();
import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import typeDefs from './grahpql/schemas/schema.js'
import mutation from './grahpql/resolvers/mutation.js'
import query from './grahpql/resolvers/query.js'
import episodeRoute from './routes/episode.route.js';

const resolvers = { Query: query, Mutation: mutation};
const app = express();
app.use(express.json());
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({app});


app.use('/episode', episodeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("[moviebe] running at: localhost:" + PORT + "" + server.graphqlPath));

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });