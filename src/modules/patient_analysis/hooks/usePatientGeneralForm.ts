import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePatientAnalysisContext } from "./usePatientAnalysisContext";

const initialState = {
  age: 0,
  anaemia: false,
  diabetes: false,
  highBloodPressure: false,
  smoking: false,
  sex: -1,
};

const patientGeneralSchema = z.object({
  age: z.coerce
    .number()
    .min(15, { message: "La edad mínima es de 15 años." })
    .max(100, { message: "La edad máxima es de 100 años." }),
  anaemia: z.boolean(),
  diabetes: z.boolean(),
  highBloodPressure: z.boolean(),
  smoking: z.boolean(),
  sex: z.coerce.number().refine((value) => value === 0 || value === 1, {
    message: "Debe de seleccionar entre masculino y femenino.",
  }),
});

export type PatientGeneralForm = z.infer<typeof patientGeneralSchema>;

export const usePatientGeneralForm = () => {
  const { forms } = usePatientAnalysisContext();

  const generalForm = useForm<PatientGeneralForm>({
    resolver: zodResolver(patientGeneralSchema),
    defaultValues: forms.general ?? initialState,
  });

  return {
    ...generalForm,
  };
};
