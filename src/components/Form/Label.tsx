import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label 
      className="block mb-1 text-sm font-semibold text-gray-900"
      {...props}
    />
  )
}