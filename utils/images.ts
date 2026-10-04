const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  hero: u('1558494949-ef010cbdcc31', 2400),
  support: u('1573164713988-8665fc963095', 1200),
  network: u('1544197150-b99a580bb7a8', 1200),
  security: u('1550751827-4bd374c3f58b', 1200),
  rack: u('1597852074816-d933c7d2b988', 1200),
  cloud: u('1451187580459-43490279c0fa', 1200),
  infra: u('1600267185393-e158a98703de', 1200),
};

export const imageCredits = [
  { label: 'Centro de datos (hero)', id: '1558494949-ef010cbdcc31' },
  { label: 'Soporte técnico', id: '1573164713988-8665fc963095' },
  { label: 'Cableado de red', id: '1544197150-b99a580bb7a8' },
  { label: 'Ciberseguridad', id: '1550751827-4bd374c3f58b' },
  { label: 'Almacenamiento (disco duro)', id: '1597852074816-d933c7d2b988' },
  { label: 'Red global / nube', id: '1451187580459-43490279c0fa' },
  { label: 'Infraestructura TI', id: '1600267185393-e158a98703de' },
].map((c) => ({ ...c, url: `https://unsplash.com/photos/${c.id}` }));
