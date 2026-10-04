import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { site } from '@/data/site';
import { images } from '@/utils/images';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' });

const title = 'Infware.com | Soporte TI, redes, hosting y VPS en Tijuana';
const description =
  'Soporte técnico empresarial, redes y conectividad, integración de sistemas, registro de dominios, DNS, certificados SSL, hosting y VPS. Continuidad operativa para empresas en Tijuana y todo México.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: site.url,
    siteName: 'Infware',
    title,
    description,
    images: [{ url: images.hero, width: 2400, height: 1400, alt: 'Centro de datos' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [images.hero] },
};

export const viewport: Viewport = { themeColor: '#05070d', colorScheme: 'dark' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Infware',
  url: site.url,
  email: site.email,
  telephone: '+52-664-633-0429',
  address: { '@type': 'PostalAddress', addressLocality: 'Tijuana', addressRegion: 'Baja California', addressCountry: 'MX' },
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="overflow-x-clip bg-ink-950 font-sans text-slate-200 antialiased">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950">
          Saltar al contenido
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
