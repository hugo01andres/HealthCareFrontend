import { AnalysisForm } from "@/modules/patient_analysis/components";
import { PatientAnalysisContextProvider } from "@/modules/patient_analysis/contexts";
import AnalysisResults from "../components/AnalysisResults";

export default function PatientAnalysisPage() {
  return (
    <PatientAnalysisContextProvider>
      <div className="flex flex-col gap-4">
        <AnalysisForm />

        <AnalysisResults />
      </div>
    </PatientAnalysisContextProvider>
  );
}
