import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "@/modules/home/pages/HomePage";
import PatientAnalysisPage from "@/modules/patient_analysis/pages/PatientAnalysisPage";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/patient-analysis" element={<PatientAnalysisPage />} />
    </Route>
  )
);
