import React, { useCallback } from 'react'

const Textarea = ({ value, onChange, label, className, rows }) => {

    const adjustTextareaHeight = useCallback(
        (textarea) => {
            const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
            const maxHeight = lineHeight * 9;
            if (textarea.scrollHeight > maxHeight) {
                textarea.style.height = `${maxHeight}px`;
                textarea.style.overflowY = 'auto';
            } else {
                textarea.style.overflowY = 'hidden';
            }
        },
        [],
    )

    const handleTextChange = (e) => {
        onChange(e.target.value);
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        adjustTextareaHeight(textarea);
    };
    return (
        <label className={className}>
            <h3 className='text-gray-500 font-semibold text-sm block mb-1'>{label}:</h3>
            <textarea
                value={value}
                onChange={handleTextChange}
                rows={rows || 1}
                style={{
                    resize: 'none',
                    overflowY: 'hidden',
                    minHeight: `${(rows || 1) * 16}px`,
                    lineHeight: '16px',
                    width: '95%',
                    padding: '5px'
                }}
            />
        </label>
    )
}

export default Textarea