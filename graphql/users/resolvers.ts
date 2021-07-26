import {IResolvers} from 'graphql-tools'

import {Authenticate, MutationRegisterArgs, QueryLoginArgs} from '../generated/types'

const login = (_: void, args: QueryLoginArgs): Authenticate => {
    return {
        token: 'token login'
    }
}

const register = (_: void, args: MutationRegisterArgs): Authenticate => {
    return {
        token: 'token register'
    }
}

export const resolvers: IResolvers = {
    Query: {
        login
    },
    Mutation: {
        register
    }
}