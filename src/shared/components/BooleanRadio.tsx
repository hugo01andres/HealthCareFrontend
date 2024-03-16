import { Control, Controller, FieldValues, Path } from "react-hook-form";

type BooleanRadioProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export default function BooleanRadio<T extends FieldValues>({
  control,
  name,
}: BooleanRadioProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <div className="flex items-center gap-6">
          <label className="inline-flex items-center gap-1">
            No
            <input
              type="radio"
              onBlur={onBlur}
              onChange={() => onChange(false)}
              checked={value === false}
              ref={ref}
            />
          </label>

          <label className="inline-flex items-center gap-1">
            Sí
            <input
              type="radio"
              onBlur={onBlur}
              onChange={() => onChange(true)}
              checked={value === true}
              ref={ref}
            />
          </label>
        </div>
      )}
    />
  );
}
