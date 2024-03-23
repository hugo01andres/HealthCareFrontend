import { useEffect, useState } from "react";
import AnalysisResults from "../components/AnalysisResults";
import { useNavigate, useLocation } from "react-router-dom";

export default function PatienAnalysisResultsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [pdfBytes] = useState(state?.pdfBytes);

  useEffect(() => {
    if (!pdfBytes) {
      navigate("/patient-analysis", {
        replace: true,
      });
    }
  }, [navigate, pdfBytes]);

  return (
    pdfBytes && (
      <div className="flex flex-col border shadow-md rounded-md mx-auto p-6 max-w-lg gap-4 text-justify">
        <h1 className="text-center text-xl">
          ¡Gracias por utilizar HeartSafe!
        </h1>

        <p>
          Recuerde que este análisis es meramente informativo y no debería ser
          considerado como un documento de validez médica. Para un mejor
          asesoramiento, le aconsejamos acercarse a su médico de confianza.
        </p>

        <p>
          A continuación, le mostramos el análisis en PDF de su última consulta:
        </p>

        <AnalysisResults pdfBytes={pdfBytes} />
      </div>
    )
  );
}
