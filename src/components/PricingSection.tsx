import { useState } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";

const brands = ["All", "IOCL", "HPCL", "BPCL", "JIO", "ESSAR/Nayara", "GO GAS"];

const canopies = [
  {
    brand: "IOCL",
    color: "#1a73e8",
    design: "Design A",
    rate: "₹6,500",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/IOCLA.png",
    desc: "Compact and cost-effective canopy solution for IOCL small-scale fuel stations.",
    features: ["Compact canopy structure", "Cost-effective solution", "High-quality paint finish", "Quick project completion", "Strong foundation design", "Company approved design"],
    popular: false,
  },
  {
    brand: "IOCL",
    color: "#1a73e8",
    design: "Design B",
    rate: "₹6,700",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/IOCL2.png",
    desc: "Mid-range IOCL canopy with enhanced structural design and wider span.",
    features: ["Compact canopy structure", "Cost-effective solution", "High-quality paint finish", "Quick project completion", "Strong foundation design", "Company approved design"],
    popular: true,
  },
  {
    brand: "IOCL",
    color: "#1a73e8",
    design: "Design C",
    rate: "₹7,000",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/IOCL3.png",
    desc: "Premium IOCL canopy with full fascia branding and advanced lighting provision.",
    features: ["Compact canopy structure", "Cost-effective solution", "High-quality paint finish", "Quick project completion", "Strong foundation design", "Company approved design"],
    popular: false,
  },
  {
    brand: "HPCL",
    color: "#2563eb",
    design: "Design A",
    rate: "₹6,500",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/hpcl.webp",
    desc: "Turnkey HPCL Club HP retail outlet canopy following strict corporate brand guidelines.",
    features: ["Hot-dip galvanized steel", "HPCL branding & fascia", "Wind & weather resistant", "LED lighting provision", "Column cladding included", "Company approved design"],
    popular: false,
  },
  {
    brand: "HPCL",
    color: "#2563eb",
    design: "Design B",
    rate: "₹6,700",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/hpcl2.jpeg",
    desc: "Enhanced HPCL canopy with improved structural specifications and wider coverage.",
    features: ["Hot-dip galvanized steel", "HPCL branding & fascia", "Wind & weather resistant", "LED lighting provision", "Column cladding included", "Company approved design"],
    popular: true,
  },
  {
    brand: "HPCL",
    color: "#2563eb",
    design: "Design C",
    rate: "₹7,000",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/hpcl3.jpg",
    desc: "Premium HPCL canopy with full turnkey execution for Club HP outlets pan India.",
    features: ["Hot-dip galvanized steel", "HPCL branding & fascia", "Wind & weather resistant", "LED lighting provision", "Column cladding included", "Company approved design"],
    popular: false,
  },
  {
    brand: "BPCL",
    color: "#dc2626",
    design: "Design A",
    rate: "₹6,500",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/iocl.jpg",
    desc: "Precision engineered BPCL canopies with RVI 2.0 branding elements and heavy-duty lighting.",
    features: ["BPCL design compliance", "PEB structure + RCC foundation", "High durability sheets", "Proper drainage system", "Low maintenance design", "Company approved design"],
    popular: false,
  },
  {
    brand: "JIO",
    color: "#0891b2",
    design: "Design A",
    rate: "₹7,000",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/jio%20petro.webp",
    desc: "JIO approved canopy structures for 'Pure for Sure' retail outlets with modern fascia.",
    features: ["JIO approved drawings", "Heavy-duty steel sections", "Modern fascia elevation", "UV protected roofing", "Fast-track installation", "Company approved design"],
    popular: true,
  },
  {
    brand: "ESSAR/Nayara",
    color: "#7c3aed",
    design: "Design A",
    rate: "₹6,500",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/pixelcut.webp",
    desc: "High-aesthetic canopy solutions for Nayara Energy stations with end-to-end execution.",
    features: ["Customized architectural design", "Civil + PEB work included", "Brand-specific fascia", "Weatherproof materials", "Nationwide execution", "Company approved design"],
    popular: false,
  },
  {
    brand: "GO GAS",
    color: "#059669",
    design: "Design A",
    rate: "₹6,500",
    unit: "per sqm",
    gst: "18%",
    structure: "PEB",
    imgUrl: "https://standardpetro.in/slides/GO%20GAS.webp",
    desc: "GO GAS compliant canopy structures with full civil and structural execution support.",
    features: ["GO GAS design compliance", "Full civil execution", "Branded color scheme", "Structural steel quality", "Pan India delivery", "Company approved design"],
    popular: false,
  },
];

export default function PricingSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? canopies : canopies.filter((c) => c.brand === activeFilter);

  return (
    <section id="pricing" className="py-24" style={{ background: "hsl(215 28% 7%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="section-subtitle mb-3">Canopy Pricing</div>
          <h2 className="section-title text-white mb-4">
            Canopy <span style={{ color: "hsl(var(--orange))" }}>Price List</span>
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto mb-2" style={{ color: "hsl(215 20% 60%)" }}>
            Transparent pricing for all major petroleum brands. Rates are per sqm (PEB structure).
            GST 18% applicable. Final price depends on canopy size &amp; site conditions.
          </p>
          <p className="text-xs" style={{ color: "hsl(var(--orange))" }}>
            📞 Call for custom quote: +91 73896 54447
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setActiveFilter(b)}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200"
              style={
                activeFilter === b
                  ? { background: "var(--gradient-orange)", color: "white" }
                  : {
                      background: "hsl(215 25% 13%)",
                      color: "hsl(215 20% 60%)",
                      border: "1px solid hsl(215 20% 22%)",
                    }
              }
            >
              {b}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((canopy, i) => (
            <div
              key={`${canopy.brand}-${canopy.design}-${i}`}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
              style={{
                background: "hsl(215 25% 10%)",
                border: hoveredCard === i
                  ? `1px solid ${canopy.color}66`
                  : "1px solid hsl(215 20% 18%)",
                transform: hoveredCard === i ? "translateY(-4px)" : "none",
                boxShadow: hoveredCard === i ? `0 12px 40px ${canopy.color}22` : "none",
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular badge */}
              {canopy.popular && (
                <div
                  className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "var(--gradient-orange)" }}
                >
                  ⭐ Popular
                </div>
              )}

              {/* Top accent line */}
              <div className="h-0.5 w-full" style={{ background: canopy.color }} />

              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-900">
                <img
                  src={canopy.imgUrl}
                  alt={`${canopy.brand} ${canopy.design} Canopy`}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: hoveredCard === i ? "scale(1.05)" : "scale(1)" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://standardpetro.in/image/about/hpcl-station.jpg";
                  }}
                />
                {/* Brand badge */}
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-xs font-bold text-white"
                  style={{ background: `${canopy.color}dd`, backdropFilter: "blur(6px)" }}
                >
                  {canopy.brand}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {canopy.brand} Canopy
                    <span className="block text-sm font-medium mt-0.5" style={{ color: "hsl(215 20% 55%)" }}>
                      {canopy.design}
                    </span>
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div
                      className="text-2xl font-bold"
                      style={{ fontFamily: "Rajdhani, sans-serif", color: "hsl(var(--orange))" }}
                    >
                      {canopy.rate}
                    </div>
                    <div className="text-xs" style={{ color: "hsl(215 20% 45%)" }}>
                      {canopy.unit} + GST
                    </div>
                  </div>
                </div>

                {/* Specs row */}
                <div className="flex gap-3 mb-4">
                  {[
                    { label: "Structure", val: canopy.structure },
                    { label: "GST", val: canopy.gst },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 rounded-lg px-3 py-2 text-center"
                      style={{ background: "hsl(215 22% 14%)" }}
                    >
                      <div className="text-xs" style={{ color: "hsl(215 20% 45%)" }}>{s.label}</div>
                      <div className="text-sm font-bold text-white">{s.val}</div>
                    </div>
                  ))}
                </div>

                <p className="text-xs leading-relaxed mb-4" style={{ color: "hsl(215 20% 55%)" }}>
                  {canopy.desc}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-1.5 mb-5 flex-1">
                  {canopy.features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: canopy.color }} />
                      <span className="text-xs" style={{ color: "hsl(215 20% 60%)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "var(--gradient-orange)" }}
                >
                  Get Quote for {canopy.design}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs mt-8" style={{ color: "hsl(215 20% 38%)" }}>
          * Prices are indicative rates per sqm. Final cost depends on canopy size, site location, foundation requirements, and specific brand specifications. Contact us for exact quotation.
        </p>
      </div>
    </section>
  );
}
