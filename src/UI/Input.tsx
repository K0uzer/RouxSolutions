import React from 'react'

type InputProps = {
    values?: string | number | readonly string[] | undefined
    className?: string
    placeholder?: string
    type: string
    disabled: boolean
    required: boolean
}

const Input = ({
    values,
    className,
    placeholder,
    type,
    disabled = true,
    required = true,
}: InputProps) => {
    return (
        <input
            value={values}
            className={className}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            required={required}
        ></input>
    )
}

export default Input
