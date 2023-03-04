import connect from './mongo/connectDB.js';
import dotenv from 'dotenv'
dotenv.config();
connect.connectDB();
import express from 'express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema/schema.js'
import resolvers from './resolver/resolver.js'
import mongoDataMethods from './mongo/mongoDataMethods.js'
import IsAuthDirective from './directives/isAuth.js'
import { makeExecutableSchema } from '@graphql-tools/schema';
import isAuth from './directives/isAuth.js'

let schema = makeExecutableSchema({typeDefs, resolvers});
schema = isAuth(schema,'isAuth');

const app = express();
const server = new ApolloServer({
    schema,
    // UNDER CONSTRUCED FOR AUTHORIZATION
    context: ({req},res) => ({req, mongoDataMethods}),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})
await server.start();
server.applyMiddleware({app});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("running at: localhost:" + PORT + "" + server.graphqlPath));