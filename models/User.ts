import * as Sequelize from 'sequelize'
import {DataTypes, Model, Optional} from 'sequelize'

export interface UserAttributes {
    id?: string;
    username?: string;
    name?: string;
    email?: string;
}

export type UserPk = 'id';
export type UserId = User[UserPk];
export type UserCreationAttributes = Optional<UserAttributes, UserPk>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id?: string
    username?: string
    name?: string
    email?: string


    static initModel(sequelize: Sequelize.Sequelize): typeof User {
        User.init({
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
        return User
    }
}
