import 'graphql-import-node'
import {GraphQLSchema} from 'graphql'
import {makeExecutableSchema} from 'graphql-tools'
import {merge} from 'lodash'

import * as userTypes from './users/types.graphql'
import {resolvers as userResolvers} from './users/resolvers'

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [userTypes],
    resolvers: merge(userResolvers)
})