
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    className?: string;
}

const TextArea = ({ id, label, className, ...props }: TextAreaProps) => {
    return (
        <div className="w-full my[-20px]">
            {label && (
                <label
                    className="text-[14px] font-semibold text-[#16191e] mb-[10px]"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className={`w-full rounded-md bg-white border-0 text-[13px]  py-[5px] px-[10px] font-normal ${className}`}
                rows={5}
                {...props}
            />
        </div>
    )
}

export default TextArea;