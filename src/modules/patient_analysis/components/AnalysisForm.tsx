import Form from "@/shared/components/Form";
import {
  AnalysisFormBiochemical,
  AnalysisFormGeneral,
  AnalysisFormStepper,
} from "@/modules/patient_analysis/components";
import Button from "@shared/components/Button";
import { usePatientAnalysisPrediction } from "@/modules/patient_analysis/hooks/usePatientAnalysis";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";
import { usePatientAnalysisPdf } from "../hooks/usePatientAnalysis";

export default function AnalysisForm() {
  const { handleSubmit: submit } = usePatientAnalysisContext();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit();
  }

  const {
    getAnalysisPrediction,
    data: analysisPrediction,
    isPending: gettingPrediction,
  } = usePatientAnalysisPrediction();

  const {
    getAnalysisPdf,
    data: analysisPdf,
    isPending: gettingPdf,
  } = usePatientAnalysisPdf();

  return (
    <div>
      <Form onSubmit={handleSubmit} className="max-w-lg gap-4">
        <h1 className="text-lg font-semibold">Formulario de análisis</h1>

        <AnalysisFormGeneral />
        <AnalysisFormBiochemical />

        <AnalysisFormStepper />
        <Button type="submit">Submit</Button>
      </Form>

      <div>
        <Button
          onClick={() => getAnalysisPrediction()}
          isLoading={gettingPrediction}
          disabled={gettingPrediction}
        >
          Test prediction
        </Button>
        <pre>{JSON.stringify(analysisPrediction, null, 2)}</pre>
      </div>

      <div>
        <Button
          onClick={() => getAnalysisPdf()}
          isLoading={gettingPdf}
          disabled={gettingPdf}
        >
          Test prediction
        </Button>
        <pre>{JSON.stringify(analysisPdf, null, 2)}</pre>
      </div>
    </div>
  );
}
