import React from 'react'

type ButtonProps = {
    text: string
    styles?: string
    action?: () => {}
}

const Button = ({ text = '', styles = '', action }: ButtonProps) => {
    return (
        <button className={styles} onClick={action}>
            {text}
        </button>
    )
}

export default Button
