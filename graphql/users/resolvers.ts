import {IResolvers} from 'graphql-tools'

import {
    MutationCreateUserArgs,
    MutationDestroyUserArgs,
    MutationUpdateUserArgs,
    QueryUserByIdArgs,
    User
} from '../generated/types'
import {userAttributes} from '../../models/user'
import {userService as service} from '../../services/userService'

const users = (): Promise<User[]> => {
    return <Promise<User[]>>service.getAll()
}

const userById = (_: void, {id}: QueryUserByIdArgs): Promise<User | null> => {
    return <Promise<User>>service.getById(id)
}

const createUser = (_: void, {user}: MutationCreateUserArgs): Promise<User> => {
    return <Promise<User>>service.create(<userAttributes>user)
}

const updateUser = async (_: void, {user}: MutationUpdateUserArgs): Promise<User | null> => {
    const {id} = user
    await service.update(id, <userAttributes>user)
    return <User | null>await service.getById(id)
}

const destroyUser = (_: void, {id}: MutationDestroyUserArgs): Promise<number> => {
    return service.destroy(id)
}

export const resolvers: IResolvers = {
    Query: {
        users,
        userById
    },
    Mutation: {
        createUser,
        updateUser,
        destroyUser
    }
}