export default function Input({ isTextarea, label, ...props }) {
    const inputClasses = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
    
    return (
        <p className="flex flex-col my-4 gap-1">
            <label className="text-sm text-stone-500 font-bold uppercase">{label}</label>
            {isTextarea ? <textarea className={inputClasses} {...props} /> : <input className={inputClasses} {...props} />}
        </p>
    );
}