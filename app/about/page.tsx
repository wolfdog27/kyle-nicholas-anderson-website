import Image from "next/image";

const companies = [
  "Ogunquit Playhouse",
  "Dallas Theater Center",
  "Seattle Repertory Theatre",
  "Paper Mill Playhouse",
  "North Shore Music Theatre",
  "The Muny",
  "The 5th Avenue Theatre",
  "Syracuse Stage",
];

export default function About() {
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
            About
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
            className="text-5xl md:text-6xl font-light italic"
          >
            Kyle Nicholas Anderson
          </h1>
        </div>
      </div>

      {/* Bio section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Portrait */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/headshots/headshot-2.jpg"
              alt="Kyle Nicholas Anderson"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center">
            <p
              style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#2c1810" }}
              className="text-lg leading-relaxed mb-6"
            >
              Kyle Nicholas Anderson is a New York based actor with over a
              decade&apos;s worth of experience in professional theatre. Known
              for his commitment to truthful character work and bold artistic
              choices, Kyle has toured nationally and collaborated with some of
              the country&apos;s most prestigious theatre companies.
            </p>
            <p
              style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#2c1810" }}
              className="text-lg leading-relaxed mb-6"
            >
              A graduate of Syracuse University, Kyle studied under the
              mentorship of Ralph Zito and Tim Bond, where he developed the
              rigorous craft and versatility that define his work on stage today.
            </p>
            <p
              style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#2c1810" }}
              className="text-lg leading-relaxed"
            >
              In addition to performing, Kyle is a dedicated teaching artist,
              offering private coaching and educational programming rooted in his
              decade-plus of professional experience. He believes deeply in
              accessible arts training and works to ensure financial barriers
              never stand in the way of pursuing a life in the theatre.
            </p>
          </div>
        </div>
      </section>

      {/* Theater credits */}
      <section style={{ backgroundColor: "#ede8e2" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
            className="text-xs tracking-[0.3em] uppercase mb-10"
          >
            Select Theater Credits
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px"
            style={{ backgroundColor: "#d4ccc4" }}>
            {companies.map((c) => (
              <div
                key={c}
                style={{ backgroundColor: "#ede8e2" }}
                className="px-6 py-8"
              >
                <p
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
                  className="text-xl font-light"
                >
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
          className="text-xs tracking-[0.3em] uppercase mb-6"
        >
          Training
        </p>
        <p
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
          className="text-2xl font-light"
        >
          BFA, Musical Theatre — Syracuse University
        </p>
        <p
          style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#6b4226" }}
          className="text-base mt-2"
        >
          Studied under Ralph Zito and Tim Bond
        </p>
      </section>
    </div>
  );
}
