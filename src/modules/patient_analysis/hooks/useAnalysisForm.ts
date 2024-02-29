import { useReducer } from "react";
import {
  PatientAnalysisActionTypes,
  PatientAnalysisState,
} from "@/modules/patient_analysis/types/PatientAnalysisState";
import { PatientInformation } from "@/shared/types/patientInformation";
import { default as patientAnalysisServices } from "@modules/patient_analysis/services/patientAnalysis";

const formInitialState: PatientInformation = {
  age: 0,
  creatininePhosphokinase: 0,
  ejectionFraction: 0,
  serumCreatinine: 0,
  serumSodium: 0,
  platelets: 0,
  anaemia: false,
  diabetes: false,
  highBloodPressure: false,
  smoking: false,
  sex: undefined,
};

const initialState: PatientAnalysisState = {
  isLoading: false,
  error: null,
  form: formInitialState,
  step: 0,
  maxStep: 1,
  pdfUrl: null,
  setValue: () => {},
  setStep: () => {},
  getPatientAnalysisPdf: async () => {},
};

const reducer = (
  state: PatientAnalysisState,
  action: PatientAnalysisActionTypes
) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: null };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    case "form/setValue":
      return {
        ...state,
        form: { ...state.form, [action.payload.key]: action.payload.value },
      };
    case "step/setStep":
      if (action.payload < 0 || action.payload > state.maxStep) return state;

      return {
        ...state,
        step: action.payload,
      };
    case "analysisPdf/loaded":
      return {
        ...state,
        isLoading: false,
        pdfUrl: action.payload,
      };
    default:
      return state;
  }
};

export const useAnalysisForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setValue = (
    key: keyof PatientInformation,
    value: PatientInformation[keyof PatientInformation]
  ) => {
    dispatch({ type: "form/setValue", payload: { key, value } });
  };

  const setStep = (step: number) => {
    dispatch({ type: "step/setStep", payload: step });
  };

  const getPatientAnalysisPdf = async () => {
    const { data } = await patientAnalysisServices.getAnalysisPdf(state.form);

    console.log(data);
  };

  return { ...state, setValue, setStep, getPatientAnalysisPdf };
};
