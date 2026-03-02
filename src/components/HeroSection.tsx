import heroImg from "@/assets/hero-station.jpg";
import { ArrowRight, Phone } from "lucide-react";

const stats = [
  { value: "4,627+", label: "Inquiries" },
  { value: "224+", label: "Projects Done" },
  { value: "10+", label: "Years Exp." },
  { value: "Pan India", label: "Coverage" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Modern petrol pump fuel station" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(215 28% 5% / 0.95) 0%, hsl(215 28% 8% / 0.80) 60%, hsl(215 28% 12% / 0.55) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--gradient-orange)", opacity: 0.6 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 pt-28 sm:pt-32 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up orange-badge mb-5 w-fit text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--orange))" }} />
            Trusted Petroleum Infrastructure Partner — Pan India
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up animate-fade-up-delay-1 text-white mb-5 font-bold leading-tight"
            style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "clamp(2rem, 6vw, 4.2rem)" }}>
            Build Your Petrol Pump with{" "}
            <span style={{ color: "hsl(var(--orange))" }}>Trusted Experts</span>
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-2 text-sm sm:text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "hsl(215 20% 70%)" }}>
            Complete petrol pump canopy design, installation &amp; maintenance for modern fuel stations. IOCL · BPCL · HPCL Certified.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 pulse-orange text-sm sm:text-base"
              style={{ background: "var(--gradient-orange)" }}
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+917389654447"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
              style={{
                background: "hsl(215 25% 15% / 0.8)",
                color: "white",
                border: "1px solid hsl(215 20% 30%)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Phone className="w-4 h-4" style={{ color: "hsl(var(--orange))" }} />
              +91 73896 54447
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="animate-fade-up animate-fade-up-delay-4 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden w-full max-w-2xl"
          style={{ background: "hsl(215 25% 10% / 0.85)", border: "1px solid hsl(215 20% 22%)", backdropFilter: "blur(12px)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-5"
              style={{ borderRight: i < stats.length - 1 ? "1px solid hsl(215 20% 22%)" : "none", borderBottom: i < 2 ? "1px solid hsl(215 20% 22%)" : "none" }}
            >
              <div className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: "hsl(var(--orange))" }}>
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "hsl(215 20% 55%)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
