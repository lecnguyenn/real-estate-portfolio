import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ id, label, required, error, disabled, ...props }, ref) {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;


  return (
    <div className="w-full my-[20px]">
      {
        label && (
          <label
            htmlFor={inputId}
          >
            {label}
            {required && <span className="ml-1">*</span>}
          </label>
        )
      }
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        disabled={disabled}
        className="w-full rounded-md bg-white border-0 text-[13px] h-[50px] py-[10px] px-[20px] font-normal"
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
})

export default Input;