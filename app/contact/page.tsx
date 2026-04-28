import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
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
            Contact
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
            className="text-5xl md:text-6xl font-light italic"
          >
            Get in Touch
          </h1>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
              className="text-2xl font-light leading-relaxed mb-8"
            >
              Whether you&apos;re interested in booking, coaching, or just
              saying hello — Kyle would love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:KyleNicholasAnderson@gmail.com"
                style={{ color: "#8b4513", fontFamily: "var(--font-source-sans), sans-serif" }}
                className="flex items-center gap-3 text-base hover:opacity-70 transition-opacity"
              >
                <Mail size={18} />
                KyleNicholasAnderson@gmail.com
              </a>
              <a
                href="https://instagram.com/kylenicholasanderson"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8b4513", fontFamily: "var(--font-source-sans), sans-serif" }}
                className="flex items-center gap-3 text-base hover:opacity-70 transition-opacity"
              >
                <InstagramIcon size={18} />
                @kylenicholasanderson
              </a>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
