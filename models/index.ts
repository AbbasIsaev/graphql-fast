import {Sequelize} from 'sequelize'

import {initModels} from './init-models'

const DATABASE_URL = process.env.DATABASE_URL || ''

export const sequelize = new Sequelize(DATABASE_URL)
// import models into sequelize instance
export const models = initModels(sequelize)