import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", service: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inp = {
    background: "hsl(215 22% 14%)",
    border: "1px solid hsl(215 20% 22%)",
    color: "hsl(210 40% 90%)",
    borderRadius: "0.75rem",
    padding: "0.7rem 0.9rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const fo = (e: React.FocusEvent) => { (e.target as HTMLElement).style.borderColor = "hsl(var(--orange) / 0.6)"; };
  const bl = (e: React.FocusEvent) => { (e.target as HTMLElement).style.borderColor = "hsl(215 20% 22%)"; };

  const contacts = [
    { icon: Phone, title: "Call Us", lines: ["+91 73896 54447"], href: "tel:+917389654447" },
    { icon: Mail, title: "Email Us", lines: ["info@petrobuild.in"], href: "mailto:info@petrobuild.in" },
    { icon: MapPin, title: "Our Office", lines: ["Indore, Madhya Pradesh – 452001"], href: "https://maps.google.com" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle mb-3">Get In Touch</div>
          <h2 className="section-title text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Start Your Project <span style={{ color: "hsl(var(--orange))" }}>Today</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "hsl(215 20% 60%)" }}>
            Our team responds within 24 hours with a detailed quotation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-2xl transition-all duration-200"
                  style={{ background: "hsl(215 25% 11%)", border: "1px solid hsl(215 20% 20%)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--orange) / 0.4)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 20% 20%)"; }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--orange) / 0.12)", border: "1px solid hsl(var(--orange) / 0.2)" }}>
                    <Icon className="w-4 h-4" style={{ color: "hsl(var(--orange))" }} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm mb-0.5" style={{ fontFamily: "Rajdhani, sans-serif" }}>{item.title}</div>
                    {item.lines.map((l) => <div key={l} className="text-xs" style={{ color: "hsl(215 20% 58%)" }}>{l}</div>)}
                  </div>
                </a>
              );
            })}

            <a
              href="https://wa.me/917389654447?text=Hello%2C%20I%20am%20interested%20in%20petrol%20pump%20canopy%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold text-white transition-all duration-200 hover:opacity-90 text-sm"
              style={{ background: "#25d366" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Mobile sticky CTA */}
            <div
              className="sm:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2 p-3"
              style={{ background: "hsl(215 28% 6% / 0.97)", borderTop: "1px solid hsl(215 20% 18%)", backdropFilter: "blur(12px)" }}
            >
              <a href="tel:+917389654447"
                className="flex-1 py-3 rounded-xl text-sm font-semibold text-center border"
                style={{ borderColor: "hsl(var(--orange) / 0.5)", color: "hsl(var(--orange))" }}>
                📞 Call Now
              </a>
              <a href="https://wa.me/917389654447"
                className="flex-1 py-3 rounded-xl text-sm font-semibold text-center text-white"
                style={{ background: "#25d366" }}>
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-0"
            style={{ background: "hsl(215 25% 11%)", border: "1px solid hsl(215 20% 20%)" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <CheckCircle className="w-14 h-14" style={{ color: "hsl(var(--orange))" }} />
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Thank You!</h3>
                <p className="text-sm" style={{ color: "hsl(215 20% 60%)" }}>We'll contact you within 24 hours with a detailed quotation.</p>
                <button onClick={() => setSubmitted(false)} className="mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ background: "var(--gradient-orange)" }}>
                  Send Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>Request Free Consultation</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "hsl(215 20% 55%)" }}>Full Name *</label>
                    <input name="name" required placeholder="Your full name" value={form.name} onChange={handleChange} style={inp} onFocus={fo} onBlur={bl} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "hsl(215 20% 55%)" }}>Phone Number *</label>
                    <input name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} style={inp} onFocus={fo} onBlur={bl} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "hsl(215 20% 55%)" }}>Email Address</label>
                  <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} style={inp} onFocus={fo} onBlur={bl} />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "hsl(215 20% 55%)" }}>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange} style={{ ...inp, cursor: "pointer" }} onFocus={fo} onBlur={bl}>
                    <option value="" style={{ background: "hsl(215 22% 14%)" }}>Select a service</option>
                    {["Petrol Pump Canopy", "Fuel Station Setup", "Electrical Work", "CCTV & Safety", "Maintenance & Repair", "Solar Energy"].map((s) => (
                      <option key={s} value={s.toLowerCase()} style={{ background: "hsl(215 22% 14%)" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "hsl(215 20% 55%)" }}>Project Details</label>
                  <textarea name="message" placeholder="Tell us about your project — location, type of pump, timeline..." value={form.message} onChange={handleChange} rows={3} style={{ ...inp, resize: "none" }} onFocus={fo} onBlur={bl} />
                </div>

                <button type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 text-sm"
                  style={{ background: "var(--gradient-orange)" }}>
                  <Send className="w-4 h-4" />
                  Send Request — It's Free!
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
