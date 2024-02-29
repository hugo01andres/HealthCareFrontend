import { createContext } from "react";
import { usePatientAnalysis } from "@/modules/patient_analysis/hooks/usePatientAnalysis";
import { PatientAnalysisState } from "@/modules/patient_analysis/types/PatientAnalysisState";

export type PatientAnalysisProviderProps = {
  children: React.ReactNode;
};

export const PatientAnalysisContext =
  createContext<PatientAnalysisState | null>(null);

export function PatientAnalysisContextProvider({
  children,
}: PatientAnalysisProviderProps) {
  const { ...state } = usePatientAnalysis();

  return (
    <PatientAnalysisContext.Provider value={{ ...state }}>
      {children}
    </PatientAnalysisContext.Provider>
  );
}
