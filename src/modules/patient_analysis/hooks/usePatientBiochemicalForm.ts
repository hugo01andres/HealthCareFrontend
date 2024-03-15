import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePatientAnalysisContext } from "./usePatientAnalysisContext";

const initialState = {
  creatininePhosphokinase: 0,
  ejectionFraction: 0,
  serumCreatinine: 0,
  serumSodium: 0,
  platelets: 0,
};

const patientBiochemicalSchema = z.object({
  creatininePhosphokinase: z.coerce.number().gt(0, {
    message: "El valor debe de ser mayor a 0.",
  }),
  ejectionFraction: z.coerce.number().gt(0, {
    message: "El valor debe de ser mayor a 0.",
  }),
  serumCreatinine: z.coerce.number().gt(0, {
    message: "El valor debe de ser mayor a 0.",
  }),
  serumSodium: z.coerce.number().gt(0, {
    message: "El valor debe de ser mayor a 0.",
  }),
  platelets: z.coerce.number().gt(0, {
    message: "El valor debe de ser mayor a 0.",
  }),
});

export type PatientBiochemicalForm = z.infer<typeof patientBiochemicalSchema>;

export const usePatientBiochemicalForm = () => {
  const { forms } = usePatientAnalysisContext();

  const biochemicalForm = useForm<PatientBiochemicalForm>({
    resolver: zodResolver(patientBiochemicalSchema),
    defaultValues: forms.biochemical ?? initialState,
  });

  return {
    ...biochemicalForm,
  };
};
