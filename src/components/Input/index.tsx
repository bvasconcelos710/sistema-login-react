
interface InputProps {
    label: string;
    type: string;
    placeholder: string;
}

const Input = ({ label, type, placeholder }: InputProps) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                {label}
            </label>
            <input
                className=" bg-gray-200 border rounded-lg w-[385px] h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={label}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
