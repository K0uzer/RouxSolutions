import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { DataFromServerTypes } from '../../types'
import { AppDispatch } from '../../store'
import { changeItemData } from '../../slices/contentSlice'

import styles from './Card.module.css'

type CardProps = {
    content: DataFromServerTypes
}

const Card = ({ content }: CardProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const changeItem = (itemData: DataFromServerTypes) =>
        dispatch(changeItemData(itemData))

    return (
        <li className={styles.listItem}>
            <div className={styles.textContainer}>
                <p className={styles.text}>ФИО:</p>
                <p className={styles.text}>{content.name}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text}>Город:</p>
                <p className={styles.text}>{content.address.city}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text}>Компания:</p>
                <p className={styles.text}>{content.company.name}</p>
            </div>
            <Link
                to="/profile"
                className={styles.button}
                onClick={() => changeItem(content)}
            >
                Подробнее
            </Link>
        </li>
    )
}

export default React.memo(Card)
