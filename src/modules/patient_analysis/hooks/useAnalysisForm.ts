import {
  PatientAnalysisActionTypes,
  PatientAnalysisState,
} from "@/modules/patient_analysis/types/PatientAnalysisState";
import { PatientInformation } from "@/shared/types/patientInformation";
import { useReducer } from "react";

const initialState: PatientAnalysisState = {
  form: {
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
  },
  step: 0,
  maxStep: 1,
  setValue: () => {},
  setStep: () => {},
  handleSubmit: () => {},
};

const reducer = (
  state: PatientAnalysisState,
  action: PatientAnalysisActionTypes
) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        form: { ...state.form, [action.payload.key]: action.payload.value },
      };
    case "SET_STEP":
      if (action.payload < 0 || action.payload > state.maxStep) return state;

      return {
        ...state,
        step: action.payload,
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
    dispatch({ type: "SET_VALUE", payload: { key, value } });
  };

  const setStep = (step: number) => {
    dispatch({ type: "SET_STEP", payload: step });
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return { ...state, setValue, setStep, handleSubmit };
};
