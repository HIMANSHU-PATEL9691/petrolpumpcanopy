import aboutImg from "@/assets/about-img.jpg";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Direct partnership with leading manufacturers",
  "IOCL, BPCL, HPCL approved designs",
  "ISO quality certified materials",
  "End-to-end project management",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24" style={{ background: "hsl(215 25% 9%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ background: "var(--gradient-orange)", filter: "blur(40px)" }} />
            <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid hsl(var(--border))" }}>
              <img src={aboutImg} alt="Our expert team at petrol pump construction site" className="w-full h-64 sm:h-80 md:h-96 object-cover" />
              <div
                className="absolute bottom-4 left-4 px-4 py-2.5 rounded-xl"
                style={{ background: "hsl(215 28% 7% / 0.9)", border: "1px solid hsl(var(--orange) / 0.4)", backdropFilter: "blur(8px)" }}
              >
                <div className="text-2xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: "hsl(var(--orange))" }}>10+ Years</div>
                <div className="text-xs" style={{ color: "hsl(215 20% 65%)" }}>of Industry Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-subtitle mb-3">About Us</div>
            <h2 className="section-title text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              We're The <span style={{ color: "hsl(var(--orange))" }}>Trusted Experts</span>{" "}
              in Petrol Pump Infrastructure
            </h2>
            <p className="text-sm sm:text-base mb-4 leading-relaxed" style={{ color: "hsl(215 20% 62%)" }}>
              We are a leading provider of petrol pump canopy and infrastructure solutions. With over a decade of experience, we deliver high-quality, safe, and durable structures tailored to modern fuel station needs.
            </p>
            <p className="text-sm sm:text-base mb-6 leading-relaxed" style={{ color: "hsl(215 20% 62%)" }}>
              Partnering directly with manufacturers, we offer a comprehensive range of petrol pump products at competitive prices — from architecture planning to complete canopy installation and maintenance across India.
            </p>

            <div className="grid gap-2.5 mb-7">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--orange))" }} />
                  <span className="text-sm font-medium" style={{ color: "hsl(215 20% 78%)" }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--gradient-orange)" }}>
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
