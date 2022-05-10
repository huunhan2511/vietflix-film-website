import connect from './mongo/connectDB.js';
import dotenv from 'dotenv'
dotenv.config();
connect.connectDB();
import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema/schema.js'
import resolvers from './resolver/resolver.js'
import mongoDataMethods from './mongo/mongoDataMethods.js'

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({mongoDataMethods})
})
await server.start();
server.applyMiddleware({app});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("running at: localhost:" + PORT + "" + server.graphqlPath));