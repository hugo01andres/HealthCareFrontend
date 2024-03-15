import { PatientBiochemicalForm } from "../hooks/usePatientBiochemicalForm";
import { PatientGeneralForm } from "../hooks/usePatientGeneralForm";

export type FormSteps = "general" | "biochemical";

export type PatientAnalysisContext = {
  loading: boolean;
  forms: {
    general: PatientGeneralForm | undefined;
    biochemical: PatientBiochemicalForm | undefined;
  };
  pdfUrl: string | undefined;
  pdfBytes: string | undefined;
  currentStep: FormSteps;
  canFetchPdf: boolean;
  setStep: (step: FormSteps) => void;
  setGeneralForm: (form: PatientGeneralForm) => void;
  setBiochemicalForm: (form: PatientBiochemicalForm) => void;
  getAnalysisPdf: () => void;
};

export type LoadingAction = { type: "loading"; payload: boolean };
export type SetGeneralFormAction = {
  type: "form/setGeneralForm";
  payload: PatientGeneralForm;
};
export type SetBiochemicalFormAction = {
  type: "form/setBiochemicalForm";
  payload: PatientBiochemicalForm;
};
export type SetPdfUrlAction = { type: "pdf/setPdfUrl"; payload: string };
export type SetPdfBytesAction = { type: "pdf/setPdfBytes"; payload: string };
export type SetStepAction = {
  type: "step/setStep";
  payload: FormSteps;
};
export type SetCanFetchPdfAction = {
  type: "pdf/setCanFetchPdf";
  payload: boolean;
};

export type PatientAnalysisAction =
  | LoadingAction
  | SetGeneralFormAction
  | SetBiochemicalFormAction
  | SetCanFetchPdfAction
  | SetPdfUrlAction
  | SetPdfBytesAction
  | SetStepAction;
