import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5 shadow-2xl" : "py-4"
      }`}
      style={{
        background: scrolled
          ? "hsl(215 28% 6% / 0.97)"
          : "linear-gradient(to bottom, hsl(215 28% 5% / 0.9), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid hsl(215 20% 20%)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">

        {/* 🔥 LOGO */}
        <a href="#home" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/favicon.ico"   // 👈 put your logo in public folder
            alt="PetroBuild Logo"
            className="h-9 w-auto object-contain"
          />
          <div>
            <span
              className="text-base font-bold text-white"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              STANDARD
              <span style={{ color: "hsl(var(--orange))" }}>
                PETRO
              </span>
            </span>
            <div
              className="text-[8px] hidden sm:block"
              style={{
                color: "hsl(215 20% 45%)",
                letterSpacing: "0.1em",
              }}
            >
              INFRASTRUCTURE SOLUTIONS
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link text-sm">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:+917389654447"
            className="px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 hover:bg-orange-500/10"
            style={{
              borderColor: "hsl(var(--orange) / 0.4)",
              color: "hsl(var(--orange))",
            }}
          >
            📞 Call Now
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--gradient-orange)" }}
          >
            Free Quote
          </a>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+917389654447"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
            style={{
              borderColor: "hsl(var(--orange) / 0.4)",
              color: "hsl(var(--orange))",
            }}
          >
            Call
          </a>

          <button
            className="text-white p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden mt-2 mx-3 rounded-2xl p-4 flex flex-col gap-1"
          style={{
            background: "hsl(215 25% 10%)",
            border: "1px solid hsl(var(--border))",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-sm py-2.5 px-3 rounded-lg hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
            style={{ background: "var(--gradient-orange)" }}
            onClick={() => setMenuOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}