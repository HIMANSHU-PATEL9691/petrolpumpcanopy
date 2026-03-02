import { Flame, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: ["Canopy Design & Installation", "Fuel Station Setup", "Electrical Work", "CCTV & Safety Systems", "Maintenance & Repair", "Solar Energy"],
  "Quick Links": ["About Us", "Canopy Pricing", "Our Projects", "Why Choose Us", "Testimonials", "Contact Us"],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "hsl(215 28% 5%)", borderTop: "1px solid hsl(215 20% 15%)" }}>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand - full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-orange)" }}>
                <Flame className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                PETRO<span style={{ color: "hsl(var(--orange))" }}>BUILD</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "hsl(215 20% 50%)" }}>
              India's trusted petroleum infrastructure partner. Complete petrol pump canopy and fuel station solutions across India.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Phone, text: "+91 73896 54447" },
                { icon: Mail, text: "info@petrobuild.in" },
                { icon: MapPin, text: "Indore, Madhya Pradesh" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--orange))" }} />
                  <span className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-3 text-xs tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs transition-colors duration-200" style={{ color: "hsl(215 20% 50%)" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "hsl(var(--orange))"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "hsl(215 20% 50%)"; }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brands */}
          <div>
            <h4 className="font-bold text-white mb-3 text-xs tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>Approved By</h4>
            <div className="flex flex-wrap gap-2">
              {["IOCL", "BPCL", "HPCL", "JIO", "ESSAR"].map((brand) => (
                <span key={brand} className="px-2.5 py-1 rounded-md text-xs font-bold"
                  style={{ background: "hsl(215 22% 14%)", border: "1px solid hsl(215 20% 22%)", color: "hsl(215 20% 55%)" }}>
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs mb-2" style={{ color: "hsl(215 20% 40%)" }}>Stay Updated</p>
              <div className="flex gap-2">
                <input placeholder="Your email" className="flex-1 px-2.5 py-2 rounded-lg text-xs min-w-0"
                  style={{ background: "hsl(215 22% 14%)", border: "1px solid hsl(215 20% 22%)", color: "white", outline: "none" }} />
                <button className="px-3 py-2 rounded-lg text-xs font-semibold text-white flex-shrink-0" style={{ background: "var(--gradient-orange)" }}>→</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid hsl(215 20% 15%)", color: "hsl(215 20% 40%)" }}>
          <span className="text-center sm:text-left">© {year} PetroBuild Infrastructure Solutions. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
