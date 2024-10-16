import React from 'react'

type ButtonProps = {
    type?: string
    text?: string
    styles?: string
    action?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ type, text, styles, action }: ButtonProps) => {
    return (
        <button className={styles} onClick={action}>
            {text}
        </button>
    )
}

export default Button
