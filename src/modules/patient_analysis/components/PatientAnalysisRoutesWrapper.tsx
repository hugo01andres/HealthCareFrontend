import { Outlet } from "react-router-dom";
import { PatientAnalysisContextProvider } from "@/modules/patient_analysis/contexts/PatientAnalysisContext";

export default function PatientAnalysisRoutesWrapper() {
  return (
    <PatientAnalysisContextProvider>
      <Outlet />
    </PatientAnalysisContextProvider>
  );
}
