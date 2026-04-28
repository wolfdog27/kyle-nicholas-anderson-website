import Image from "next/image";
import Link from "next/link";

const credits = [
  "Ogunquit Playhouse",
  "Dallas Theater Center",
  "Seattle Repertory Theatre",
  "Paper Mill Playhouse",
  "North Shore Music Theatre",
  "The Muny",
  "The 5th Avenue Theatre",
  "Syracuse Stage",
];

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
            className="text-6xl md:text-8xl font-light italic leading-none mb-3"
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
            &ldquo;A New York based actor with over a decade&apos;s worth of
            experience, bringing truthful storytelling to Broadway-caliber stages
            across the country.&rdquo;
          </p>
          <Link
            href="/about"
            style={{ color: "#8b4513" }}
            className="text-sm tracking-widest uppercase border-b border-current pb-0.5 hover:opacity-70 transition-opacity"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Credits strip */}
      <section style={{ backgroundColor: "#ede8e2" }} className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{
              fontFamily: "var(--font-source-sans), sans-serif",
              color: "#9b8070",
            }}
            className="text-xs tracking-[0.3em] uppercase mb-8"
          >
            Featured Credits
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {credits.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  color: "#6b4226",
                }}
                className="text-xl font-light"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section style={{ backgroundColor: "#f5f0eb" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#2c1810",
              }}
              className="text-4xl font-light italic"
            >
              Production Photos
            </h2>
            <Link
              href="/gallery"
              style={{ color: "#8b4513" }}
              className="text-xs tracking-widest uppercase border-b border-current pb-0.5 hover:opacity-70 transition-opacity hidden sm:block"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link key={i} href="/gallery" className="block overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/images/gallery/gallery-${i}${i === 1 ? ".webp" : ".jpg"}`}
                    alt={`Production photo ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/gallery"
            style={{ color: "#8b4513" }}
            className="text-xs tracking-widest uppercase border-b border-current pb-0.5 hover:opacity-70 transition-opacity sm:hidden mt-6 inline-block"
          >
            View All Photos
          </Link>
        </div>
      </section>
    </>
  );
}
