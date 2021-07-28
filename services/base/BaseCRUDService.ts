import {TModels} from '../../models'
import {IBaseCRUDService, valueOf} from '../types/types'
import {newGuid} from '../../graphql/utils/utils'

export class BaseCRUDService implements IBaseCRUDService {
    private readonly _model: valueOf<TModels>

    constructor(model: valueOf<TModels>) {
        this._model = model
    }

    get model(): valueOf<TModels> {
        return this._model
    }

    getAll(): Promise<any[]> {
        return this._model.findAll()
    }

    getById(id: string): Promise<null | any> {
        return this._model.findOne({
            where: {id}
        })
    }

    create(body: {}): Promise<any> {
        return this.model.create({
            id: newGuid(),
            ...body
        })
    }

    update(id: string, body: {}): Promise<[number, any]> {
        return this.model.update(body, {
            where: {id}
        })
    }

    destroy(id: string): Promise<number> {
        return this._model.destroy({
            where: {id}
        })
    }
}