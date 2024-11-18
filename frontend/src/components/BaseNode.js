import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { useStore } from "../store";
import { FaTimes } from 'react-icons/fa';

export const BaseNode = ({ id, type, icon, handles, children, className }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleConnectStart = () => setIsConnecting(true);
    const handleConnectEnd = () => setIsConnecting(false);
    const deleteNode = useStore(state => state.deleteNode);

    const handleDelete = () => {
        deleteNode(id);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`border border-gray-500 rounded-md ${isConnecting
                ? 'bg-green-50/80' : 'bg-white'} ${isHovered
                    ? 'shadow-[0_0px_0px_5px_rgba(0,0,255,0.5)] border-gray-400' : 'shadow-[0_0px_2px_2px_rgba(0,0,255,0.5)]'} 
                        transition-shadow duration-300 h-auto p-3 w-72 ${className}`
            }
        >
            {
                handles.map((handle, index) => (
                    <Handle
                        key={index}
                        type={handle.type}
                        position={handle.position}
                        id={`${id}-${handle.id}`}
                        style={{
                            ...handle.style,
                            backgroundColor: 'white',
                            border: '1px solid gray',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            transform: handle.position === 'left'
                                ? 'translate(-30%, -50%)'
                                : handle.position === 'right'
                                    ? 'translate(30%, -50%)'
                                    : handle.position === 'top'
                                        ? 'translate(-50%, -30%)'
                                        : 'translate(-50%, 30%)'
                        }}

                        className='hover:shadow-[0_0px_0px_5px_rgba(0,0,255,0.5)]'
                        onMouseDown={handleConnectStart}
                        onMouseUp={handleConnectEnd}
                    />
                ))
            }
            <div className={`flex justify-between items-center mb-3 ${isHovered ? 'text-[rgba(0,0,255,0.5)]' : 'text-gray-500'}`}>
                <span className='flex items-center gap-2 font-semibold text-lg'><span>{icon}</span>{type}</span>
                <button
                    className="text-red-500"
                    onClick={handleDelete}
                    title="Delete Node"
                >
                    <FaTimes />
                </button>
            </div>
            <div className='text-sm'>{children}</div>
        </div >
    );
};
