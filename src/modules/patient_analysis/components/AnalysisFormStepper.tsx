import Button from "@/shared/components/Button";
import { usePatientAnalysisContext } from "@/modules/patient_analysis/hooks/usePatientAnalysisContext";

type AnalysisFormStepperProps = {
  onPrevious?: () => void;
  onNext?: () => void;
};

export default function AnalysisFormStepper({
  onPrevious,
  onNext,
}: AnalysisFormStepperProps) {
  const { currentStep } = usePatientAnalysisContext();

  const nextLabel = currentStep === "general" ? "Siguiente" : "Finalizar";

  return (
    <nav className="flex items-center justify-between">
      <Button
        type="button"
        className={`border-2 border-black bg-transparent text-black ${
          currentStep === "general" && "invisible"
        }`}
        onClick={onPrevious}
        disabled={currentStep === "general"}
      >
        {" "}
        &larr; Anterior
      </Button>

      <Button
        type="button"
        className="border-2 border-black bg-transparent text-black"
        onClick={onNext && onNext}
      >
        {" "}
        {nextLabel} &rarr;
      </Button>
    </nav>
  );
}
