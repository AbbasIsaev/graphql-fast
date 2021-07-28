import {v4 as uuid_v4, validate as uuidValidate} from 'uuid'

function newGuid(): string {
    return uuid_v4()
}

function isGuid(str: string): string {
    return uuidValidate(str)
}

export {
    newGuid,
    isGuid
}