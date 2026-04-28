import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Kyle Nicholas Anderson"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(44,24,16,0.82) 0%, rgba(44,24,16,0.2) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#f5f0eb",
            }}
            className="text-5xl sm:text-6xl md:text-8xl font-light italic leading-none mb-3"
          >
            Kyle Nicholas Anderson
          </h1>
          <p
            style={{
              fontFamily: "var(--font-source-sans), sans-serif",
              color: "#d4ccc4",
            }}
            className="text-sm tracking-[0.25em] uppercase mb-8"
          >
            Actor &nbsp;·&nbsp; Performer &nbsp;·&nbsp; Teaching Artist
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #d4ccc4",
              color: "#f5f0eb",
              fontFamily: "var(--font-source-sans), sans-serif",
            }}
            className="inline-block text-xs tracking-widest uppercase px-7 py-3 hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Bio teaser */}
      <section
        style={{ backgroundColor: "#f5f0eb" }}
        className="py-20 max-w-6xl mx-auto px-6"
      >
        <div className="max-w-2xl">
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2c1810",
            }}
            className="text-2xl md:text-3xl font-light leading-relaxed mb-6"
          >
            A New York based actor with over a decade&apos;s worth of experience,
            bringing truthful storytelling to Broadway-caliber stages across the
            country.
          </p>
          <Link
            href="/contact"
            style={{ color: "#8b4513" }}
            className="text-sm tracking-widest uppercase border-b border-current pb-0.5 hover:opacity-70 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
