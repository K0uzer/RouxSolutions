import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '@reduxjs/toolkit/query'

import Card from './Card'
import { loadData } from '../../slices/contentSlice'
import { DataFromServerTypes } from '../../types'

import styles from './CardList.module.css'
import getDataFromServer from '../../api'

const CardList = () => {
    const dispatch = useDispatch()
    const content = useSelector((state) => state.content.data)
    useLayoutEffect(
        () => getDataFromServer().then((data) => dispatch(loadData(data))),
        [],
    )
    console.log(content)
    return (
        <>
            {content ? (
                <>
                    <h1 className={styles.preview}>Список пользователей</h1>
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
            ) : (
                <p>Загрузка...</p>
            )}
        </>
    )
}

export default CardList
function loadData(
    dispatch: unknown,
    getDataFromServer: () => Promise<void>,
): any {
    throw new Error('Function not implemented.')
}
