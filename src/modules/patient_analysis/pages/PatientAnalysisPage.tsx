import { AnalysisForm } from "@/modules/patient_analysis/components";
import { PatientAnalysisContextProvider } from "@/modules/patient_analysis/contexts";
import AnalysisResults from "../components/AnalysisResults";

export default function PatientAnalysisPage() {
  return (
    <PatientAnalysisContextProvider>
      <div className="flex flex-col gap-2">
        <AnalysisForm />

        <AnalysisResults />
      </div>
    </PatientAnalysisContextProvider>
  );
}
