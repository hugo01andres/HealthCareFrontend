import { AnalysisForm } from "@/modules/patient_analysis/components";
import PageTransitionWrapper from "@/shared/components/animation/PageTransitionWrapper";

export default function PatientAnalysisPage() {
  return (
    <PageTransitionWrapper className="flex flex-col gap-2">
      <AnalysisForm />
    </PageTransitionWrapper>
  );
}
