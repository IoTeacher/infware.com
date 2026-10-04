import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{text}</p>}
      <div className={`gradient-line mt-6 h-px w-24 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  );
}
