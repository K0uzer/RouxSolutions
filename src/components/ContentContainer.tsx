import React from 'react'

import CardList from './Card/CardList'

import styles from './ContentContainer.module.css'

const ContentContainer = () => {
    return (
        <main className={styles.main}>
            <CardList />
        </main>
    )
}

export default ContentContainer
