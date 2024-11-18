import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';
import { FaFileImport } from 'react-icons/fa';
import { useState } from 'react';
import Input from '../components/customInputs/input';
import Select from '../components/customInputs/select';

export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
    const [inputType, setInputType] = useState(data.inputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            icon={<FaFileImport />}
            type="Input"
            handles={[
                { type: 'source', position: Position.Right, id: 'value' }
            ]}
        >
            <div>
                <Input label='Name' value={currName} onChange={handleNameChange} />
                <Select label='Type' options={['Text', 'File']} value={inputType} onChange={handleTypeChange} />
            </div>
        </BaseNode>
    );
}