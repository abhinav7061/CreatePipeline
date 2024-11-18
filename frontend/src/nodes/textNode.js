import { useState, useEffect, useCallback } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import Textarea from '../components/customInputs/textarea';
import { FaFileAlt } from 'react-icons/fa';

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [variables, setVariables] = useState([]);
    const updateNodeInternals = useUpdateNodeInternals();

    const extractVariables = (text) => {
        const variableRegex = /{{\s*(\w+)\s*}}/g;
        const variablesFound = [];
        let match;
        while ((match = variableRegex.exec(text)) !== null) {
            variablesFound.push(match[1]);
        }
        return variablesFound;
    };

    const getVariablesHandle = useCallback((variables) => variables.map((variable, index) => {
        updateNodeInternals(id);
        return {
            type: 'target',
            position: 'left',
            id: `${variable}`,
            style: {
                top: `${((index + 1) * 100) / (variables.length + 1)}%`,
            },
        }
    }), [id, updateNodeInternals]);

    useEffect(() => {
        const newVariables = extractVariables(currText);
        setVariables(newVariables);
        updateNodeInternals(id);
    }, [currText, id, updateNodeInternals]);

    return (
        <BaseNode
            id={id}
            type="Text"
            icon={<FaFileAlt />}
            handles={[
                { type: 'source', position: 'right', id: `${id}-output` },
                ...getVariablesHandle(variables),
            ]}
        >
            <Textarea label="Text" value={currText} onChange={setCurrText} />
        </BaseNode>
    );
};
