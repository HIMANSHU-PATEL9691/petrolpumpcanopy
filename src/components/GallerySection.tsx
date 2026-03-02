import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import heroStation from "@/assets/hero-station.jpg";
import canopyInstall from "@/assets/canopy-install.jpg";
import aboutImg from "@/assets/about-img.jpg";

const projects = [
  { img: heroStation, title: "HPCL Night Station", location: "Madhya Pradesh" },
  { img: gallery3, title: "Modern Canopy Build", location: "Maharashtra" },
  { img: gallery1, title: "Illuminated Forecourt", location: "Rajasthan" },
  { img: canopyInstall, title: "Canopy Installation", location: "Gujarat" },
  { img: gallery2, title: "CCTV & Safety Setup", location: "Delhi NCR" },
  { img: aboutImg, title: "Team Site Inspection", location: "Uttar Pradesh" },
];

export default function GallerySection() {
  return (
    <section id="projects" className="py-16 sm:py-24" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle mb-3">Our Projects</div>
          <h2 className="section-title text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Completed <span style={{ color: "hsl(var(--orange))" }}>Projects Gallery</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "hsl(215 20% 60%)" }}>
            224+ fuel station projects delivered across India. Quality craftsmanship in every installation.
          </p>
        </div>

        {/* Mobile: simple 2-col grid. Desktop: masonry-style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer ${i === 0 ? "col-span-2 md:col-span-2" : ""}`}
              style={{ border: "1px solid hsl(var(--border))", aspectRatio: i === 0 ? "16/7" : "4/3" }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "linear-gradient(to top, hsl(215 28% 5% / 0.9) 0%, transparent 60%)" }}
              >
                <h3 className="text-white font-bold text-sm sm:text-base" style={{ fontFamily: "Rajdhani, sans-serif" }}>{project.title}</h3>
                <p className="text-xs" style={{ color: "hsl(var(--orange))" }}>📍 {project.location}</p>
              </div>
              <div
                className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold"
                style={{ background: "hsl(215 28% 7% / 0.85)", color: "hsl(var(--orange))", border: "1px solid hsl(var(--orange) / 0.3)", backdropFilter: "blur(6px)" }}
              >
                {project.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
