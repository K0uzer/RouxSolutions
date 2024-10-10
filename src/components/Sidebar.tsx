import React from 'react'

import Button from '../UI/Button'
import { getSortedContent } from '../functions'
import { TYPES_SORT_CONTENT } from '../constants'
import getDataFromServer from '../api'

import styles from './Sidebar.module.css'

getDataFromServer()
const Sidebar = () => {
    return (
        <section>
            <h2>Сортировка</h2>
            <div>
                <Button
                    action={() => getSortedContent(TYPES_SORT_CONTENT.COMPANY)}
                    styles={styles.button}
                >
                    По городу
                </Button>
                <Button
                    action={() => getSortedContent(TYPES_SORT_CONTENT.CITY)}
                    styles={styles.button}
                >
                    По компании
                </Button>
            </div>
        </section>
    )
}

export default Sidebar
