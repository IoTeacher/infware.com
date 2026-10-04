import Image from 'next/image';
import { solutions } from '@/data/services';
import { images } from '@/utils/images';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="section">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Soluciones empresariales"
            title="Proyectos completos, con un responsable técnico de principio a fin."
            text="Planeamos, implementamos y documentamos. Al terminar, tu equipo recibe diagramas, credenciales y un plan de mantenimiento."
          />
          <Reveal delay={0.1} className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:block">
            <Image src={images.rack} alt="Interior de un disco duro de servidor" fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/80 via-transparent to-neon-violet/20" />
          </Reveal>
        </div>

        <ol className="relative space-y-4">
          <span aria-hidden className="gradient-line-v absolute bottom-6 left-[1.6rem] top-6 w-px" />
          {solutions.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.06}>
                <div className="glow-card group relative flex gap-5 p-6 transition-transform duration-300 hover:translate-x-1">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-950 text-neon-cyan ring-1 ring-neon-cyan/30">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500">0{i + 1}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
