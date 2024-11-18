// toolbar.js

import { DraggableNode } from './draggableNode';
import { FaFileImport, FaFileExport, FaFileAlt, FaRobot, FaStickyNote, FaGlobe, FaTextHeight, FaCalculator, FaCalendarAlt } from 'react-icons/fa';

export const PipelineToolbar = () => {

    return (
        <div className='shadow-md p-3'>
            <div className='flex justify-center flex-wrap gap-3'>
                <DraggableNode type='customInput' label='Input' icon={<FaFileImport />} description='Create user input field for your pipeline' />
                <DraggableNode type='llm' label='LLM' icon={<FaRobot />} description='Use LLM Models for your pipeline' />
                <DraggableNode type='customOutput' label='Output' icon={<FaFileExport />} description='A field for outputting data from your pipeline' />
                <DraggableNode type='text' label='Text' icon={<FaFileAlt />} description='Text field that allows for variables' />
                <DraggableNode type='notes' label='Notes' icon={<FaStickyNote />} description='Add and store notes for your pipeline' />
                <DraggableNode type='translation' label='Translation' icon={<FaGlobe />} description='Translate text between languages like English, Hindi, and Spanish' />
                <DraggableNode type='transform' label='Transform' icon={<FaTextHeight />} description='Transform text to uppercase, lowercase, or title case' />
                <DraggableNode type='math' label='Math' icon={<FaCalculator />} description='Perform basic math operations like addition or subtraction' />
                <DraggableNode type='date' label='Date' icon={<FaCalendarAlt />} description='Format and manipulate dates in your pipeline' />
            </div>
        </div>
    );
};
