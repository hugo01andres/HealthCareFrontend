import { useAnalysisForm } from "@/modules/patient_analysis/hooks/useAnalysisForm";
import { PatientAnalysisState } from "@/modules/patient_analysis/types/PatientAnalysisState";
import { createContext } from "react";

export type PatientAnalysisProviderProps = {
  children: React.ReactNode;
};

export const PatientAnalysisContext =
  createContext<PatientAnalysisState | null>(null);

export function PatientAnalysisContextProvider({
  children,
}: PatientAnalysisProviderProps) {
  const state = useAnalysisForm();

  return (
    <PatientAnalysisContext.Provider value={{ ...state }}>
      {children}
    </PatientAnalysisContext.Provider>
  );
}
