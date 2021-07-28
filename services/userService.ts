import {user, userAttributes} from '../models/user'
import {newGuid} from '../graphql/utils/utils'
import {ISimpleCRUDService} from './types/types'

class UserService implements ISimpleCRUDService {
    private model = user

    getAll() {
        return this.model.findAll()
    }

    getById(id: string): Promise<user | null> {
        return this.model.findOne({
            where: {id}
        })
    }

    create(body: userAttributes): Promise<user> {
        const {username, name, email} = body
        return this.model.create({
            id: newGuid(),
            username, name, email
        })
    }

    update(id: string, body: userAttributes): Promise<[number, user[]]> {
        const {username, name, email} = body

        return this.model.update({
            username, name, email
        }, {
            where: {id}
        })
    }

    destroy(id: string): Promise<number> {
        return this.model.destroy({
            where: {id}
        })
    }
}

export const userService = new UserService()