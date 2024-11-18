import { BaseNode } from '../components/BaseNode';
import { FaTextHeight } from 'react-icons/fa';
import { useState } from 'react';
import Select from '../components/customInputs/select';
import Textarea from '../components/customInputs/textarea';

export const TransformNode = ({ id, data }) => {
    const [inputText, setInputText] = useState(data?.inputText || '');
    const [transformType, setTransformType] = useState(data?.transformType || 'Uppercase');

    const handleTransform = () => {
        switch (transformType) {
            case 'Uppercase':
                return inputText.toUpperCase();
            case 'Lowercase':
                return inputText.toLowerCase();
            case 'Title Case':
                return inputText
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ');
            default:
                return inputText;
        }
    };

    return (
        <BaseNode
            id={id}
            type="Transform"
            icon={<FaTextHeight />}
            handles={[
                { type: 'source', position: 'right', id: 'transform-output' }
            ]}
        >
            <Textarea label="Input Text" value={inputText} onChange={setInputText} />
            <Select
                label="Transform Type"
                options={['Uppercase', 'Lowercase', 'Title Case']}
                value={transformType}
                onChange={(e) => setTransformType(e.target.value)}
            />
            <div className="mt-2">
                <label className="block font-medium">Transformed Text:</label>
                <div className="border p-2 rounded">{handleTransform()}</div>
            </div>
        </BaseNode>
    );
};
