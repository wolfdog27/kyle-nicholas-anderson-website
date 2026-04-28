import PhotoGrid from "@/components/PhotoGrid";

const photos = [
  { src: "/images/gallery/gallery-1.webp", alt: "Production photo 1" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Production photo 2" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Production photo 3" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Production photo 4" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Production photo 5" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Production photo 6" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Production photo 7" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Production photo 8" },
  { src: "/images/gallery/gallery-9.jpg", alt: "Production photo 9" },
];

export default function Gallery() {
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
            Gallery
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
            className="text-5xl md:text-6xl font-light italic"
          >
            Production Photos
          </h1>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <PhotoGrid photos={photos} />
      </section>
    </div>
  );
}
