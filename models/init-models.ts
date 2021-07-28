import type {Sequelize} from 'sequelize'
import type {PersonAttributes, PersonCreationAttributes} from './Person'
import {Person} from './Person'
import type {UserAttributes, UserCreationAttributes} from './User'
import {User} from './User'

export {
    Person,
    User
}

export type {
    PersonAttributes,
    PersonCreationAttributes,
    UserAttributes,
    UserCreationAttributes
}

export function initModels(sequelize: Sequelize) {
    Person.initModel(sequelize)
    User.initModel(sequelize)


    return {
        Person: Person,
        User: User
    }
}
