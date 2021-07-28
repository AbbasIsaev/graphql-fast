export interface ISimpleCRUDService {
    getAll(): any

    getById(id: string): any

    create(body: any): any

    update(id: string, body: any): any

    destroy(id: string): any
}