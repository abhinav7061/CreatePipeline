import React from 'react'

const Input = ({ value, onChange, required, label, className, type }) => {
    return (
        <label className={className}>
            <h3 className='text-gray-500 font-semibold text-sm block mb-1'>{label}:</h3>
            <input
                type={type || "text"}
                value={value}
                onChange={onChange}
                required={required}
                className='w-full mb-3 px-2 bg-transparent'
            />
        </label>
    )
}

export default Input