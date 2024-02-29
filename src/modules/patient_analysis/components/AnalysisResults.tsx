import { usePdfConvert } from "@/shared/hooks/usePdfConverter";
import { usePatientAnalysisContext } from "../hooks/usePatientAnalysisContext";
import Button from "@/shared/components/Button";

export default function AnalysisResults() {
  const { pdfBytes, isLoading } = usePatientAnalysisContext();
  const pdfUrl = usePdfConvert(pdfBytes);

  function viewAnalysisPdf() {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  }

  function downloadAnalysisPdf() {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "analysis.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    pdfUrl &&
    !isLoading && (
      <div className="flex items-center justify-center gap-4 w-full max-w-lg p-4 mx-auto">
        <Button
          className="w-full bg-blue-300 text-blue-900 border-2 border-blue-800"
          onClick={viewAnalysisPdf}
        >
          View PDF
        </Button>

        <Button
          className="w-full bg-blue-300 text-blue-900 border-2 border-blue-800"
          onClick={downloadAnalysisPdf}
        >
          Download PDF
        </Button>
      </div>
    )
  );
}
