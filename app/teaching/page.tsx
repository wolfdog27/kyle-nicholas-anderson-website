import Link from "next/link";
import { Mic, GraduationCap, Users } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Private Coaching",
    description:
      "One-on-one sessions tailored to your goals — whether you're preparing an audition, working a callback, or developing your craft through the Actor Gym. Kyle focuses on material analysis, truthful character work, and making distinctive choices that highlight your strengths.",
    items: [
      "Audition preparation",
      "Callback coaching",
      "Actor Gym (monologues, songs, dance, vocals)",
    ],
  },
  {
    icon: GraduationCap,
    title: "College Audition Prep",
    description:
      "A comprehensive preparation package designed for students pursuing BFA and BA programs. Kyle will help you build a polished, well-rounded audition book that showcases range and readiness.",
    items: [
      "Four contrasting songs",
      "Four contrasting monologues",
      "Two dance combos",
    ],
  },
  {
    icon: Users,
    title: "Teaching Artist",
    description:
      "On-site residencies and workshops drawing from over a decade of professional experience. Kyle brings rigorous, practical curriculum to schools, conservatories, and community arts programs.",
    items: [
      "Scene study & audition technique",
      "Song & text analysis",
      "Character development",
      "Choreography pickup",
      "Self-tape production",
    ],
  },
];

export default function Teaching() {
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
            Teaching
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
            className="text-5xl md:text-6xl font-light italic"
          >
            Coaching &amp; Teaching
          </h1>
        </div>
      </div>

      {/* Services */}
      <section style={{ backgroundColor: "#ede8e2" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ color: "#9b8070", fontFamily: "var(--font-source-sans), sans-serif" }}
            className="text-xs tracking-[0.3em] uppercase mb-10"
          >
            Services
          </p>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "#d4ccc4" }}>
            {services.map(({ icon: Icon, title, description, items }) => (
              <div
                key={title}
                style={{ backgroundColor: "#ede8e2" }}
                className="px-8 py-10 flex flex-col"
              >
                <Icon size={22} style={{ color: "#8b4513" }} className="mb-5" />
                <h3
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
                  className="text-2xl font-light mb-4"
                >
                  {title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#6b4226" }}
                  className="text-sm leading-relaxed mb-6"
                >
                  {description}
                </p>
                <ul className="mt-auto space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "var(--font-source-sans), sans-serif",
                        color: "#2c1810",
                      }}
                      className="text-sm flex items-start gap-2"
                    >
                      <span style={{ color: "#8b4513" }} className="mt-1">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
          className="text-4xl font-light italic mb-4"
        >
          Ready to get started?
        </h2>
        <p
          style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#6b4226" }}
          className="text-base mb-8 max-w-md mx-auto"
        >
          Fill out the inquiry form and Kyle will be in touch to discuss your
          goals and schedule your first session.
        </p>
        <Link
          href="/contact"
          style={{
            backgroundColor: "#8b4513",
            color: "#f5f0eb",
            fontFamily: "var(--font-source-sans), sans-serif",
          }}
          className="inline-block text-xs tracking-widest uppercase px-10 py-4 hover:opacity-80 transition-opacity"
        >
          Send an Inquiry
        </Link>
      </section>
    </div>
  );
}
