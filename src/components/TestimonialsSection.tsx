import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar Verma",
    role: "HPCL Dealer, Madhya Pradesh",
    rating: 5,
    text: "Outstanding service from start to finish! The canopy installation was completed within the promised timeline and quality is exceptional. My fuel station looks premium now. Highly recommend PetroBuild!",
    initials: "RK",
  },
  {
    name: "Suresh Patil",
    role: "BPCL Dealer, Maharashtra",
    rating: 5,
    text: "PetroBuild understands petroleum industry standards perfectly. CCTV setup, electrical work, and canopy all done perfectly. Great team, great pricing! Would definitely hire again for future projects.",
    initials: "SP",
  },
  {
    name: "Anil Sharma",
    role: "IOCL Contractor, Rajasthan",
    rating: 5,
    text: "As a contractor for multiple petrol pumps, I've worked with many vendors. PetroBuild stands out for their professionalism, quality materials, and on-time delivery. My go-to partner.",
    initials: "AS",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24" style={{ background: "hsl(215 25% 9%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle mb-3">Client Reviews</div>
          <h2 className="section-title text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            What Our <span style={{ color: "hsl(var(--orange))" }}>Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "hsl(215 20% 60%)" }}>
            Join 200+ satisfied petrol pump owners and contractors who trust PetroBuild.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <Quote className="w-7 h-7 mb-4" style={{ color: "hsl(var(--orange) / 0.4)" }} />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "hsl(var(--orange))" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "hsl(215 20% 68%)" }}>"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "var(--gradient-orange)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "hsl(215 20% 55%)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
