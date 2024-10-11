import { LOCAL_STORAGE_KEYS } from "../constants"
import { DataFromServerTypes } from "../types"

export const dataFromLocalStorage: DataFromServerTypes[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.CONTENT) as string,
)