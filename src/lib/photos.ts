import photos from '../data/photos.json';

export type Photo = {
  src: string; width: number; height: number; alt: string; caption: string;
  author: string; license: string; licenseUrl: string; source: string;
};

export const allPhotos = photos as Record<string, Photo>;

export function getPhoto(id?: string | null): Photo | undefined {
  if (!id) return undefined;
  const p = allPhotos[id];
  if (!p) throw new Error(`Onbekende foto-id "${id}" (zie src/data/photos.json)`);
  return p;
}
