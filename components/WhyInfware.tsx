import { reasons } from '@/data/services';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function WhyInfware() {
  return (
    <section id="nosotros" className="section relative">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-900 to-transparent" />
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Por qué Infware"
          title="Un equipo técnico local con estándares de proveedor empresarial."
          text="Somos ingenieros en Tijuana con experiencia en redes, servidores, nube y formación en TI. Trabajamos con procesos, documentación y tiempos de respuesta medibles."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="glow-card h-full p-6 text-center transition-transform duration-300 hover:-translate-y-1.5">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-neon-cyan ring-1 ring-white/10">
                  <Icon name={r.icon} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
