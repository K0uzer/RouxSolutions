import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

import styles from './RootLayout.module.css'

const RootLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
1
