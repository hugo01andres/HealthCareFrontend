import Input, { InputProps } from "./Input";

type InlineInputProps = InputProps & {
  label: string;
  error?: string;
  children?: React.ReactNode;
};

export default function InlineInput({
  error,
  label,
  children,
  ...rest
}: InlineInputProps) {
  return (
    <Input
      {...rest}
      label={label}
      error={error}
      labelClass="flex-row justify-between items-center gap-4 border-b border-gray-200 pb-2"
    >
      {children}
    </Input>
  );
}
