import { useEffect, useReducer, useState } from "react";
import { PatientBiochemicalForm } from "./usePatientBiochemicalForm";
import { PatientGeneralForm } from "./usePatientGeneralForm";
import {
  FormSteps,
  PatientAnalysisAction,
  PatientAnalysisContext,
  PatientExtraDataKeys,
} from "../types/PatientAnalysis";
import { PatientAnalysisService } from "@/modules/patient_analysis/services";

const initialState: PatientAnalysisContext = {
  loading: false,
  forms: {
    general: undefined,
    biochemical: undefined,
    extra: {
      heartProblemsRecently: false,
      shareData: false,
    },
  },
  currentStep: "general",
  canFetchPdf: false,
  pdfUrl: undefined,
  pdfBytes: undefined,
  isModalOpen: false,
  setIsModalOpen: () => {},
  setStep: () => {},
  setGeneralForm: () => {},
  setBiochemicalForm: () => {},
  setExtraDataForm: () => {},
  getAnalysisPdf: () => {},
};

const reducer = (
  state: PatientAnalysisContext,
  action: PatientAnalysisAction
) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "form/setGeneralForm":
      return { ...state, forms: { ...state.forms, general: action.payload } };
    case "form/setBiochemicalForm":
      return {
        ...state,
        forms: { ...state.forms, biochemical: action.payload },
      };
    case "form/setExtraDataForm":
      return {
        ...state,
        forms: {
          ...state.forms,
          extra: {
            ...state.forms.extra,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case "pdf/setCanFetchPdf":
      return { ...state, canFetchPdf: action.payload };
    case "pdf/setPdfUrl":
      return { ...state, pdfUrl: action.payload };
    case "pdf/setPdfBytes":
      return { ...state, pdfBytes: action.payload };
    case "step/setStep":
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};

export const usePatientAnalysis = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setGeneralForm = (form: PatientGeneralForm) => {
    dispatch({ type: "form/setGeneralForm", payload: form });
  };

  const setBiochemicalForm = (form: PatientBiochemicalForm | undefined) => {
    dispatch({ type: "form/setBiochemicalForm", payload: form });
  };

  const setExtraDataForm = (key: PatientExtraDataKeys, value: boolean) => {
    dispatch({ type: "form/setExtraDataForm", payload: { key, value } });
  };

  const setStep = (step: FormSteps) => {
    dispatch({ type: "step/setStep", payload: step });
  };

  const getAnalysisPdf = async () => {
    const { general, biochemical, extra } = state.forms;
    if (!general || !biochemical) return;

    dispatch({ type: "loading", payload: true });

    try {
      const payload = { ...general, ...biochemical, ...extra };
      const { data } = await PatientAnalysisService.getAnalysisPdf(payload);

      dispatch({ type: "pdf/setPdfBytes", payload: data.pdf });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };

  useEffect(() => {
    const { general, biochemical } = state.forms;

    dispatch({
      type: "pdf/setCanFetchPdf",
      payload: Boolean(general && biochemical),
    });
  }, [state.forms]);

  return {
    ...state,
    isModalOpen,
    setIsModalOpen,
    setStep,
    setGeneralForm,
    setBiochemicalForm,
    setExtraDataForm,
    getAnalysisPdf,
  };
};
