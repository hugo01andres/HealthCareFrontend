import { InputHTMLAttributes, forwardRef } from "react";

type BooleanSelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  optionLabels?: [string, string];
  disabledOptionLabel?: string;
};

const BooleanSelect = forwardRef<HTMLSelectElement, BooleanSelectProps>(
  function BooleanSelect(
    { className, optionLabels = ["No", "Sí"], disabledOptionLabel, ...rest },
    ref
  ) {
    return (
      <select ref={ref} className={className} {...rest}>
        <option value={"undefined"} disabled>
          {disabledOptionLabel ?? "Seleccione una opción"}
        </option>
        <option value="false">{optionLabels[0]}</option>
        <option value="true">{optionLabels[1]}</option>
      </select>
    );
  }
);

export default BooleanSelect;
