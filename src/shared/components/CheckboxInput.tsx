import { InputHTMLAttributes } from "react";

export type CheckboxInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function CheckboxInput({ ...props }: CheckboxInputProps) {
  return <input type="checkbox" {...props} className="w-4" />;
}
