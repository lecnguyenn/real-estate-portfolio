
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement>

const Button = ({id}: ButtonProps) => {
    return (
        <button id={id} className=""></button>
    )
}