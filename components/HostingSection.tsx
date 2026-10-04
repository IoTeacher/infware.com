import { hostingServices } from '@/data/services';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function HostingSection() {
  return (
    <section id="hosting" className="section relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Infraestructura Web & Hosting"
            title="Tu presencia en internet, administrada por el mismo equipo que cuida tu red."
            text="Dominios, DNS, certificados y servidores en un solo lugar. Configuramos, migramos y damos soporte en español."
          />
          <Reveal className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
            {['NVMe', 'SSL incluido', 'Respaldos diarios', 'Correo corporativo', 'Migración sin costo'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">{t}</span>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hostingServices.map((h, i) => (
            <Reveal key={h.name} delay={(i % 3) * 0.08}>
              <article className="glow-card group h-full p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 via-neon-blue/15 to-neon-violet/25 text-white ring-1 ring-white/10">
                    <Icon name={h.icon} />
                  </div>
                  <span className="rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1 text-[11px] font-medium text-cyan-200">{h.price}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{h.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.description}</p>
                <div className="mt-5 border-t border-white/5 pt-4">
                  <p className="flex gap-2 text-sm text-slate-300">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
                    {h.benefit}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="glass flex flex-col items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-display text-lg font-semibold text-white">¿Tienes dominios o sitios con otro proveedor?</p>
              <p className="mt-1 text-sm text-slate-400">Hacemos la transferencia y migración por ti, sin perder correos ni tiempo en línea.</p>
            </div>
            <a href="#contacto" className="btn-primary shrink-0">Cotizar migración</a>
          </div>
        </Reveal>
        <p className="mt-4 text-xs text-slate-500">Precios de referencia en MXN, sujetos a cambio y a disponibilidad de la extensión o plan.</p>
      </div>
    </section>
  );
}
