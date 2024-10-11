import React from 'react'

import Button from '../../UI/Button'

import styles from './Form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" required />
            <input className={styles.input} type="text" required />
            <input className={styles.input} type="email" required />
            <input className={styles.input} type="text" required />
            <input className={styles.input} type="text" required />
            <input className={styles.input} type="number" required />
            <input className={styles.input} type="phone" required />
            <input className={styles.input} type="url" required />
            <textarea className={styles.textarea} />
            <Button type="submit" text="Отправить" styles={styles.button} />
        </form>
    )
}

export default Form
