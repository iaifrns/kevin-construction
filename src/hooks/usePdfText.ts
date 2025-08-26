// hooks/usePdfText.ts
import { useState } from "react";
import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.mjs"; // most bundlers pick this up; see note below
import type { file } from "../type";
import { pathToFile } from "../helper/pathToFile";

export type PdfPageText = { pageNumber: number; text: string };

export function usePdfText() {
  const [pages, setPages] = useState<PdfPageText[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If your bundler doesn’t auto‑resolve the worker, uncomment and adjust:
  // (pdfjs as any).GlobalWorkerOptions.workerSrc = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.mjs",
  //   import.meta.url
  // ).toString();

  const extract = async (path: file) => {
    setLoading(true);
    setError(null);
    try {
      const file = await pathToFile(path.url, path.filename, path.mimeType);
      const data = await file.arrayBuffer();
      const doc = await pdfjs.getDocument({ data }).promise;

      const out: PdfPageText[] = [];
      for (let p = 1; p <= doc.numPages; p++) {
        const page = await doc.getPage(p);
        const content = await page.getTextContent();
        const text = content.items.map((it: any) => it.str).join(" ");
        out.push({ pageNumber: p, text });
      }
      setPages(out);
    } catch (e: any) {
      setError(e?.message || "PDF reading failed");
    } finally {
      setLoading(false);
    }
  };

  return { pages, loading, error, extract };
}
