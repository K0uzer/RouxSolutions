import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from './Card'
import { fetchData } from '../../slices/contentSlice'

import { DataFromServerTypes } from '../../types'
import { RootState } from '../../store'

import styles from './CardList.module.css'

const CardList: React.FC = () => {
    const dispatch = useDispatch()
    const content = useSelector((state: RootState) => state.content.data)
    const status = useSelector((state: RootState) => state.content.status)

    useEffect(() => {
        dispatch(fetchData()).then((action: any) => {
            if (fetchData.fulfilled.match(action)) {
                console.log('Данные успешно загружены:', action.payload)
            } else {
                console.error('Ошибка загрузки данных:', action.error.message)
            }
        })
    }, [dispatch])

    return (
        <>
            <h1 className={styles.title}>Список пользователей</h1>
            {status === 'loading' ? (
                <p>Загрузка...</p>
            ) : (
                <>
                    <ul className={styles.list}>
                        {content.length ? (
                            content.map(
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
