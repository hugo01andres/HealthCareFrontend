import Input from "@/shared/components/Input";
import NumberInput from "@/shared/components/NumberInput";
import { usePatientGeneralForm } from "../hooks/usePatientGeneralForm";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";
import AnalysisFormStepper from "./AnalysisFormStepper";
import { motion } from "framer-motion";
import BooleanRadio from "@/shared/components/BooleanRadio";
import InlineInput from "@/shared/components/InlineInput";

export default function AnalysisFormGeneral() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = usePatientGeneralForm();

  const { setGeneralForm, setStep } = usePatientAnalysisContext();

  const onHandleSubmit = handleSubmit(
    (data) => {
      setGeneralForm(data);
      setStep("biochemical");
    },
    () => {
      console.log(getValues());
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-4"
    >
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

      <InlineInput label="¿Es fumador?" error={errors.smoking?.message}>
        <BooleanRadio control={control} name="smoking" />
      </InlineInput>

      <InlineInput label="¿Padece de anemia?" error={errors.anaemia?.message}>
        <BooleanRadio control={control} name="anaemia" />
      </InlineInput>

      <InlineInput
        label="¿Padece de diabetes?"
        error={errors.diabetes?.message}
      >
        <BooleanRadio control={control} name="diabetes" />
      </InlineInput>

      <InlineInput
        label="¿Padece de hipertensión arterial?"
        error={errors.highBloodPressure?.message}
      >
        <BooleanRadio control={control} name="highBloodPressure" />
      </InlineInput>

      <AnalysisFormStepper onNext={onHandleSubmit} />
    </motion.div>
  );
}
