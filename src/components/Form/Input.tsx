import { InputHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  hasApiError?: boolean;
}

export function Input(props: InputProps) {
  const { register, formState: { errors } } = useFormContext();
  const hasValidationError = errors && errors[props.name]; 
  const hasError = hasValidationError || props.hasApiError
  
  return (
    <input
      id={props.name}
      className={`flex rounded border ${hasError ? 'border-red-500' : 'border-gray-200'} shadow-sm text-sm p-2 px-4 py-1.5 text-gray-700 focus:outline-none focus:blue-2 focus:ring-blue-500 focus:border-blue-500`}
      {...register(props.name)}
      {...props}
    />
  );
}
