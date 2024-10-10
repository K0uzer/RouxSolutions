import React, {
    SetStateAction,
    useEffect,
    useLayoutEffect,
    useState,
} from 'react'

import { LOCAL_STORAGE_KEYS } from '../../constants'
import getDataFromServer from '../../api'
import { dataFromLocalStorage } from '../../functions'

import { DataFromServerTypes } from '../../types'

import styles from './CardList.module.css'

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
                    <li key={index} className={styles.listItem}>
                        <div className={styles.textContainer}>
                            <p className={styles.text}>ФИО: </p>
                            <p className={styles.text}>{item.name}</p>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.text}>Город: </p>
                            <p className={styles.text}>{item.address.city}</p>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.text}>Компания: </p>
                            <p className={styles.text}>{item.company.name}</p>
                        </div>
                        <button className={styles.button}>Подробнее</button>
                    </li>
                ))}
            </ul>
            <p className={styles.countUsers}>
                Найдено {countUsers} пользователей
            </p>
        </>
    )
}

export default CardList
