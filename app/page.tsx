import Image from "next/image";
import Link from "next/link";
import PhotoGrid from "@/components/PhotoGrid";

const credits = [
  "Ogunquit Playhouse",
  "Dallas Theater Center",
  "Seattle Repertory Theatre",
  "Paper Mill Playhouse",
  "North Shore Music Theatre",
  "The Muny",
  "The 5th Avenue Theatre",
  "Syracuse Stage",
  "Village Theatre",
];

const photos = [
  {
    src: "/images/gallery/gallery-1.webp",
    alt: "Come From Away — Ogunquit Playhouse",
    show: "COME FROM AWAY",
    theatre: "Ogunquit Playhouse",
    photographer: "Nile Scott Studios",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Tootsie — North Shore Music Theatre",
    show: "TOOTSIE",
    theatre: "North Shore Music Theatre",
    photographer: "",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "West Side Story — 5th Avenue Theatre",
    show: "WEST SIDE STORY",
    theatre: "5th Avenue Theatre",
    photographer: "Mark and Tracy Photography",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Little Shop of Horrors — Village Theatre",
    show: "LITTLE SHOP OF HORRORS",
    theatre: "Village Theatre",
    photographer: "Angela Sterling Photography",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Something Rotten — 1st National Tour",
    show: "SOMETHING ROTTEN",
    theatre: "1st National Tour",
    photographer: "",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Les Misérables — Dallas Theater Center",
    show: "LES MISÉRABLES",
    theatre: "Dallas Theater Center",
    photographer: "Karen Almond",
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Merrily We Roll Along — Syracuse University",
    show: "MERRILY WE ROLL ALONG",
    theatre: "Syracuse University",
    photographer: "Michael Davis",
  },
  {
    src: "/images/gallery/gallery-8.jpg",
    alt: "As You Like It — Syracuse University",
    show: "AS YOU LIKE IT",
    theatre: "Syracuse University",
    photographer: "Michael Davis",
  },
  {
    src: "/images/gallery/gallery-9.jpg",
    alt: "Guys and Dolls — Village Theatre",
    show: "GUYS AND DOLLS",
    theatre: "Village Theatre",
    photographer: "Mark and Tracy Photography",
  },
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

      {/* Videos */}
      <section style={{ backgroundColor: "#f5f0eb" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2c1810",
            }}
            className="text-4xl font-light italic mb-10"
          >
            Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="relative aspect-video flex items-center justify-center"
                style={{ backgroundColor: "#d4ccc4" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "#6b4226",
                  }}
                  className="text-xl italic"
                >
                  Video {i} — Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Photos */}
      <section style={{ backgroundColor: "#ede8e2" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2c1810",
            }}
            className="text-4xl font-light italic mb-10"
          >
            Production Photos
          </h2>
          <PhotoGrid photos={photos} />
        </div>
      </section>
    </>
  );
}
