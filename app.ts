import express from 'express'
import {ApolloServer} from 'apollo-server-express'

import {schema} from './graphql/schema'

const app = express()

const apolloServer = new ApolloServer({schema})

;(async () => {
    await apolloServer.start()
    apolloServer.applyMiddleware({app, path: '/graphql'})
})()

const {graphqlPath} = apolloServer

export {
    app,
    graphqlPath
}