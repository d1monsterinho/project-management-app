import { useState, useRef } from 'react';
import Button from '../Button/Button';
import Tasks from '../Tasks/Tasks';
import Dialog from '../ErrorDialog/Dialog';
import Input from '../Input/Input';

export default function SelectedProject({ project, onDeleteClick }) {
    const [taskList, setTaskList] = useState([]);

    const createTaskDialogRef = useRef();
    const taskTitleInputRef = useRef();

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });

    function onCreateTaskClick() {
        createTaskDialogRef.current.open();
    }

    function onSaveTaskClick() {
        setTaskList(prev => ([
            ...prev,
            {
                id: Math.random(),
                title: taskTitleInputRef.current.value,
            },
        ]));
    }

    function onDeleteTaskClick(id) {
        setTaskList(prev => prev.filter(task => task.id !== id));
    }

    return (
        <>
            <Dialog ref={createTaskDialogRef} buttonLabel="Create" onDialogButtonClick={onSaveTaskClick}>
                <Input label="Task Title" ref={taskTitleInputRef} />
            </Dialog>

            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-400 mb-2">{project.title}</h1>
                        <Button onClick={() => onDeleteClick(project.id)}>Delete Project</Button>
                    </div>
                    <p className="mb-4 text-stone-600 whitespace-pre-wrap">{project.description}</p>
                    <p className="text-stone-400">{formattedDate}</p>
                </header>

                <Tasks
                    taskList={taskList}
                    onCreateTaskClick={onCreateTaskClick}
                    onSaveTaskClick={onSaveTaskClick}
                    onDeleteTaskClick={onDeleteTaskClick}
                />
            </div>
        </>
    );
}