import { PatientBiochemicalForm } from "../hooks/usePatientBiochemicalForm";
import { PatientGeneralForm } from "../hooks/usePatientGeneralForm";

export type FormSteps = "general" | "biochemical";

export type PatientExtraDataForm = {
  shareData: boolean;
  deathEvent: boolean;
  submitOnly?: boolean;
};

export type PatientExtraDataKeys = keyof PatientExtraDataForm;

export type PatientAnalysisContext = {
  loading: boolean;
  forms: {
    general: PatientGeneralForm | undefined;
    biochemical: PatientBiochemicalForm | undefined;
    extra: PatientExtraDataForm;
  };
  currentStep: FormSteps;
  canFetchPdf: boolean;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  setStep: (step: FormSteps) => void;
  setGeneralForm: (form: PatientGeneralForm) => void;
  setBiochemicalForm: (form: PatientBiochemicalForm | undefined) => void;
  setExtraDataForm: (key: PatientExtraDataKeys, value: boolean) => void;
  getAnalysisPdf: () => Promise<void>;
  submitPatientInformation: () => Promise<void>;
};

export type LoadingAction = { type: "loading"; payload: boolean };
export type SetGeneralFormAction = {
  type: "form/setGeneralForm";
  payload: PatientGeneralForm;
};
export type SetBiochemicalFormAction = {
  type: "form/setBiochemicalForm";
  payload: PatientBiochemicalForm | undefined;
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
export type SetExtraDataFormAction = {
  type: "form/setExtraDataForm";
  payload: {
    key: PatientExtraDataKeys;
    value: boolean;
  };
};

export type PatientAnalysisAction =
  | LoadingAction
  | SetGeneralFormAction
  | SetBiochemicalFormAction
  | SetCanFetchPdfAction
  | SetPdfUrlAction
  | SetPdfBytesAction
  | SetStepAction
  | SetExtraDataFormAction;
