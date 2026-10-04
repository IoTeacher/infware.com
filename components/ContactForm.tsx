'use client';
import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { interestChips, serviceOptions } from '@/data/services';
import { site } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { cn } from '@/utils/cn';

type Fields = { nombre: string; empresa: string; email: string; telefono: string; servicio: string; mensaje: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.nombre.trim().length < 2) e.nombre = 'Escribe tu nombre.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.email = 'Ingresa un correo válido.';
  if (f.telefono && f.telefono.replace(/\D/g, '').length < 10) e.telefono = 'El teléfono debe tener al menos 10 dígitos.';
  if (!f.servicio) e.servicio = 'Selecciona un tipo de servicio.';
  if (f.mensaje.trim().length < 10) e.mensaje = 'Describe brevemente tu necesidad (mínimo 10 caracteres).';
  return e;
}

export default function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [chips, setChips] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => {
    setF((p) => ({ ...p, [k]: ev.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };
  const toggle = (c: string) => setChips((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    const body = [
      `Nombre: ${f.nombre}`, `Empresa: ${f.empresa || '-'}`, `Correo: ${f.email}`, `Teléfono: ${f.telefono || '-'}`,
      `Servicio: ${f.servicio}`, `Intereses: ${chips.join(', ') || '-'}`, '', f.mensaje,
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Solicitud de diagnóstico: ${f.servicio}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setF(empty);
    setChips([]);
  };

  const field = 'w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-neon-cyan/60 focus:outline-none focus:ring-2 focus:ring-neon-cyan/30';
  const border = (k: keyof Fields) => (errors[k] ? 'border-rose-500/70' : 'border-white/10');
  const label = 'mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400';
  const err = (k: keyof Fields) => errors[k] && <p id={`e-${k}`} className="mt-1.5 text-xs text-rose-400">{errors[k]}</p>;
  const aria = (k: keyof Fields) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `e-${k}` : undefined });

  return (
    <section id="contacto" className="section relative overflow-hidden">
      <div aria-hidden className="absolute -bottom-40 left-1/2 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-3xl" />
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Solicita un diagnóstico de tu infraestructura."
            text="Cuéntanos qué necesitas. Un ingeniero revisará tu caso y te responderá en menos de un día hábil con los siguientes pasos."
          />
          <Reveal delay={0.1}>
            <dl className="mt-10 space-y-5 text-sm">
              {[
                ['Correo', <a key="e" href={`mailto:${site.email}`} className="link">{site.email}</a>],
                ['Teléfono / buzón de voz', <a key="p" href={site.phoneHref} className="link">{site.phone}</a>],
                ['Ubicación', site.location],
                ['Horario', site.hours],
              ].map(([k, v]) => (
                <div key={k as string} className="flex flex-col gap-1 border-l-2 border-neon-cyan/40 pl-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">{k}</dt>
                  <dd className="text-slate-200">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="glow-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-ink-950">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <p className="mt-6 font-display text-2xl font-semibold text-white">Solicitud recibida. Te contactaremos pronto.</p>
                  <p className="mt-3 max-w-sm text-sm text-slate-400">Se abrió tu cliente de correo con la solicitud lista para enviar. Si no se abrió, escríbenos a <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
                  <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-8">Enviar otra solicitud</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-nombre" className={label}>Nombre *</label>
                    <input id="f-nombre" autoComplete="name" value={f.nombre} onChange={set('nombre')} className={cn(field, border('nombre'))} {...aria('nombre')} />
                    {err('nombre')}
                  </div>
                  <div>
                    <label htmlFor="f-empresa" className={label}>Empresa</label>
                    <input id="f-empresa" autoComplete="organization" value={f.empresa} onChange={set('empresa')} className={cn(field, border('empresa'))} />
                  </div>
                  <div>
                    <label htmlFor="f-email" className={label}>Email *</label>
                    <input id="f-email" type="email" autoComplete="email" value={f.email} onChange={set('email')} className={cn(field, border('email'))} {...aria('email')} />
                    {err('email')}
                  </div>
                  <div>
                    <label htmlFor="f-telefono" className={label}>Teléfono</label>
                    <input id="f-telefono" type="tel" autoComplete="tel" value={f.telefono} onChange={set('telefono')} className={cn(field, border('telefono'))} {...aria('telefono')} />
                    {err('telefono')}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="f-servicio" className={label}>Tipo de servicio *</label>
                    <select id="f-servicio" value={f.servicio} onChange={set('servicio')} className={cn(field, border('servicio'), 'appearance-none')} {...aria('servicio')}>
                      <option value="">Selecciona una opción</option>
                      {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                    {err('servicio')}
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className={label}>Intereses</legend>
                    <div className="flex flex-wrap gap-2">
                      {interestChips.map((c) => {
                        const on = chips.includes(c);
                        return (
                          <button
                            key={c}
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggle(c)}
                            className={cn('rounded-full border px-3.5 py-1.5 text-xs transition', on ? 'border-neon-cyan/60 bg-neon-cyan/10 text-cyan-100' : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-white')}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                  <div className="sm:col-span-2">
                    <label htmlFor="f-mensaje" className={label}>Mensaje *</label>
                    <textarea id="f-mensaje" rows={5} value={f.mensaje} onChange={set('mensaje')} placeholder="Ej. Tenemos 25 equipos, el Wi-Fi se cae en bodega y necesitamos respaldos automáticos." className={cn(field, border('mensaje'), 'resize-y')} {...aria('mensaje')} />
                    {err('mensaje')}
                  </div>
                  <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">* Campos obligatorios. No compartimos tus datos.</p>
                    <button type="submit" className="btn-primary">Solicitar diagnóstico</button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
