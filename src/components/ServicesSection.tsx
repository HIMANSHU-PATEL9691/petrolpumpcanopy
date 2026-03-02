import { Tent, Zap, Wrench, Camera, HardHat, Sun } from "lucide-react";

const services = [
  { icon: Tent, title: "Canopy Design & Installation", desc: "Custom canopies for IOCL, BPCL, HPCL. Complete fabrication, supply, and installation with brand-approved specifications." },
  { icon: HardHat, title: "Fuel Station Setup & Civil Work", desc: "Complete fuel station setup from ground zero including RCC construction, flooring, sump pits, and forecourt planning." },
  { icon: Zap, title: "Electrical Work", desc: "Full electrical infrastructure including panel boards, wiring, LED canopy lighting, ATM/POS connectivity." },
  { icon: Camera, title: "CCTV & Safety Systems", desc: "IP-based CCTV surveillance, fire detection systems, earthing & lightning protection, and complete safety compliance." },
  { icon: Wrench, title: "Maintenance & Repair", desc: "Annual maintenance contracts, emergency repairs, canopy re-painting, fascia replacement, and pump servicing." },
  { icon: Sun, title: "Solar Energy Solutions", desc: "Rooftop solar panel installation on canopies for energy savings. Grid-tied and off-grid solutions available." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle mb-3">What We Do</div>
          <h2 className="section-title text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Our <span style={{ color: "hsl(var(--orange))" }}>Specialization</span>
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: "hsl(215 20% 60%)" }}>
            Complete Pre-Engineering Building solutions under one roof — from small scale services to heavy industrial jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className="service-card">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "hsl(var(--orange) / 0.12)", border: "1px solid hsl(var(--orange) / 0.25)" }}>
                  <Icon className="w-5 h-5" style={{ color: "hsl(var(--orange))" }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(215 20% 58%)" }}>{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
