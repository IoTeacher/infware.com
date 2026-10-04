import { navLinks, site } from '@/data/site';
import { imageCredits } from '@/utils/images';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pb-28 pt-16 lg:pb-12">
      <div className="gradient-line absolute inset-x-0 top-0 h-px" />
      <div className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
            <img src="/favicon.svg" alt="" width={28} height={28} className="h-7 w-7" />
            Infware<span className="-ml-2.5 text-gradient">.com</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{site.tagline}</p>
          <address className="mt-5 space-y-1 text-sm not-italic text-slate-400">
            <p><a className="link" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><a className="link" href={site.phoneHref}>{site.phone}</a></p>
            <p>{site.location}</p>
          </address>
        </div>
        <nav aria-label="Pie de página">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`} className="text-slate-400 transition hover:text-white">{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Créditos de imágenes</p>
          <ul className="mt-4 space-y-1.5 text-xs">
            {imageCredits.map((c) => (
              <li key={c.id}><a href={c.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-slate-300">{c.label} — Unsplash</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Infware. Todos los derechos reservados.</p>
        <p>Tijuana, Baja California · www.infware.com</p>
      </div>
    </footer>
  );
}
