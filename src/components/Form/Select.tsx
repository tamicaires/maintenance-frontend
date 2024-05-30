import { SelectHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form';

interface SelectOption {
  labelOptions: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  // labelOptions: string;
  options: SelectOption[];
  hasApiError?: boolean;
}

export function Select({ name, label, options, hasApiError, ...rest }: SelectProps) {
  const { register, formState: { errors } } = useFormContext();
  const hasValidationError = errors && errors[name];
  const hasError = hasValidationError || hasApiError;
  console.log(options.map(option => option.labelOptions))
  return (
    <select
      id={name}
      className={`flex rounded border ${hasError ? 'border-red-500' : 'border-gray-300'} shadow-sm px-4 py-1.5 text-zinc-800 focus:outline-none focus:blue-2 focus:ring-blue-500 focus:border-blue-500`}
      {...register(name)}
      {...rest}
    >
      <option value="" >{label}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.labelOptions}</option>
      ))}
    </select>
  );
}
