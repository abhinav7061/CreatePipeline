import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';
import { FaFileExport } from 'react-icons/fa';
import { useState } from 'react';
import Input from '../components/customInputs/input';
import Select from '../components/customInputs/select';

export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
    const [outputType, setOutputType] = useState(data.outputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setOutputType(e.target.value);
    };
    return (
        <BaseNode
            id={id}
            data={data}
            icon={<FaFileExport />}
            type="Output"
            handles={[
                { type: 'target', position: Position.Left, id: 'value' }
            ]}
        >
            <div>
                <Input label='Name' value={currName} onChange={handleNameChange} />
                <Select label='Type' options={['Text', 'File']} value={outputType} onChange={handleTypeChange} />
            </div>
        </BaseNode>
    );
}