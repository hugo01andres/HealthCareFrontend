import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "@/modules/home/pages/HomePage";
import PatientAnalysisPage from "@/modules/patient_analysis/pages/PatientAnalysisPage";
import RootLayout from "@/layouts/RootLayout";
import PatienAnalysisResultsPage from "@/modules/patient_analysis/pages/PatientAnalysisResultsPage";
import PatientAnalysisRoutesWrapper from "@/modules/patient_analysis/components/PatientAnalysisRoutesWrapper";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />

      <Route path="patient-analysis" element={<PatientAnalysisRoutesWrapper />}>
        <Route index element={<PatientAnalysisPage />} />
        <Route path="results" element={<PatienAnalysisResultsPage />} />
      </Route>
    </Route>
  )
);
