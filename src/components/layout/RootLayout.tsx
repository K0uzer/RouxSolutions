import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

import store from '../../store'
import Sidebar from '../Sidebar'

import styles from './RootLayout.module.css'

const RootLayout = () => {
    return (
        <Provider store={store}>
            <div className={styles.wrapper}>
                <Sidebar />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </Provider>
    )
}

export default RootLayout
1
