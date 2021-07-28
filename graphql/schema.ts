import 'graphql-import-node'
import {GraphQLSchema} from 'graphql'
import {makeExecutableSchema} from 'graphql-tools'
import {merge} from 'lodash'

import * as userTypes from './users/types.graphql'
import * as personTypes from './persons/types.graphql'
import {resolvers as userResolvers} from './users/resolvers'
import {resolvers as personResolvers} from './persons/resolvers'

export const schema: GraphQLSchema = makeExecutableSchema({
    // Порядок следования typeDefs важен, для расширения типов
    typeDefs: [userTypes, personTypes],
    resolvers: merge(userResolvers, personResolvers)
})