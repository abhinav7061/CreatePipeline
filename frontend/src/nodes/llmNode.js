import { BaseNode } from '../components/BaseNode';
import { FaRobot } from 'react-icons/fa'

export const LLMNode = ({ id, data }) => (
    <BaseNode
        id={id}
        type="LLM"
        icon={<FaRobot />}
        handles={[
            { type: 'target', position: 'left', id: 'system', style: { top: `${100 / 3}%` } },
            { type: 'target', position: 'left', id: 'prompt', style: { top: `${200 / 3}%` } },
            { type: 'source', position: 'right', id: 'response' }
        ]}
        className='ps-5'
    >
        <div>
            <span>This is a LLM.</span>
        </div>
    </BaseNode>
); 