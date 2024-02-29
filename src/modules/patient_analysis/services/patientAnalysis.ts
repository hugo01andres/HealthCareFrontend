import { heartSafeApi } from "@/shared/api/heartSafeApi";
import { AnalysisPdfResponse } from "../types";
import { PatientInformation } from "@/shared/types/patientInformation";

export default {
  async getAnalysisPdf(patientInformation: PatientInformation) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await heartSafeApi.post<AnalysisPdfResponse>(
      "/userinformation/analysispdf",
      {
        ...patientInformation,
      }
    );
    return response;
  },
};
