import * as Sequelize from 'sequelize'
import {DataTypes, Model, Optional} from 'sequelize'

export interface userAttributes {
    id?: string;
    username?: string;
    name?: string;
    email?: string;
}

export type userPk = 'id';
export type userId = user[userPk];
export type userCreationAttributes = Optional<userAttributes, userPk>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
    id?: string
    username?: string
    name?: string
    email?: string


    static initModel(sequelize: Sequelize.Sequelize): typeof user {
        user.init({
            id: {
                type: DataTypes.TEXT,
                allowNull: true,
                primaryKey: true,
                unique: true
            },
            username: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            email: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'user',
            timestamps: false,
            indexes: [
                {
                    name: 'sqlite_autoindex_user_1',
                    unique: true,
                    fields: [
                        {name: 'id'}
                    ]
                }
            ]
        })
        return user
    }
}
