import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../../UI/Button'
import Input from '../../UI/Input'
import { AppDispatch, RootState } from '../../store'
import { changeItemData } from '../../slices/contentSlice'
import { extractValues } from '../../functions'
import { INITIAL_ITEM_DATA } from '../../constants'

import styles from './Form.module.css'

const inputsArrayInfo = [
    {
        placeholder: 'Иван Иванов',
        type: 'text',
    },
    {
        placeholder: 'User name',
        type: 'text',
    },
    {
        placeholder: 'example@mail.com',
        type: 'email',
    },
    {
        placeholder: 'Улица пример',
        type: 'text',
    },
    {
        placeholder: 'Москва',
        type: 'text',
    },
    {
        placeholder: '12345',
        type: 'number',
    },
    {
        placeholder: '8-906-90-24',
        type: 'number',
    },
    {
        placeholder: 'www.example.com',
        type: 'text',
    },
]

const Form = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const content = useSelector((state: RootState) => state.content.itemData)
    const [isEdit, setIsEdit] = useState(true)

    const valuesOfContentObjects = extractValues(content)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsEdit(true)
        dispatch(changeItemData(INITIAL_ITEM_DATA))
        console.log('Данные улетели!', content)
        navigate('/')
    }

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
            <form
                className={styles.form}
                onSubmit={(event) => handleSubmit(event)}
            >
                {inputsArrayInfo.map((item, index) => (
                    <>
                        <Input
                            key={index}
                            values={valuesOfContentObjects[index]}
                            className={styles.input}
                            placeholder={item.placeholder}
                            type={item.type}
                            disabled={isEdit}
                            required
                        />
                    </>
                ))}
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
