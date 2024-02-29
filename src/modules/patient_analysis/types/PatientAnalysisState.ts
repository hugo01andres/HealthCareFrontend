import { ActionWithPayload } from "@/shared/types/utility";
import { PatientInformation } from "@/shared/types/patientInformation";

export type PatientAnalysisState = {
  form: PatientInformation;
  step: number;
  maxStep: number;
  isLoading: boolean;
  error: string | null;
  pdfUrl: string | undefined;
  pdfBytes: string | undefined;
  setValue: (
    key: keyof PatientInformation,
    value: PatientInformation[keyof PatientInformation]
  ) => void;
  setStep: (step: number) => void;
  getPatientAnalysisPdf: () => Promise<void>;
};

type PatientInformationKeys = keyof PatientInformation;

export type LoadingAction = { type: "loading" };
export type ErrorAction = ActionWithPayload<"error", string>;
export type SetValueAction = ActionWithPayload<
  "form/setValue",
  {
    key: PatientInformationKeys;
    value: PatientInformation[PatientInformationKeys];
  }
>;
export type SetStepAction = ActionWithPayload<"step/setStep", number>;
export type AnalysisPdfLoadedAction = ActionWithPayload<
  "analysisPdf/loaded",
  string
>;

export type PatientAnalysisActionTypes =
  | LoadingAction
  | ErrorAction
  | SetValueAction
  | SetStepAction
  | AnalysisPdfLoadedAction;
