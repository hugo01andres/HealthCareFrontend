import { useContext } from "react";
import { PatientAnalysisContext } from "../contexts/PatientAnalysisContext";

export function usePatientAnalysisContext() {
  const context = useContext(PatientAnalysisContext);

  if (!context) {
    throw new Error(
      "usePatientAnalysisContext must be used within a PatientAnalysisProvider"
    );
  }

  return context;
}
