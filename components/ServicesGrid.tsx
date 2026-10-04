import Image from 'next/image';
import { itServices } from '@/data/services';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

export default function ServicesGrid() {
  return (
    <section id="servicios" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Servicios TI"
          title="Operación tecnológica estable, de la estación de trabajo al centro de datos."
          text="Administramos la infraestructura que tu empresa usa todos los días para que tu equipo se concentre en el negocio."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <article tabIndex={0} className="relative flex h-full flex-col overflow-hidden rounded-[inherit] focus:outline-none">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={s.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-950/70 text-neon-cyan backdrop-blur">
                      <Icon name={s.icon} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-4">
                    <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                    <ul className="mt-5 grid gap-2 text-sm text-slate-300 transition-all duration-500 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-48 lg:group-hover:opacity-100 lg:group-focus-within:max-h-48 lg:group-focus-within:opacity-100">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto pt-5 text-xs font-medium uppercase tracking-widest text-slate-500 transition-colors group-hover:text-neon-cyan hidden lg:block">
                      <span className="lg:group-hover:hidden lg:group-focus-within:hidden">Ver alcance →</span>
                    </span>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
