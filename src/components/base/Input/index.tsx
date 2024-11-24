import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  label?: string;
  error?: string;
  helperText?: string;
}