import Button from '../Button/Button';

export default function ProjectsSidebar({ onAddProjectClick, projectsState, handleSelectProject }) {
    const notSelectedProjectButtonClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';
    const selectedProjectButtonClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 bg-stone-600 hover:text-stone-100 hover:bg-stone-500';


    const selectedProjectId = projectsState.selectedProjectId;

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">Your projects</h2>
            <div>
                <Button onClick={onAddProjectClick}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-4">
                {projectsState.projects.map(currentProject => (
                    <li key={currentProject.id}>
                        <button
                         className={currentProject.id === selectedProjectId ? selectedProjectButtonClasses : notSelectedProjectButtonClasses}
                         onClick={() => handleSelectProject(currentProject.id)}
                         >
                            {currentProject.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}