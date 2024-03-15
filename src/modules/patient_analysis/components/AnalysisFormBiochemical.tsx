import Input from "@/shared/components/Input";
import NumberInput from "@/shared/components/NumberInput";
import { usePatientBiochemicalForm } from "../hooks/usePatientBiochemicalForm";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";
import AnalysisFormStepper from "./AnalysisFormStepper";
import { motion } from "framer-motion";

export default function AnalysisFormBiochemical() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = usePatientBiochemicalForm();

  const { setBiochemicalForm, setStep } = usePatientAnalysisContext();

  const onHandleSubmit = handleSubmit((data) => {
    setBiochemicalForm(data);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-4"
    >
      <Input
        label="Creatinina fosfoquinasa"
        error={errors.creatininePhosphokinase?.message}
      >
        <NumberInput
          placeholder="Su nivel de creatinina fosfoquinasa"
          {...register("creatininePhosphokinase")}
        />
      </Input>

      <Input
        label="Fracción de eyección"
        error={errors.ejectionFraction?.message}
      >
        <NumberInput
          placeholder="Su fracción de eyección"
          {...register("ejectionFraction")}
        />
      </Input>

      <Input label="Nivel de plaquetas" error={errors.platelets?.message}>
        <NumberInput
          placeholder="Su nivel de plaquetas"
          {...register("platelets")}
        />
      </Input>

      <Input
        label="Nivel de creatinina sérica"
        error={errors.serumCreatinine?.message}
      >
        <NumberInput
          placeholder="Su nivel de creatinina sérica"
          {...register("serumCreatinine")}
        />
      </Input>

      <Input label="Nivel de sodio" error={errors.serumSodium?.message}>
        <NumberInput
          placeholder="Su nivel de sodio"
          {...register("serumSodium")}
        />
      </Input>

      <AnalysisFormStepper
        onPrevious={() => setStep("general")}
        onNext={onHandleSubmit}
      />
    </motion.div>
  );
}
