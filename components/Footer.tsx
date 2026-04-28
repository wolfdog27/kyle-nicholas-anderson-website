import Link from "next/link";
import { Mail } from "lucide-react";

function InstagramIcon({ size = 15 }: { size?: number }) {
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

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#ede8e2", borderTop: "1px solid #d4ccc4", color: "#6b4226" }}
      className="py-10"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <p
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
          className="text-2xl font-light tracking-wide"
        >
          Kyle Nicholas Anderson
        </p>

        <div className="flex gap-6 items-center">
          <a
            href="mailto:KyleNicholasAnderson@gmail.com"
            style={{ color: "#8b4513" }}
            className="flex items-center gap-1.5 text-sm hover:opacity-70 transition-opacity"
          >
            <Mail size={15} />
            KyleNicholasAnderson@gmail.com
          </a>
          <Link
            href="https://instagram.com/kylenicholasanderson"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8b4513" }}
            className="flex items-center gap-1.5 text-sm hover:opacity-70 transition-opacity"
          >
            <InstagramIcon size={15} />
            @kylenicholasanderson
          </Link>
        </div>

        <p className="text-xs" style={{ color: "#9b8070" }}>
          © {new Date().getFullYear()} Kyle Nicholas Anderson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
