import { images } from '@/utils/images';

export type IconName =
  | 'support' | 'network' | 'integration' | 'wrench' | 'server' | 'shield'
  | 'globe' | 'dns' | 'lock' | 'cloud' | 'building' | 'cpu'
  | 'bolt' | 'target' | 'scale' | 'award' | 'link' | 'activity' | 'refresh';

export const itServices = [
  {
    icon: 'support' as IconName,
    title: 'Soporte técnico empresarial',
    description: 'Mesa de ayuda remota y en sitio para usuarios, equipos y aplicaciones críticas.',
    image: images.support,
    bullets: ['Atención remota y presencial', 'Pólizas mensuales con SLA', 'Inventario y control de activos', 'Reportes de incidentes'],
  },
  {
    icon: 'network' as IconName,
    title: 'Redes y conectividad',
    description: 'Diseño, cableado y configuración de redes LAN, Wi-Fi y enlaces entre sucursales.',
    image: images.network,
    bullets: ['Cableado estructurado Cat6/6A', 'Wi-Fi empresarial con roaming', 'VLANs y segmentación', 'VPN sitio a sitio'],
  },
  {
    icon: 'integration' as IconName,
    title: 'Integración de sistemas',
    description: 'Conectamos ERP, correo, directorio y aplicaciones para que la información fluya.',
    image: images.infra,
    bullets: ['Microsoft 365 y Google Workspace', 'Directorio activo e identidades', 'Integraciones vía API', 'Automatización de procesos'],
  },
  {
    icon: 'wrench' as IconName,
    title: 'Mantenimiento preventivo',
    description: 'Programas calendarizados que reducen fallas y extienden la vida útil del equipo.',
    image: images.rack,
    bullets: ['Limpieza y diagnóstico de hardware', 'Actualizaciones y parches', 'Revisión de respaldos', 'Bitácora por equipo'],
  },
  {
    icon: 'server' as IconName,
    title: 'Servidores y almacenamiento',
    description: 'Implementación y administración de servidores físicos, virtuales y NAS.',
    image: images.cloud,
    bullets: ['Virtualización (Proxmox, Hyper-V)', 'NAS y almacenamiento compartido', 'Respaldos 3-2-1', 'Recuperación ante desastres'],
  },
  {
    icon: 'shield' as IconName,
    title: 'Seguridad informática',
    description: 'Protección perimetral y de endpoints alineada al riesgo real de tu operación.',
    image: images.security,
    bullets: ['Firewall de nueva generación', 'Antivirus/EDR administrado', 'Políticas de contraseñas y MFA', 'Análisis de vulnerabilidades'],
  },
];

export const hostingServices = [
  {
    icon: 'globe' as IconName,
    name: 'Registro de dominios',
    description: 'Registro y renovación de .com, .mx, .com.mx y más de 300 extensiones.',
    benefit: 'Tu dominio a tu nombre, con renovación automática y bloqueo de transferencia.',
    price: 'Desde $299 MXN/año',
  },
  {
    icon: 'dns' as IconName,
    name: 'Administración DNS',
    description: 'Gestión de registros A, CNAME, MX, TXT, SPF, DKIM y DMARC.',
    benefit: 'Correo que llega a la bandeja de entrada y cambios sin tiempo fuera.',
    price: 'Incluido con dominio',
  },
  {
    icon: 'lock' as IconName,
    name: 'Certificados SSL',
    description: 'Certificados DV, OV y Wildcard instalados y renovados por nosotros.',
    benefit: 'Candado HTTPS, confianza del cliente y mejor posicionamiento.',
    price: 'Desde $0 con hosting',
  },
  {
    icon: 'cloud' as IconName,
    name: 'Hosting compartido',
    description: 'Alojamiento con discos NVMe, correo corporativo y panel de control.',
    benefit: 'Ideal para sitios corporativos, landing pages y WordPress.',
    price: 'Desde $99 MXN/mes',
  },
  {
    icon: 'building' as IconName,
    name: 'Hosting empresarial',
    description: 'Recursos dedicados, respaldos diarios y soporte prioritario.',
    benefit: 'Rendimiento estable para tiendas en línea y sitios con tráfico alto.',
    price: 'Desde $349 MXN/mes',
  },
  {
    icon: 'cpu' as IconName,
    name: 'VPS (servidores virtuales)',
    description: 'Servidores Linux con acceso root, IP dedicada y escalamiento bajo demanda.',
    benefit: 'Control total para aplicaciones, APIs, ERPs y entornos de pruebas.',
    price: 'Desde $199 MXN/mes',
  },
];

export const solutions = [
  {
    icon: 'network' as IconName,
    title: 'Implementación de redes corporativas',
    description: 'Levantamiento, diseño, instalación y certificación de la red completa de oficinas, naves industriales y sucursales.',
  },
  {
    icon: 'link' as IconName,
    title: 'Integración de sistemas',
    description: 'Unificamos identidades, correo, archivos y aplicaciones de negocio en una plataforma coherente y administrable.',
  },
  {
    icon: 'activity' as IconName,
    title: 'Monitoreo 24/7',
    description: 'Supervisión continua de servidores, enlaces y equipos de red con alertas tempranas antes de que el usuario note la falla.',
  },
  {
    icon: 'refresh' as IconName,
    title: 'Continuidad operativa',
    description: 'Planes de respaldo, redundancia de internet y recuperación ante desastres probados periódicamente.',
  },
  {
    icon: 'cloud' as IconName,
    title: 'Migración a la nube',
    description: 'Movemos servidores de archivos, correo y aplicaciones a la nube con un plan por fases y sin detener la operación.',
  },
];

export const reasons = [
  { icon: 'bolt' as IconName, title: 'Respuesta rápida', text: 'Atención remota en minutos y visita en sitio en Tijuana el mismo día hábil.' },
  { icon: 'target' as IconName, title: 'Diagnóstico preciso', text: 'Identificamos la causa raíz antes de proponer equipo o cambios.' },
  { icon: 'scale' as IconName, title: 'Escalabilidad', text: 'Infraestructura que crece contigo: de 5 a 500 usuarios sin rehacer todo.' },
  { icon: 'award' as IconName, title: 'Experiencia técnica', text: 'Ingenieros con experiencia en redes, servidores, nube y docencia en TI.' },
  { icon: 'link' as IconName, title: 'Integración sin fricción', text: 'Trabajamos con tus proveedores y sistemas actuales, no contra ellos.' },
];

export const stats = [
  { value: '99.9%', label: 'Disponibilidad objetivo en servicios administrados' },
  { value: '<15 min', label: 'Tiempo de primera respuesta remota' },
  { value: '24/7', label: 'Monitoreo de infraestructura' },
  { value: '1 día', label: 'Atención en sitio en Tijuana' },
];

export const testimonials = [
  {
    quote: 'Desde que Infware administra nuestra red no hemos tenido una caída que afecte la producción. Responden rápido y documentan todo.',
    name: 'Gerente de Operaciones',
    company: 'Empresa manufacturera, Tijuana',
  },
  {
    quote: 'Migraron nuestro correo y archivos a la nube en un fin de semana. El lunes todos trabajaban normal, sin pérdida de información.',
    name: 'Directora Administrativa',
    company: 'Despacho contable',
  },
  {
    quote: 'Nos consolidaron dominios, DNS y certificados que estaban dispersos con tres proveedores. Ahora tenemos un solo punto de contacto.',
    name: 'Coordinador de TI',
    company: 'Institución educativa',
  },
  {
    quote: 'El Wi-Fi de la planta era un problema constante. Rediseñaron la red y la cobertura es estable en todas las áreas.',
    name: 'Jefe de Mantenimiento',
    company: 'Centro logístico',
  },
];

export const serviceOptions = [
  'Soporte técnico',
  'Redes y conectividad',
  'Integración de sistemas',
  'Servidores y almacenamiento',
  'Seguridad informática',
  'Dominios, DNS y SSL',
  'Hosting / VPS',
  'Otro',
];

export const interestChips = ['Póliza de soporte', 'Cableado', 'Wi-Fi', 'Firewall', 'Respaldos', 'Nube', 'Dominio', 'Hosting', 'VPS', 'Monitoreo'];
