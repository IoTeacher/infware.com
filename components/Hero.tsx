'use client';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { images } from '@/utils/images';
import { stats } from '@/data/services';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="inicio" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-110">
        <Image src={images.hero} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.18),transparent_55%)]" />
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="noise absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -right-32 top-1/4 -z-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-blue/25 to-neon-violet/30 blur-3xl" />
      <div aria-hidden className="absolute -left-40 bottom-0 -z-10 h-80 w-80 animate-blob rounded-full bg-neon-violet/20 blur-3xl [animation-delay:-6s]" />

      <motion.div style={{ opacity: fade }} className="container-x w-full">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Soporte TI · Redes · Hosting — Tijuana, B.C.
          </motion.p>
          <motion.h1 variants={item} className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Infraestructura TI <span className="text-gradient">sin interrupciones.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Soporte técnico, redes corporativas, integración de sistemas y hosting administrado para empresas que necesitan continuidad operativa. Un solo proveedor, responsable de punta a punta.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">Solicitar diagnóstico</a>
            <a href="#servicios" className="btn-ghost">Ver servicios</a>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="glass mt-16 grid grid-cols-2 divide-white/10 overflow-hidden rounded-2xl lg:grid-cols-4 lg:divide-x"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse p-5 sm:p-6">
              <dt className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
