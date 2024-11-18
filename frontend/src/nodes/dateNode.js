import { BaseNode } from '../components/BaseNode';
import { FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
import Input from '../components/customInputs/input';
import Select from '../components/customInputs/select';

export const DateNode = ({ id, data }) => {
    const [date, setDate] = useState(data?.date || new Date().toISOString().split('T')[0]);
    const [format, setFormat] = useState(data?.format || 'YYYY-MM-DD');

    const formatDate = () => {
        const options = format === 'MM/DD/YYYY'
            ? { month: '2-digit', day: '2-digit', year: 'numeric' }
            : { year: 'numeric', month: '2-digit', day: '2-digit' };

        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <BaseNode
            id={id}
            type="Date"
            icon={<FaCalendarAlt />}
            handles={[
                { type: 'source', position: 'right', id: 'date-output' }
            ]}
        >
            <Input label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <Select
                label="Format"
                options={['YYYY-MM-DD', 'MM/DD/YYYY']}
                value={format}
                onChange={(e) => setFormat(e.target.value)}
            />
            <div className="mt-2">
                <label className="block font-medium">Formatted Date:</label>
                <div className="border p-2 rounded">{formatDate()}</div>
            </div>
        </BaseNode>
    );
};
