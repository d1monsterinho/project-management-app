import { useRef, useState } from 'react';
import Input from '../Input/Input';
import Dialog from '../ErrorDialog/Dialog';

export default function NewProjectMenu({ onSaveClick, onCancelClick }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const errorDialogRef = useRef();

    const [invalidInput, setInvalidInput] = useState(false);

    function validateEnteredFieldsOnSaveClick(title, description, dueDate) {
        const isEmptyCheck = !((title || description) || dueDate);
        const isBlankCheck = title.trim() === '' || description.trim() === '' || dueDate.trim() === '';

        if (isEmptyCheck || isBlankCheck) {
            errorDialogRef.current.open();
            return;
        }

        onSaveClick(titleRef.current.value, descriptionRef.current.value, dueDateRef.current.value)
    }

    return (
        <>
            <Dialog ref={errorDialogRef} buttonLabel="Close">
                <h2 className="text-xl font-bold text-red-400 my-4">
                    Empty and blank fields are not allowed
                </h2>

                <p className="text-stone-500 mb-4">Please fill all the form fields</p>
            </Dialog>

            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancelClick}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50 hover:text-stone-200"
                            onClick={() => validateEnteredFieldsOnSaveClick(titleRef.current.value, descriptionRef.current.value, dueDateRef.current.value)}
                        >
                            Save
                        </button>
                    </li>
                </menu>

                <div>
                    <Input type="text" label="Title" ref={titleRef} />
                    <Input isTextarea label="Description" ref={descriptionRef} />
                    <Input type="date" label="Due Date" ref={dueDateRef} />
                </div>
            </div>
        </>

    );
}