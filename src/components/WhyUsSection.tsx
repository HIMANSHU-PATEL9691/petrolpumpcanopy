import { Award, Package, Clock, IndianRupee, MapPin, ShieldCheck } from "lucide-react";

const features = [
  { icon: Award, title: "10+ Years Experience", desc: "Over a decade of hands-on expertise in petrol pump construction, canopy installation, and infrastructure projects." },
  { icon: Package, title: "ISO Quality Materials", desc: "We use only certified, high-grade steel and industrial materials that meet petroleum industry standards." },
  { icon: Clock, title: "Fast Project Delivery", desc: "Streamlined processes and dedicated teams ensure your fuel station is ready on schedule, every time." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive pricing with transparent quotations. Direct manufacturer partnerships keep costs low." },
  { icon: MapPin, title: "Pan India Service", desc: "Active project teams across India — from metros to tier-2 cities. No location is too far for us." },
  { icon: ShieldCheck, title: "Full Safety Compliance", desc: "Every project meets PESO, PCRA, and oil company safety standards. Your station, built to last." },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24" style={{ background: "hsl(215 25% 9%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle mb-3">Why Choose Us</div>
          <h2 className="section-title text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            The <span style={{ color: "hsl(var(--orange))" }}>PetroBuild</span> Advantage
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "hsl(215 20% 60%)" }}>
            We don't just build structures — we build trust, reliability, and long-term partnerships with fuel station owners across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="feature-item group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: "hsl(var(--orange) / 0.1)", border: "1px solid hsl(var(--orange) / 0.2)" }}>
                  <Icon className="w-5 h-5" style={{ color: "hsl(var(--orange))" }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>{feat.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(215 20% 58%)" }}>{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: "linear-gradient(135deg, hsl(24 95% 53% / 0.12), hsl(24 80% 45% / 0.05))", border: "1px solid hsl(var(--orange) / 0.25)" }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Ready to Start Your Fuel Station Project?
            </h3>
            <p className="text-sm" style={{ color: "hsl(215 20% 62%)" }}>Get a free site assessment and detailed quotation within 24 hours.</p>
          </div>
          <a href="#contact" className="whitespace-nowrap px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 flex-shrink-0 text-sm"
            style={{ background: "var(--gradient-orange)" }}>
            Get Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
