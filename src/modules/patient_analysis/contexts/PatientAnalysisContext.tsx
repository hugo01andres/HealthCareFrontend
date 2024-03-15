import { createContext } from "react";
import { usePatientAnalysis } from "@/modules/patient_analysis/hooks/usePatientAnalysis";
import { PatientAnalysisContext as PatientAnalysisContextType } from "../types/PatientAnalysis";

export type PatientAnalysisProviderProps = {
  children: React.ReactNode;
};

export const PatientAnalysisContext =
  createContext<PatientAnalysisContextType | null>(null);

export function PatientAnalysisContextProvider({
  children,
}: PatientAnalysisProviderProps) {
  const state = usePatientAnalysis();

  return (
    <PatientAnalysisContext.Provider value={state}>
      {children}
    </PatientAnalysisContext.Provider>
  );
}
