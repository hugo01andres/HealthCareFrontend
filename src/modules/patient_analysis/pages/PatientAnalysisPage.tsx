import { AnalysisForm } from "@/modules/patient_analysis/components";
import { PatientAnalysisContextProvider } from "@/modules/patient_analysis/contexts";
import AnalysisResults from "../components/AnalysisResults";
import PageTransitionWrapper from "@/shared/components/animation/PageTransitionWrapper";

export default function PatientAnalysisPage() {
  return (
    <PatientAnalysisContextProvider>
      <PageTransitionWrapper className="flex flex-col gap-2">
        <AnalysisForm />

        <AnalysisResults />
      </PageTransitionWrapper>
    </PatientAnalysisContextProvider>
  );
}
