import { InputHTMLAttributes, forwardRef } from "react";

type NumberInputProps = InputHTMLAttributes<HTMLInputElement>;

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput({ ...rest }, ref) {
    const value = rest.value === 0 ? "" : rest.value;

    return <input {...rest} ref={ref} type="number" value={value} />;
  }
);

export default NumberInput;
