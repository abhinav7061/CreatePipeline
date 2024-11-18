import React from 'react'

const GradientBtn = ({ title, onClick }) => {
    return (
        <div className="flex relative max-w-sm rounded-md group" onClick={onClick}>
            <div
                className="absolute animate-pulse -inset-0.5 group-hover:-inset-2 rounded-lg z-0  bg-gradient-to-tr from-purple-300 via-pink-300 to-blue-300 opacity-75 group-hover:blur"
            ></div>
            <button className="flex-1 font-bold text-base bg-white px-5 py-1 rounded-md z-10">{title}</button>
        </div>
    )
}

export default GradientBtn