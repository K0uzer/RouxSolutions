import React, { useState } from 'react'

import Button from '../../UI/Button'

import styles from './Form.module.css'

const Form = () => {
    const [isEdit, setIsEdit] = useState(true)

    return (
        <>
            <h1>Профиль пользователя</h1>
            {isEdit ? (
                <Button
                    text="Редактировать"
                    action={() => setIsEdit(false)}
                    styles={styles.button}
                />
            ) : (
                <Button
                    text="Сохранить"
                    action={() => setIsEdit(true)}
                    styles={styles.button}
                />
            )}
            <form className={styles.form}>
                <input
                    className={styles.input}
                    placeholder="1"
                    type="text"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="text"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="email"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="text"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="text"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="number"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="phone"
                    disabled={isEdit}
                    required
                />
                <input
                    className={styles.input}
                    placeholder="1"
                    type="url"
                    disabled={isEdit}
                    required
                />
                <textarea className={styles.textarea} disabled={isEdit} />
                <Button
                    type="submit"
                    text="Отправить"
                    styles={styles.button}
                    action={() => setIsEdit(true)}
                />
            </form>
        </>
    )
}

export default Form
