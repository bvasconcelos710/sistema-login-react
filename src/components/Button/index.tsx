interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="w-[385px] h-12 rounded-lg bg-blue-900 text-white opacity-100">
            {label}
        </button>
    );
}

export default Button;
