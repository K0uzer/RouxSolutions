import React from 'react'

type InputProps = {
    values?: string | number | readonly string[] | undefined
    className?: string
    placeholder?: string
    type: string
    disabled: boolean
    onChange: React.ChangeEvent<HTMLInputElement>
    required: boolean
}

const Input = ({
    values,
    className,
    placeholder,
    type,
    disabled = true,
    onChange,
    required = true,
}: InputProps) => {
    return (
        <input
            value={values}
            className={className}
            placeholder={placeholder}
            type={type}
            onChange={() => {}}
            disabled={disabled}
            required={required}
        ></input>
    )
}

export default Input
