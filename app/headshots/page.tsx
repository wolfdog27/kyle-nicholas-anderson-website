"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const headshots = [
  { src: "/images/headshots/headshot-1.jpg", alt: "Headshot 1" },
  { src: "/images/headshots/headshot-2.jpg", alt: "Headshot 2" },
  { src: "/images/headshots/headshot-3.jpg", alt: "Headshot 3" },
  { src: "/images/headshots/headshot-4.jpg", alt: "Headshot 4" },
];

export default function Headshots() {
  const [index, setIndex] = useState(-1);

  return (
    <div style={{ backgroundColor: "#f5f0eb" }}>
      {/* Page header */}
      <div
        style={{ backgroundColor: "#ede8e2", borderBottom: "1px solid #d4ccc4" }}
        className="py-14"
      >
        <div className="max-w-6xl mx-auto px-6">
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
      </div>

      {/* Headshots grid — click to zoom */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
          className="text-xs tracking-[0.3em] uppercase mb-8"
        >
          Headshots
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {headshots.map((hs, i) => (
            <button
              key={hs.src}
              onClick={() => setIndex(i)}
              className="relative aspect-[2/3] overflow-hidden group focus:outline-none"
            >
              <Image
                src={hs.src}
                alt={hs.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        plugins={[Captions]}
        slides={headshots.map((h) => ({
          src: h.src,
          description: "Photographer: Coty Tarr",
        }))}
      />

      {/* Resume */}
      <section
        style={{ backgroundColor: "#ede8e2", borderTop: "1px solid #d4ccc4" }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p
              style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
              className="text-xs tracking-[0.3em] uppercase"
            >
              Resume
            </p>
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
              className="flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 hover:opacity-80 transition-opacity"
            >
              <Download size={14} />
              Download PDF
            </Link>
          </div>

          {/* Full resume image — no borders, no scrolling */}
          <Image
            src="/images/resume-preview.png"
            alt="Kyle Nicholas Anderson Resume"
            width={900}
            height={1165}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
