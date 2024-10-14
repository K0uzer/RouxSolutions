import React from 'react'
import { Link } from 'react-router-dom'

import { DataFromServerTypes } from '../../types'

import styles from './Card.module.css'

type CardProps = {
    content: DataFromServerTypes
}

const Card = ({ content }: CardProps) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.textContainer}>
                <p className={styles.text}>ФИО: </p>
                <p className={styles.text}>{content.name}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text}>Город: </p>
                <p className={styles.text}>{content.address.city}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text}>Компания: </p>
                <p className={styles.text}>{content.company.name}</p>
            </div>
            <Link to="/profile" className={styles.button} onClick={() => {}}>
                Подробнее
            </Link>
        </li>
    )
}

export default Card
