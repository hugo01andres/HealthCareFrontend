import { heartSafeApi } from "@/shared/api/heartSafeApi";
import { AnalysisPredictionResponse, AnalysisPdfResponse } from "../types";
import { PatientInformation } from "@/shared/types/patientInformation";

export default {
  async getAnalysisPrediction(patientInformation: PatientInformation) {
    const { data } = await heartSafeApi.post<AnalysisPredictionResponse>(
      "/userinformation/analysisprediction",
      {
        ...patientInformation,
      }
    );
    return data;
  },
  async getAnalysisPdf(patientInformation: PatientInformation) {
    const { data } = await heartSafeApi.post<AnalysisPdfResponse>(
      "/userinformation/analysispdf",
      {
        ...patientInformation,
      }
    );
    return data;
  },
};
