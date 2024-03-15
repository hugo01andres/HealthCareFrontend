import {
  AnalysisFormBiochemical,
  AnalysisFormGeneral,
} from "@/modules/patient_analysis/components";
import Button from "@shared/components/Button";
import { usePatientAnalysisContext } from "@/modules/patient_analysis/hooks/usePatientAnalysisContext";
import { motion } from "framer-motion";

export default function AnalysisForm() {
  const { loading, currentStep, canFetchPdf, getAnalysisPdf } =
    usePatientAnalysisContext();

  function handleSubmit() {
    getAnalysisPdf();
  }

  const formSubtitle =
    currentStep === "general" ? "Sección general" : "Sección bioquímica";

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        className={`flex flex-col border rounded-md mx-auto p-6 max-w-lg gap-4 ${
          loading ? "opacity-70" : ""
        }`}
      >
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <h2 className="text-xl font-semibold">Formulario de análisis</h2>
          <h3 className="p-1 px-1.5 border border-gray-600 rounded-md text-sm">
            {formSubtitle}
          </h3>
        </div>

        {currentStep === "general" ? (
          <AnalysisFormGeneral />
        ) : (
          <AnalysisFormBiochemical />
        )}

        {currentStep === "biochemical" && canFetchPdf && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Button
              onClick={handleSubmit}
              isLoading={loading}
              disabled={loading}
              type="submit"
              className="w-full"
            >
              Envíar
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
