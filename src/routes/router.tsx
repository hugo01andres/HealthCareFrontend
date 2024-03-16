import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/shared/pages/HomePage";
import PatientAnalysisPage from "@/modules/patient_analysis/pages/PatientAnalysisPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />

      <Route path="patient-analysis" element={<PatientAnalysisPage />}>
        <Route path="results" element={<PatientAnalysisPage />} />
      </Route>
    </Route>
  )
);
