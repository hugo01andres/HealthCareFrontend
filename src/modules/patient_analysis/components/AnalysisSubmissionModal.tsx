import CheckboxInput from "@/shared/components/CheckboxInput";
import Modal from "@/shared/components/Modal";
import { useEffect } from "react";
import InlineInput from "@/shared/components/InlineInput";
import Button from "@/shared/components/Button";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";

export default function AnalysisSubmissionModal() {
  const {
    setExtraDataForm,
    getAnalysisPdf,
    canFetchPdf,
    isModalOpen,
    setIsModalOpen,
    forms: { extra: extraDataForm },
  } = usePatientAnalysisContext();

  function handleSubmit() {
    if (!canFetchPdf) return;
    getAnalysisPdf();
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
          label="¿Ha sufrido de problemas del corazón en los últimos 6 meses?"
          labelClass="flex-row gap-4"
        >
          <CheckboxInput
            checked={extraDataForm.heartProblemsRecently}
            onChange={(e) =>
              setExtraDataForm("heartProblemsRecently", e.target.checked)
            }
          />
        </InlineInput>

        <InlineInput label="¿Desea compartir sus datos para ayudar a otras personas?">
          <CheckboxInput
            checked={extraDataForm.shareData}
            onChange={(e) => setExtraDataForm("shareData", e.target.checked)}
          />
        </InlineInput>

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
