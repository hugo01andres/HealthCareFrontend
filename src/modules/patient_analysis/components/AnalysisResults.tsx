import { usePdfConvert } from "@/shared/hooks/usePdfConverter";
import Button from "@/shared/components/Button";

type AnalysisResultsProps = {
  pdfBytes: string | undefined;
};

export default function AnalysisResults({ pdfBytes }: AnalysisResultsProps) {
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
    pdfUrl && (
      <div className="flex items-center justify-center gap-4 w-full max-w-lg mx-auto">
        <Button
          className="w-full text-black border-2 border-black bg-gray-200"
          onClick={viewAnalysisPdf}
        >
          Ver PDF
        </Button>

        <Button
          className="w-full text-black border-2 border-black bg-gray-200"
          onClick={downloadAnalysisPdf}
        >
          Descargar PDF
        </Button>
      </div>
    )
  );
}
