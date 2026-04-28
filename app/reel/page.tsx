export default function Reel() {
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
            Reel
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
            className="text-5xl md:text-6xl font-light italic"
          >
            Video Reel
          </h1>
        </div>
      </div>

      {/* Placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#6b4226" }}
          className="text-2xl font-light italic mb-4"
        >
          Coming Soon
        </p>
        <p
          style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#9b8070" }}
          className="text-base max-w-md mx-auto"
        >
          Video content will be added here shortly. In the meantime, feel free to{" "}
          <a
            href="/contact"
            style={{ color: "#8b4513" }}
            className="border-b border-current hover:opacity-70 transition-opacity"
          >
            reach out
          </a>{" "}
          for a copy of the current reel.
        </p>
      </section>
    </div>
  );
}
