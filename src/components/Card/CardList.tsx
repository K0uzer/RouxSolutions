import React, { useLayoutEffect, useState } from 'react'

import getDataFromServer from '../../api'
import { dataFromLocalStorage } from '../../functions'

import styles from './CardList.module.css'
import Card from './Card'

const CardList = () => {
    const [state, setContent] = useState(dataFromLocalStorage)
    const countUsers = dataFromLocalStorage.length

    useLayoutEffect(() => {
        if (!state.length) {
            setContent(getDataFromServer)
        }
    }, [state])

    return (
        <>
            <h1 className={styles.preview}>Список пользователей</h1>
            <ul className={styles.list}>
                {state.map((item, index) => (
                    <Card key={index} content={item} />
                ))}
            </ul>
            <p className={styles.countUsers}>
                Найдено {countUsers} пользователей
            </p>
        </>
    )
}

export default CardList
