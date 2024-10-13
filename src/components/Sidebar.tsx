import React from 'react'

import Button from '../UI/Button'

import { dataFromLocalStorage, getSortedContent } from '../functions'
import { TYPES_SORT_CONTENT } from '../constants'

import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <section className={styles.sidebar}>
            <h2>Сортировка</h2>
            <div className={styles.buttonWrapper}>
                <Button
                    action={() =>
                        getSortedContent(
                            TYPES_SORT_CONTENT.CITY,
                            dataFromLocalStorage,
                        )
                    }
                    styles={styles.button}
                    text="По городу"
                />
                <Button
                    action={() =>
                        getSortedContent(
                            TYPES_SORT_CONTENT.COMPANY,
                            dataFromLocalStorage,
                        )
                    }
                    styles={styles.button}
                    text="По компании"
                />
            </div>
        </section>
    )
}

export default Sidebar
