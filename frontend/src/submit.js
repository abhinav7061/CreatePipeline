// submit.js

import GradientBtn from "./components/GradientBtn";
import React, { useState, useRef } from 'react';
import { useStore } from './store';
import CustomPopup from "./components/customPopups";
import useOutsideClick from "./Hooks/useOutsideClick";

export const SubmitButton = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [data, setData] = useState(null)
    const { nodes, edges } = useStore();
    const popup = useRef();

    useOutsideClick(popup, () => setShowPopup(false));

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ nodes, edges }),
            });

            const { num_nodes, num_edges, is_dag } = await response.json();

            // Display an alert with the resul
            if (num_nodes, num_edges, is_dag) {
                setShowPopup(true);
                setData({ num_nodes, num_edges, is_dag });
            }
        } catch (error) {
            setData(null)
            console.error('Error submitting pipeline:', error);
            alert('Failed to submit pipeline. Check console for details.');
        }
    };

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <GradientBtn title='submit Pipeline' onClick={handleSubmit} />
            </div>
            {
                showPopup && data && <CustomPopup visibility={showPopup} onClose={() => setShowPopup(false)} ref={popup} >
                    <div ref={popup} className="p-7">
                        <h1 className="font-bold text-xl">Pipeline Analysis:</h1>
                        <ul className=" list-item list-disc ml-8 mt-2">
                            <li>Number of Nodes: {data.num_nodes}</li>
                            <li>Number of Edges: {data.num_edges}</li>
                            <li>Is Directed Acyclic Graph (DAG): {data.is_dag ? 'Yes' : 'No'}</li>
                        </ul>
                    </div>
                </CustomPopup >
            }
        </>
    );
};
