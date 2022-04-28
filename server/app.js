import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import typeDefs from './schemas/schemas.js'
import resolvers from './resolvers/resolvers.js'

const app = express()
const server = new ApolloServer({ typeDefs, resolvers });
await server.start()
server.applyMiddleware({app})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running at: localhost:" + PORT + ""+ server.graphqlPath));


// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });