import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from './Card'
import { fetchData } from '../../slices/contentSlice'
import { LOCAL_STORAGE_KEYS } from '../../constants'
import { dataFromLocalStorage } from '../../functions'

import { AppDispatch, RootState } from '../../store'
import { DataFromServerTypes } from '../../types'

import styles from './CardList.module.css'

const CardList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const content = useSelector((state: RootState) => state.content.data)
    const status = useSelector((state: RootState) => state.content.status)
    const contentSorted = dataFromLocalStorage(LOCAL_STORAGE_KEYS.CONTENT)

    const displayedContent = contentSorted ?? content

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return (
        <>
            <h1 className={styles.title}>Список пользователей</h1>
            {status === 'loading' ? (
                <p>Загрузка...</p>
            ) : (
                <>
                    <ul className={styles.list}>
                        {displayedContent.length ? (
                            displayedContent.map(
                                (
                                    item: DataFromServerTypes,
                                    index: React.Key,
                                ) => <Card key={index} content={item} />,
                            )
                        ) : (
                            <p>Список найденных пользователей пуст</p>
                        )}
                    </ul>
                    <p className={styles.countUsers}>
                        Найдено {content.length} пользователей
                    </p>
                </>
            )}
        </>
    )
}

export default CardList
