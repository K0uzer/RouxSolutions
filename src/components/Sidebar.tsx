import React from 'react'

import Button from '../UI/Button'

import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <section className={styles.sidebar}>
            <h2>Сортировка</h2>
            <div className={styles.buttonWrapper}>
                <Button
                    action={() => {}}
                    styles={styles.button}
                    text="По городу"
                />
                <Button
                    action={() => {}}
                    styles={styles.button}
                    text="По компании"
                />
            </div>
        </section>
    )
}

export default Sidebar
