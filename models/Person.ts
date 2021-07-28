import * as Sequelize from 'sequelize'
import {DataTypes, Model, Optional} from 'sequelize'

export interface PersonAttributes {
    name?: string;
    id?: string;
}

export type PersonPk = 'id';
export type PersonId = Person[PersonPk];
export type PersonCreationAttributes = Optional<PersonAttributes, PersonPk>;

export class Person extends Model<PersonAttributes, PersonCreationAttributes> implements PersonAttributes {
    name?: string
    id?: string


    static initModel(sequelize: Sequelize.Sequelize): typeof Person {
        Person.init({
            name: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            id: {
                type: DataTypes.TEXT,
                allowNull: true,
                primaryKey: true,
                unique: true
            }
        }, {
            sequelize,
            tableName: 'person',
            timestamps: false,
            indexes: [
                {
                    name: 'sqlite_autoindex_person_1',
                    unique: true,
                    fields: [
                        {name: 'id'}
                    ]
                }
            ]
        })
        return Person
    }
}
