import { useEffect, useState } from "react";

export const usePdfConvert = (pdfBytes: string): string | null => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (pdfBytes) {
      const arrayBuffer = Uint8Array.from(atob(pdfBytes), (c) =>
        c.charCodeAt(0)
      ).buffer;
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPdfUrl(null);
    }
  }, [pdfBytes]);

  return pdfUrl;
};
