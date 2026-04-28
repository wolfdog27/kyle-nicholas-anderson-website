"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Photo {
  src: string;
  alt: string;
  theatre?: string;
  show?: string;
  photographer?: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <div key={photo.src}>
            <button
              onClick={() => setIndex(i)}
              className="block w-full overflow-hidden group focus:outline-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </button>

            {/* Caption tags */}
            {(photo.theatre || photo.show || photo.photographer) && (
              <div className="pt-2 pb-1 space-y-0.5">
                {photo.show && (
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "#2c1810",
                    }}
                    className="text-sm font-light italic leading-tight"
                  >
                    {photo.show}
                  </p>
                )}
                {photo.theatre && (
                  <p
                    style={{
                      fontFamily: "var(--font-source-sans), sans-serif",
                      color: "#6b4226",
                    }}
                    className="text-xs leading-tight"
                  >
                    {photo.theatre}
                  </p>
                )}
                {photo.photographer && (
                  <p
                    style={{
                      fontFamily: "var(--font-source-sans), sans-serif",
                      color: "#9b8070",
                    }}
                    className="text-xs leading-tight"
                  >
                    Photo: {photo.photographer}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </>
  );
}
