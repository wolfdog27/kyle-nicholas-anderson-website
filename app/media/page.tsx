import PhotoGrid from "@/components/PhotoGrid";

const videos = [
  {
    id: "iUBJW8drza4",
    title: "Kyle Nicholas Anderson — Reel",
  },
  {
    id: "0g6H4Gi8AMg",
    title: "Kyle Nicholas Anderson — Video 2",
  },
  {
    id: "C-Vy6n0ZRsw",
    title: "Kyle Nicholas Anderson — Video 3",
  },
  {
    id: "tmX8cYnS19k",
    title: "Kyle Nicholas Anderson — Video 4",
  },
];

const credits = [
  "Ogunquit Playhouse",
  "Dallas Theater Center",
  "Seattle Repertory Theatre",
  "Paper Mill Playhouse",
  "North Shore Music Theatre",
  "The Muny",
  "The 5th Avenue Theatre",
  "Syracuse Stage",
  "Flat Rock Playhouse",
  "Village Theatre",
  "Theatre By The Sea",
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

export default function Media() {
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
            Media
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
            className="text-5xl md:text-6xl font-light italic"
          >
            Videos &amp; Photos
          </h1>
        </div>
      </div>

      {/* Videos */}
      <section style={{ backgroundColor: "#f5f0eb" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
            className="text-xs tracking-[0.3em] uppercase mb-8"
          >
            Videos
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, i) =>
              video ? (
                <div key={video.id} className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
              ) : (
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
                    Coming Soon
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Credits — separator */}
      <section style={{ backgroundColor: "#ede8e2" }} className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#9b8070" }}
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

      {/* Production Photos */}
      <section style={{ backgroundColor: "#f5f0eb" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
            className="text-xs tracking-[0.3em] uppercase mb-8"
          >
            Production Photos
          </p>
          <PhotoGrid photos={photos} />
        </div>
      </section>
    </div>
  );
}
