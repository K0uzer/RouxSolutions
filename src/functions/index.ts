import { LOCAL_STORAGE_KEYS } from '../constants'
import { DataFromServerTypes } from '../types'

export const dataFromLocalStorage = (key: string): DataFromServerTypes[] =>
    JSON.parse(localStorage.getItem(key) as string)

export const loadSortedContentInLocalStorage = (
    typeSort: string,
    content: DataFromServerTypes[],
) => {
    const data = [...content]
    const sortContentOfCity = data.sort((a, b) =>
        a.address.city.localeCompare(b.address.city),
    )
    const sortContentOfCompany = data.sort((a, b) =>
        a.email.localeCompare(b.email),
    )
    switch (typeSort) {
        case 'По городу':
            return localStorage.setItem(
                LOCAL_STORAGE_KEYS.SORT_CONTENT,
                JSON.stringify(sortContentOfCity),
            )
        case 'По компании':
            return localStorage.setItem(
                LOCAL_STORAGE_KEYS.SORT_CONTENT,
                JSON.stringify(sortContentOfCompany),
            )
        default:
            break
    }
}

export function extractValues(obj) {
    let values = []
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            values = values.concat(extractValues(obj[key]))
        } else {
            values.push(obj[key])
        }
    }
    return values
}
