import { BaseNode } from '../components/BaseNode';
import { FaCalculator } from 'react-icons/fa';
import { useState } from 'react';
import Input from '../components/customInputs/input';
import Select from '../components/customInputs/select';

export const MathNode = ({ id, data }) => {
    const [num1, setNum1] = useState(data?.num1 || 0);
    const [num2, setNum2] = useState(data?.num2 || 0);
    const [operation, setOperation] = useState(data?.operation || 'Add');

    const calculateResult = () => {
        switch (operation) {
            case 'Add':
                return +num1 + +num2;
            case 'Subtract':
                return +num1 - +num2;
            case 'Multiply':
                return +num1 * +num2;
            case 'Divide':
                return num2 !== 0 ? +num1 / +num2 : 'Error';
            default:
                return 0;
        }
    };

    return (
        <BaseNode
            id={id}
            type="Math"
            icon={<FaCalculator />}
            handles={[
                { type: 'source', position: 'right', id: 'math-output' }
            ]}
        >
            <Input label="Number 1" type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <Input label="Number 2" type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <Select
                label="Operation"
                options={['Add', 'Subtract', 'Multiply', 'Divide']}
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
            />
            <div className="mt-2">
                <label className="block font-medium">Result:</label>
                <div className="border p-2 rounded">{calculateResult()}</div>
            </div>
        </BaseNode>
    );
};
