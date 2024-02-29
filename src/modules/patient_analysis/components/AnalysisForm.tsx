import Form from "@/shared/components/Form";
import {
  AnalysisFormBiochemical,
  AnalysisFormGeneral,
  AnalysisFormStepper,
} from "@/modules/patient_analysis/components";
import Button from "@shared/components/Button";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";

export default function AnalysisForm() {
  const { getPatientAnalysisPdf } = usePatientAnalysisContext();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getPatientAnalysisPdf();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="max-w-lg gap-4">
        <h1 className="text-lg font-semibold">Formulario de análisis</h1>

        <AnalysisFormGeneral />
        <AnalysisFormBiochemical />

        <AnalysisFormStepper />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
