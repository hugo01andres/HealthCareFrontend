import Input from "@/shared/components/Input";
import NumberInput from "@/shared/components/NumberInput";
import BooleanSelect from "@/shared/components/BooleanSelect";
import { usePatientGeneralForm } from "../hooks/usePatientGeneralForm";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";
import AnalysisFormStepper from "./AnalysisFormStepper";

export default function AnalysisFormGeneral() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = usePatientGeneralForm();

  const { setGeneralForm, setStep } = usePatientAnalysisContext();

  const onHandleSubmit = handleSubmit((data) => {
    setGeneralForm(data);
    setStep("biochemical");
  });

  return (
    <>
      <Input label="Edad" error={errors.age?.message}>
        <NumberInput placeholder="Su edad" {...register("age")} />
      </Input>

      <Input label="Sexo" error={errors.sex?.message}>
        <select {...register("sex")} defaultValue={-1}>
          <option value={-1} disabled>
            Seleccione una opción
          </option>
          <option value={1}>Masculino</option>
          <option value={0}>Femenino</option>
        </select>
      </Input>

      <Input label="¿Es fumador?" error={errors.smoking?.message}>
        <BooleanSelect {...register("smoking")} />
      </Input>

      <Input label="¿Padece de anemia?" error={errors.anaemia?.message}>
        <BooleanSelect {...register("anaemia")} />
      </Input>

      <Input label="¿Padece de diabetes?" error={errors.diabetes?.message}>
        <BooleanSelect {...register("diabetes")} />
      </Input>

      <Input
        label="¿Padece de hipertensión arterial?"
        error={errors.highBloodPressure?.message}
      >
        <BooleanSelect {...register("highBloodPressure")} />
      </Input>

      <AnalysisFormStepper onNext={onHandleSubmit} />
    </>
  );
}
