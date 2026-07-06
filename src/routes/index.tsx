import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Scissors, Palette, Sparkles, Heart, Flower2, Brush, Star, Phone, MapPin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroSalon from "@/assets/hero-salon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Beauty Studio — Salón de belleza y peluquería" },
      { name: "description", content: "Salón de belleza elegante en el corazón de la ciudad. Cortes, color, tratamientos, uñas y más. Reserva tu cita en Aura Beauty Studio." },
      { property: "og:title", content: "Aura Beauty Studio" },
      { property: "og:description", content: "Experiencias de belleza únicas en un ambiente elegante y femenino." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Scissors, name: "Cortes", desc: "Estilos personalizados que realzan tu esencia.", price: "Desde $35" },
  { icon: Palette, name: "Color", desc: "Balayage, mechas y coloración profesional.", price: "Desde $80" },
  { icon: Sparkles, name: "Tratamientos", desc: "Hidratación profunda y keratina.", price: "Desde $50" },
  { icon: Flower2, name: "Uñas", desc: "Manicura, pedicura y nail art.", price: "Desde $30" },
  { icon: Brush, name: "Maquillaje", desc: "Día, noche y eventos especiales.", price: "Desde $60" },
  { icon: Heart, name: "Spa Facial", desc: "Limpieza, hidratación y antiedad.", price: "Desde $70" },
];

const team = [
  { img: team1, name: "Sofía Mendoza", role: "Directora & Estilista Senior" },
  { img: team2, name: "Maquillaje & Color", role: "Especialistas certificadas" },
  { img: team3, name: "Camila Rivas", role: "Nail Artist & Esteticista" },
];

const testimonials = [
  { name: "Lucía P.", text: "Salí del salón sintiéndome la mejor versión de mí. Atención impecable y un espacio precioso." },
  { name: "Andrea M.", text: "El equipo entendió exactamente lo que quería. Mi color quedó espectacular." },
  { name: "Valentina R.", text: "Cada visita es una experiencia. Aura se siente como un refugio." },
];

function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reserva enviada", { description: "Te contactaremos pronto para confirmar tu cita." });
    setForm({ name: "", phone: "", service: "", date: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-wide">
            Aura <span className="text-[var(--gold)]">·</span> Beauty
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
            <a href="#galeria" className="hover:text-foreground transition">Galería</a>
            <a href="#equipo" className="hover:text-foreground transition">Equipo</a>
            <a href="#testimonios" className="hover:text-foreground transition">Testimonios</a>
          </nav>
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
            <a href="#reservas">Reservar</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Salón de belleza</span>
            <h1 className="text-5xl md:text-7xl leading-[1.05]">
              Tu belleza,<br/>
              <em className="text-primary not-italic font-light">cuidada con arte.</em>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              En Aura Beauty Studio creamos experiencias únicas donde el detalle, el cuidado y la elegancia se encuentran.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8">
                <a href="#reservas">Reserva tu cita</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 px-8">
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div><span className="text-2xl text-foreground font-display block">+8</span>años de experiencia</div>
              <div><span className="text-2xl text-foreground font-display block">2k+</span>clientas felices</div>
              <div><span className="text-2xl text-foreground font-display block">4.9★</span>valoración</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--blush)] -z-10 translate-x-4 translate-y-4" />
            <img src={heroSalon} alt="Interior elegante de Aura Beauty Studio" width={1600} height={1024}
              className="rounded-[2rem] shadow-[var(--shadow-soft)] w-full h-[560px] object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Nuestros servicios</span>
            <h2 className="text-4xl md:text-5xl mt-4">Cada detalle, pensado para ti</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="group p-8 rounded-2xl bg-card border border-border hover:border-[var(--gold)]/50 transition-all hover:shadow-[var(--shadow-soft)]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[var(--blush)] text-primary group-hover:bg-[var(--gold)]/20 transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-sm text-[var(--gold)] font-medium">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-28 bg-[var(--blush)]/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Galería</span>
              <h2 className="text-4xl md:text-5xl mt-4">Trabajos que enamoran</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Una selección de momentos creados con dedicación en nuestro estudio.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i % 2 === 0 ? "md:translate-y-8" : ""}`}>
                <img src={img} alt={`Trabajo ${i+1}`} loading="lazy" width={800} height={1024}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Nuestro equipo</span>
            <h2 className="text-4xl md:text-5xl mt-4">Manos expertas, corazón apasionado</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img src={m.img} alt={m.name} loading="lazy" width={800} height={1000}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-28 bg-[var(--blush)]/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Testimonios</span>
            <h2 className="text-4xl md:text-5xl mt-4">Lo que dicen nuestras clientas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-display text-xl leading-relaxed text-foreground/90 mb-6">"{t.text}"</p>
                <p className="text-sm text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="reservas" className="py-28">
        <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Reservas</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">Agenda tu momento</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Déjanos tus datos y nos pondremos en contacto contigo para confirmar tu cita.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[var(--gold)]" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[var(--gold)]" /> hola@aurabeauty.com</div>
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[var(--gold)]" /> Av. Las Flores 234, Centro</div>
              <div className="flex items-center gap-3"><Instagram className="w-4 h-4 text-[var(--gold)]" /> @aurabeautystudio</div>
            </div>
          </div>
          <form onSubmit={submit} className="space-y-4 p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)]">
            <Input required placeholder="Nombre completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input required placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
              <option value="">Selecciona un servicio</option>
              {services.map((s) => <option key={s.name}>{s.name}</option>)}
            </select>
            <Input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <Textarea placeholder="Notas (opcional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            <Button type="submit" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 h-12">
              Solicitar reserva
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-xl text-foreground mb-2">Aura Beauty Studio</p>
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
