export type valueOf<T> = T[keyof T]

export interface IBaseCRUDService {
    getAll(): Promise<any[]>

    getById(id: string): Promise<any | null>

    create(body: any): Promise<any>

    update(id: string, body: any): Promise<[number, any]>

    destroy(id: string): Promise<number>
}