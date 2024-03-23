import { heartSafeApi } from "@/shared/api/heartSafeApi";
import { AnalysisPdfResponse } from "../types";
import { PatientInformation } from "@/shared/types/patientInformation";

export default {
  async getAnalysisPdf(patientInformation: PatientInformation) {
    const response = await heartSafeApi.post<AnalysisPdfResponse>(
      "/userinformation/analysispdf",
      {
        ...patientInformation,
      }
    );
    return response;
  },

  async submitPatientInformation(patientInformation: PatientInformation) {
    const response = await heartSafeApi.post("/userinformation", {
      ...patientInformation,
    });
    return response;
  },
};
