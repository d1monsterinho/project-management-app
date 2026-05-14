import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '../Button/Button';

export default function ErrorDialog({ children, ref, buttonLabel }) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => (
        {
            open() {
                dialogRef.current.showModal();
            }
        }
    ));

    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialogRef}>
            {children}
            <form className="mt-8 text-right"method="dialog">
                <Button>{buttonLabel}</Button>
            </form>
        </dialog>
        , document.getElementById('modal-root'));
}