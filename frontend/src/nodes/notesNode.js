import { BaseNode } from '../components/BaseNode';
import Textarea from '../components/customInputs/textarea';
import { FaStickyNote } from 'react-icons/fa';
import { useState } from 'react';

export const NotesNode = ({ id, data }) => {
    const [note, setNote] = useState(data?.note || '');

    return (
        <BaseNode
            id={id}
            type="Notes"
            icon={<FaStickyNote />}
            handles={[
                { type: 'source', position: 'right', id: 'note-output' }
            ]}
        >
            <Textarea label="Note" value={note} onChange={setNote} rows={5} />
        </BaseNode>
    );
};
