import Button from "../Button/Button";

export default function Tasks({ taskList, onCreateTaskClick, onDeleteTaskClick }) {
    const noTaskCreated = <p className="text-stone-800 mt-4">This project doesn't have any task</p>;
    const tasks = (
        <ul>
            {taskList.map(task => (
                <li
                    className="mt-4 mb-4 flex items-center justify-between border-l-4"
                    key={task.id}
                >
                    <h2 className="pl-2">
                        {task.title}
                    </h2>
                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        Delete Task
                    </Button>
                </li>
            ))}
        </ul>
    );

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <Button onClick={onCreateTaskClick}>+ Create Task</Button>
            {taskList.length > 0 ? tasks : noTaskCreated}
        </section>
    );
}