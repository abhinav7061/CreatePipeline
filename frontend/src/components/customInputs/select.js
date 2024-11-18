import React from 'react'

const Select = ({ label, value, onChange, options, className }) => {
    return (
        <label className={className}>
            <h3 className='text-gray-500 font-semibold text-sm block mb-1'>{label}:</h3>
            <select value={value} onChange={onChange} className='w-full rounded-sm mb-3 px-2 bg-transparent'>
                {
                    options.map((option) => <option value={option} key={option}>{option}</option>)
                }
            </select>
        </label>
    )
}

export default Select