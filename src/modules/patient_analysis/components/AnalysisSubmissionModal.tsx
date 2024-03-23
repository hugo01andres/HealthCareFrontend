import CheckboxInput from "@/shared/components/CheckboxInput";
import Modal from "@/shared/components/Modal";
import { useEffect } from "react";
import InlineInput from "@/shared/components/InlineInput";
import Button from "@/shared/components/Button";
import { usePatientAnalysisContext } from "@/modules/patient_analysis/hooks/usePatientAnalysisContext";

export default function AnalysisSubmissionModal() {
  const {
    setExtraDataForm,
    getAnalysisPdf,
    submitPatientInformation,
    canFetchPdf,
    isModalOpen,
    setIsModalOpen,
    forms: { extra: extraDataForm },
  } = usePatientAnalysisContext();

  function handleSubmit() {
    const { shareData, submitOnly } = extraDataForm;

    if (shareData && submitOnly) {
      submitPatientInformation();
    } else {
      if (!canFetchPdf) return;
      getAnalysisPdf();
    }
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (canFetchPdf) setIsModalOpen(true);
  }, [canFetchPdf, setIsModalOpen]);

  return (
    <Modal isOpen={isModalOpen} onSetIsOpen={setIsModalOpen} title="Hola">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Terminando formulario</h2>
        <p>
          Por favor, considere responder las siguientes preguntas antes de
          finalizar el formulario.
        </p>

        <InlineInput
          label="¿El paciente que se está registrando ha fallecido? Si es el caso, ¿fue por un problema del corazón?"
          labelClass="flex-row gap-4"
        >
          <CheckboxInput
            checked={extraDataForm.deathEvent}
            onChange={(e) => setExtraDataForm("deathEvent", e.target.checked)}
          />
        </InlineInput>

        <InlineInput label="¿Acepta compartir los datos del paciente para ayudar a otras personas?">
          <CheckboxInput
            checked={extraDataForm.shareData}
            onChange={(e) => setExtraDataForm("shareData", e.target.checked)}
          />
        </InlineInput>

        {extraDataForm.shareData && (
          <InlineInput
            label="¿Desea sólamente publicar los datos del paciente y no recibir el análisis?"
            labelClass="font-semibold"
          >
            <CheckboxInput
              checked={extraDataForm.submitOnly}
              onChange={(e) => setExtraDataForm("submitOnly", e.target.checked)}
            />
          </InlineInput>
        )}

        <nav className="flex justify-between gap-4">
          <Button
            className="w-full bg-red-400"
            onClick={() => setIsModalOpen(false)}
          >
            Cancelar
          </Button>

          <Button className="w-full bg-gray-800" onClick={handleSubmit}>
            Enviar formulario
          </Button>
        </nav>
      </div>
    </Modal>
  );
}
