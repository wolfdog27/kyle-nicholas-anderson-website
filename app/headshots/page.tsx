import Link from "next/link";
import { Download } from "lucide-react";

export default function Headshots() {
  return (
    <div style={{ backgroundColor: "#f5f0eb" }}>
      {/* Page header */}
      <div
        style={{ backgroundColor: "#ede8e2", borderBottom: "1px solid #d4ccc4" }}
        className="py-14"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-end justify-between">
          <div>
            <p
              style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
              className="text-xs tracking-[0.3em] uppercase mb-2"
            >
              Materials
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
              className="text-5xl md:text-6xl font-light italic"
            >
              Headshot/Resume
            </h1>
          </div>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{
              backgroundColor: "#8b4513",
              color: "#f5f0eb",
              fontFamily: "var(--font-source-sans), sans-serif",
            }}
            className="flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 hover:opacity-80 transition-opacity shrink-0"
          >
            <Download size={14} />
            Download PDF
          </Link>
        </div>
      </div>

      {/* PDF viewer — full width, no browser chrome */}
      <div className="w-full" style={{ height: "calc(100vh - 160px)" }}>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          title="Kyle Nicholas Anderson Resume"
        />
      </div>
    </div>
  );
}
