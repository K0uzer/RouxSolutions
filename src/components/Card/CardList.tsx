import React, { useEffect, useState } from 'react'

import getDataFromServer from '../../api'
import { dataFromLocalStorage } from '../../functions'

import styles from './CardList.module.css'
import Card from './Card'

const CardList = () => {
    const [content, setContent] = useState([])

    useEffect(
        () =>
            setContent(
                dataFromLocalStorage?.length
                    ? dataFromLocalStorage
                    : getDataFromServer,
            ),
        [],
    )
    console.log(content)

    return (
        <>
            <h1 className={styles.preview}>Список пользователей</h1>
            <ul className={styles.list}>
                {content.length ? (
                    content.map((item, index) => (
                        <Card key={index} content={item} />
                    ))
                ) : (
                    <p>Список найденных пользователей пуст</p>
                )}
            </ul>
            <p className={styles.countUsers}>
                Найдено {content.length} пользователей
            </p>
        </>
    )
}

export default CardList
