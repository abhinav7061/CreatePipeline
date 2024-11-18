import { useState, useEffect } from 'react';
import { BaseNode } from '../components/BaseNode';
import Textarea from '../components/customInputs/textarea';
import { FaFileAlt } from 'react-icons/fa';

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [variables, setVariables] = useState([]);

    const extractVariables = (text) => {
        const variableRegex = /{{\s*(\w+)\s*}}/g;
        const variablesFound = [];
        let match;
        while ((match = variableRegex.exec(text)) !== null) {
            variablesFound.push(match[1]);
        }
        return variablesFound;
    };

    const getVariablesHandle = (variables) => variables.map((variable) => ({
        type: 'target',
        position: 'left',
        id: `var-${variable}`,
        style: {
            top: `${((variables.indexOf(variable) + 1) * 100) / (variables.length + 1)}%`
        }
    }));

    useEffect(() => {
        const newVariables = extractVariables(currText);
        setVariables(newVariables);
    }, [currText]);

    return (
        <BaseNode
            id={id}
            type="Text"
            icon={<FaFileAlt />}
            handles={[
                { type: 'source', position: 'right', id: `output` },
                ...getVariablesHandle(variables),
            ]}
            className="ps-5"
        >
            <Textarea label="Text" value={currText} onChange={setCurrText} />
        </BaseNode>
    );
};
