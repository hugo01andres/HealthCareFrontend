import { useEffect, useReducer, useState } from "react";
import {
  FormSteps,
  PatientAnalysisAction,
  PatientAnalysisContext,
  PatientExtraDataKeys,
} from "../types/PatientAnalysis";
import { PatientBiochemicalForm } from "./usePatientBiochemicalForm";
import { PatientGeneralForm } from "./usePatientGeneralForm";
import { PatientAnalysisService } from "@/modules/patient_analysis/services";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState: PatientAnalysisContext = {
  loading: false,
  forms: {
    general: undefined,
    biochemical: undefined,
    extra: {
      deathEvent: false,
      shareData: false,
      submitOnly: false,
    },
  },
  currentStep: "general",
  canFetchPdf: false,
  isModalOpen: false,
  setIsModalOpen: () => {},
  setStep: () => {},
  setGeneralForm: () => {},
  setBiochemicalForm: () => {},
  setExtraDataForm: () => {},
  getAnalysisPdf: async () => {},
  submitPatientInformation: async () => {},
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
    case "step/setStep":
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};

export const usePatientAnalysis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

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
      delete payload.submitOnly;

      const { data } = await PatientAnalysisService.getAnalysisPdf(payload);

      navigate("/patient-analysis/results", {
        state: {
          pdfBytes: data.pdf,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };

  const submitPatientInformation = async () => {
    const { general, biochemical, extra } = state.forms;
    if (!general || !biochemical) return;

    dispatch({ type: "loading", payload: true });

    try {
      const payload = { ...general, ...biochemical, ...extra };
      delete payload.submitOnly;

      await PatientAnalysisService.submitPatientInformation(payload);

      toast.success("Patient information submitted successfully");
      navigate("/patient-analysis");
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
    submitPatientInformation,
  };
};
