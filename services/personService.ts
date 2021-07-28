import {BaseCRUDService} from './base/BaseCRUDService'
import {Person, PersonAttributes} from '../models/Person'

class PersonService extends BaseCRUDService {

    create(body: PersonAttributes): Promise<Person> {
        const {name} = body
        return super.create({name})
    }

    update(id: string, body: PersonAttributes): Promise<[number, Person[]]> {
        const {name} = body
        return super.update(id, {name})
    }
}

export const personService = new PersonService(Person)