import type {Sequelize} from 'sequelize'
import type {userAttributes, userCreationAttributes} from './user'
import {user} from './user'

export {
    user
}

export type {
    userAttributes,
    userCreationAttributes
}

export function initModels(sequelize: Sequelize) {
    user.initModel(sequelize)


    return {
        user: user
    }
}
