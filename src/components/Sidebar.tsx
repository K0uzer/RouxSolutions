import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../UI/Button'
import { LOCAL_STORAGE_KEYS, TYPES_SORT_CONTENT } from '../constants'
import {
    dataFromLocalStorage,
    loadSortedContentInLocalStorage,
} from '../functions'
import { sortContent } from '../slices/contentSlice'
import { AppDispatch, RootState } from '../store'
import { DataFromServerTypes } from '../types'

import styles from './Sidebar.module.css'

const Sidebar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const content = useSelector((state: RootState) => state.content.data)

    const getSortedContent = (type: string, data: DataFromServerTypes[]) => {
        loadSortedContentInLocalStorage(type, data)

        const sortedData = dataFromLocalStorage(LOCAL_STORAGE_KEYS.SORT_CONTENT)

        dispatch(sortContent(sortedData))
    }

    return (
        <section className={styles.sidebar}>
            <h2>Сортировка</h2>
            <div className={styles.buttonWrapper}>
                <Button
                    action={() =>
                        getSortedContent(TYPES_SORT_CONTENT.CITY, content)
                    }
                    styles={styles.button}
                    text="По городу"
                />
                <Button
                    action={() =>
                        getSortedContent(TYPES_SORT_CONTENT.COMPANY, content)
                    }
                    styles={styles.button}
                    text="По компании"
                />
            </div>
        </section>
    )
}

export default Sidebar
