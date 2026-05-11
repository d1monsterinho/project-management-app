import Button from '../Button/Button';

export default function ProjectsSidebar({ onAddProjectClick }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">Your projects</h2>
            <div>
                <Button onClick={onAddProjectClick}>
                    + Add Project
                </Button>
            </div>
            <ul>
                ...
            </ul>
        </aside>
    );
}