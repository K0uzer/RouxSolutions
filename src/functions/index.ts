import { LOCAL_STORAGE_KEYS } from '../constants'
import { DataFromServerTypes } from '../types'

type GetSortedContentProps = {
    typeSort: string
    content: DataFromServerTypes[]
}

export const dataFromLocalStorage: DataFromServerTypes[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.CONTENT) as string,
)

export const getSortedContent = ({
    typeSort,
    content,
}: GetSortedContentProps) => {
    const data = [...content]
    switch (typeSort) {
        case 'По городу':
            return data.sort((a, b) =>
                a.address.city.localeCompare(b.address.city),
            )
        case 'По компании':
            return data.sort((a, b) =>
                a.company.name.localeCompare(b.company.name),
            )
        default:
            break
    }
}
