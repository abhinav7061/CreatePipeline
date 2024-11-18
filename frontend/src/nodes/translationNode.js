import { BaseNode } from '../components/BaseNode';
import { FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import Select from '../components/customInputs/select';
import Textarea from '../components/customInputs/textarea';

export const TranslationNode = ({ id, data }) => {
    const [inputText, setInputText] = useState(data?.inputText || '');
    const [language, setLanguage] = useState(data?.language || 'English');

    return (
        <BaseNode
            id={id}
            type="Translation"
            icon={<FaGlobe />}
            handles={[
                { type: 'source', position: 'right', id: 'translation-output' }
            ]}
        >
            <Textarea label="Input Text" value={inputText} onChange={setInputText} />
            <Select
                label="Language"
                options={['English', 'Hindi', 'Spanish']}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            />
        </BaseNode>
    );
};
