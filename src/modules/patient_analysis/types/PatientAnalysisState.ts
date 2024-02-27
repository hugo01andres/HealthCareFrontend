import { ActionWithPayload } from "@/shared/types/utility";
import { PatientInformation } from "@/shared/types/patientInformation";

export type PatientAnalysisState = {
  form: PatientInformation;
  step: number;
  maxStep: number;
  setValue: (
    key: keyof PatientInformation,
    value: PatientInformation[keyof PatientInformation]
  ) => void;
  setStep: (step: number) => void;
  handleSubmit: () => void;
};

type PatientInformationKeys = keyof PatientInformation;

export type SetValueAction = ActionWithPayload<
  "SET_VALUE",
  {
    key: PatientInformationKeys;
    value: PatientInformation[PatientInformationKeys];
  }
>;
export type SetStepAction = ActionWithPayload<"SET_STEP", number>;

export type PatientAnalysisActionTypes = SetValueAction | SetStepAction;
