import { AnalysisForm } from "@/modules/patient_analysis/components";
import { PatientAnalysisContextProvider } from "@/modules/patient_analysis/contexts";

export default function PatientAnalysisPage() {
  return (
    <div>
      <PatientAnalysisContextProvider>
        <AnalysisForm />
      </PatientAnalysisContextProvider>
    </div>
  );
}
