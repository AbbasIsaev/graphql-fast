import {IResolvers} from 'graphql-tools'

import {
    MutationCreatePersonArgs,
    MutationDestroyPersonArgs,
    MutationUpdatePersonArgs,
    Person,
    QueryPersonByIdArgs
} from '../generated/types'
import {PersonAttributes} from '../../models/Person'
import {personService as service} from '../../services'

const persons = (): Promise<Person[]> => {
    return <Promise<Person[]>>service.getAll()
}

const personById = (_: void, {id}: QueryPersonByIdArgs): Promise<Person | null> => {
    return <Promise<Person>>service.getById(id)
}

const createPerson = (_: void, {person}: MutationCreatePersonArgs): Promise<Person> => {
    return <Promise<Person>>service.create(<PersonAttributes>person)
}

const updatePerson = async (_: void, {person}: MutationUpdatePersonArgs): Promise<Person | null> => {
    const {id} = person
    await service.update(id, <PersonAttributes>person)
    return <Person | null>await service.getById(id)
}

const destroyPerson = (_: void, {id}: MutationDestroyPersonArgs): Promise<number> => {
    return service.destroy(id)
}

export const resolvers: IResolvers = {
    Query: {
        persons,
        personById
    },
    Mutation: {
        createPerson,
        updatePerson,
        destroyPerson
    }
}