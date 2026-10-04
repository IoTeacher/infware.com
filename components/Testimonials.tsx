'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '@/data/services';
import SectionHeading from './SectionHeading';
import { cn } from '@/utils/cn';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = testimonials[i];

  return (
    <section aria-label="Testimonios" className="section">
      <div className="container-x">
        <SectionHeading center eyebrow="Testimonios" title="Lo que dicen los equipos que atendemos." />
        <div
          className="glow-card relative mx-auto mt-14 max-w-3xl p-8 sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <svg aria-hidden viewBox="0 0 32 32" className="h-10 w-10 text-neon-cyan/40" fill="currentColor"><path d="M10 8C5.6 8 3 11.4 3 16v8h9v-8H7c0-3 1.4-4.6 3-5zm15 0c-4.4 0-7 3.4-7 8v8h9v-8h-5c0-3 1.4-4.6 3-5z" /></svg>
          <div className="min-h-[11rem] sm:min-h-[9rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
                <blockquote className="mt-4 font-display text-xl leading-relaxed text-white sm:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-slate-200">{t.name}</span>
                  <span className="text-slate-500"> · {t.company}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={k === i}
                  aria-label={`Testimonio ${k + 1}`}
                  onClick={() => setI(k)}
                  className={cn('h-2 rounded-full transition-all', k === i ? 'w-8 bg-gradient-to-r from-neon-cyan to-neon-violet' : 'w-2 bg-white/20 hover:bg-white/40')}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setI((i - 1 + n) % n)} aria-label="Anterior" className="icon-btn">←</button>
              <button onClick={() => setI((i + 1) % n)} aria-label="Siguiente" className="icon-btn">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
