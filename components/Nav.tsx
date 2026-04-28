"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/headshots", label: "Headshot/Resume" },
  { href: "/teaching", label: "Teaching" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#f5f0eb", borderBottom: "1px solid #ede8e2" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
          className="text-base md:text-xl font-semibold whitespace-nowrap"
        >
          Kyle Nicholas Anderson
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 items-center">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-source-sans), sans-serif",
                    color: active ? "#8b4513" : "#2c1810",
                    borderBottom: active ? "1px solid #8b4513" : "none",
                  }}
                  className="text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity pb-0.5"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden shrink-0 ml-3"
          style={{ color: "#2c1810" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{ backgroundColor: "#f5f0eb", borderTop: "1px solid #ede8e2" }}
          className="md:hidden px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "var(--font-source-sans), sans-serif",
                      color: active ? "#8b4513" : "#2c1810",
                    }}
                    className="text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
