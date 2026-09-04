export const site = {
  name: 'Hopi Amor',
  tagline: 'Het platform voor Afro-Caribische cultuur in Nederland',
  motto: 'Nos ta huntu',
  description:
    'Hopi Amor is het online magazine en de gids voor Afro-Caribische cultuur in Nederland: agenda, eten, muziek, makers en community. Ontstaan uit het Caribbean Family Festival in Amersfoort.',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'info@hopiamor.nl',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  instagram: 'https://www.instagram.com/hopiamor/',
  linktree: 'https://linktr.ee/hopiamor',
  city: 'Amersfoort',
};

export const nav = [
  { href: '/magazine/', label: 'Magazine' },
  { href: '/agenda/', label: 'Agenda' },
  { href: '/eten/', label: 'Eten' },
  { href: '/muziek/', label: 'Muziek' },
  { href: '/makers/', label: 'Makers' },
  { href: '/community/', label: 'Community' },
  { href: '/festival/', label: 'Festival' },
];

export const cities = ['Amersfoort', 'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Almere', 'Tilburg', 'Groningen', 'Landelijk'];

export const papiamentu = [
  { word: 'Hopi amor', meaning: 'Veel liefde. De naam van dit platform en ons festival.' },
  { word: 'Nos ta huntu', meaning: 'Wij zijn samen. Ons motto.' },
  { word: 'Dushi', meaning: 'Lekker, lief, fijn. Voor eten én mensen.' },
  { word: 'Masha danki', meaning: 'Heel erg bedankt.' },
  { word: 'Bieuw i nobo', meaning: 'Oud en nieuw. Generaties samen.' },
  { word: 'Kome bon', meaning: 'Eet lekker.' },
  { word: 'Ban bai', meaning: 'Laten we gaan.' },
];

export function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return {
    day: d.toLocaleDateString('nl-NL', { day: 'numeric' }),
    month: d.toLocaleDateString('nl-NL', { month: 'short' }).replace('.', ''),
    full: d.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    monthKey: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
  };
}
