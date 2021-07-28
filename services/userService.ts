import {BaseCRUDService} from './base/BaseCRUDService'
import {User, UserAttributes} from '../models/User'

class UserService extends BaseCRUDService {

    create(body: UserAttributes): Promise<User> {
        const {username, name, email} = body
        return super.create({username, name, email})
    }

    update(id: string, body: UserAttributes): Promise<[number, User[]]> {
        const {username, name, email} = body
        return super.update(id, {username, name, email})
    }
}

export const userService = new UserService(User)