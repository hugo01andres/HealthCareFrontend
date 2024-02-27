import { useMutation } from "@tanstack/react-query";
import patientAnalysis from "@/modules/patient_analysis/services/patientAnalysis";
import {
  AnalysisPredictionResponse,
  AnalysisPdfResponse,
} from "@/modules/patient_analysis/types";
import { useAnalysisFormContext } from "./useAnalysisFormContext";

export function usePatientAnalysisPrediction() {
  const { form } = useAnalysisFormContext();

  const { mutate, mutateAsync, ...rest } =
    useMutation<AnalysisPredictionResponse>({
      mutationFn: () => patientAnalysis.getAnalysisPrediction(form),
    });

  return {
    getAnalysisPrediction: mutate,
    getAnalysisPredictionAsync: mutateAsync,
    ...rest,
  };
}

export function usePatientAnalysisPdf() {
  const { form } = useAnalysisFormContext();

  const { mutate, mutateAsync, ...rest } = useMutation<AnalysisPdfResponse>({
    mutationFn: () => patientAnalysis.getAnalysisPdf(form),
  });

  return {
    getAnalysisPdf: mutate,
    getAnalysisPdfAsync: mutateAsync,
    ...rest,
  };
}