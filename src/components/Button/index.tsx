interface ButtonProps {
    label: string;
}

const Button = ({ label }: ButtonProps) => {
    return (
        <button className="w-[385px] h-12 rounded-lg bg-blue-900 text-white opacity-100">
            {label}
        </button>
    );
}

export default Button;
