
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg'
  className?: string;
  children: React.ReactNode;
}

const Button = ({ id, children, ...props }: ButtonProps) => {
  return (
    <button
      id={id}
      className="py-[15px] px-[25px] rounded-[5px] text-[15px] font-semibold text-[#13141a] overflow-hidden bg-[#efb93f]"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;