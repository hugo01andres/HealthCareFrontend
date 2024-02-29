import { FormEvent } from "react";
import Input from "@/shared/components/Input";
import NumberInput from "@/shared/components/InputNumber";
import BooleanSelect from "@/shared/components/BooleanSelect";
import { usePatientAnalysisContext } from "@/modules/patient_analysis/hooks/usePatientAnalysisContext";

export default function AnalysisFormGeneral() {
  const { setValue, ...state } = usePatientAnalysisContext();

  const { form } = state;

  return (
    state.step === 0 && (
      <>
        <Input label="Edad">
          <NumberInput
            placeholder="Su edad"
            value={form.age}
            onChange={(value) => setValue("age", value)}
          />
        </Input>

        <Input label="Sexo">
          <select
            value={form.sex ?? "undefined"}
            onChange={(e: FormEvent<HTMLSelectElement>) => {
              setValue("sex", Number(e.currentTarget.value));
            }}
          >
            <option value={"undefined"} disabled>
              Seleccione una opción
            </option>
            <option value={1}>Masculino</option>
            <option value={0}>Femenino</option>
          </select>
        </Input>

        <Input label="¿Es fumador?">
          <BooleanSelect
            value={form.smoking}
            onChange={(value) => setValue("smoking", value)}
          />
        </Input>

        <Input label="¿Padece de anemia?">
          <BooleanSelect
            value={form.anaemia}
            onChange={(value) => setValue("anaemia", value)}
          />
        </Input>

        <Input label="¿Padece de diabetes?">
          <BooleanSelect
            value={form.diabetes}
            onChange={(value) => setValue("diabetes", value)}
          />
        </Input>

        <Input label="¿Padece de hipertensión arterial?">
          <BooleanSelect
            value={form.highBloodPressure}
            onChange={(value) => setValue("highBloodPressure", value)}
          />
        </Input>
      </>
    )
  );
}
